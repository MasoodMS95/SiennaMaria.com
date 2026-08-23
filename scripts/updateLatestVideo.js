const fs = require("node:fs/promises");
const path = require("node:path");

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_UPLOADS_PLAYLIST_ID = "UUv6v8RgrQYdBN1EYXvPw5UA";
const DEFAULT_VIDEO_PATH = path.resolve(
    __dirname,
    "../frontend/src/data/latestVideo.json"
);

function validateVideo(value, source) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new Error(`${source} is not an object.`);
    }

    const videoId = value.videoId;
    const title = value.title;
    const publishedAt = value.publishedAt;

    if (typeof videoId !== "string" || !/^[A-Za-z0-9_-]{11}$/.test(videoId.trim())) {
        throw new Error(`${source} has an invalid video ID.`);
    }

    if (typeof title !== "string" || title.trim() === "") {
        throw new Error(`${source} has an invalid title.`);
    }

    if (
        typeof publishedAt !== "string" ||
        publishedAt.trim() === "" ||
        !Number.isFinite(Date.parse(publishedAt))
    ) {
        throw new Error(`${source} has an invalid publishedAt value.`);
    }

    return {
        videoId: videoId.trim(),
        title: title.trim(),
        publishedAt: publishedAt.trim(),
    };
}

function videoFromYouTubeResponse(data) {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error("YouTube returned an invalid response body.");
    }

    if (!Array.isArray(data.items)) {
        throw new Error("YouTube response is missing a valid items array.");
    }

    if (data.items.length === 0) {
        throw new Error("YouTube returned no uploaded videos.");
    }

    const snippet = data.items[0]?.snippet;

    if (!snippet || typeof snippet !== "object" || Array.isArray(snippet)) {
        throw new Error("YouTube response is missing the video snippet.");
    }

    const resourceId = snippet.resourceId;

    if (!resourceId || typeof resourceId !== "object" || Array.isArray(resourceId)) {
        throw new Error("YouTube response is missing the video resource ID.");
    }

    return validateVideo(
        {
            videoId: resourceId.videoId,
            title: snippet.title,
            publishedAt: snippet.publishedAt,
        },
        "YouTube video"
    );
}

async function parseJsonResponse(response) {
    try {
        return await response.json();
    } catch {
        throw new Error("YouTube returned malformed JSON.");
    }
}

async function readStoredVideo(latestVideoPath) {
    let contents;

    try {
        contents = await fs.readFile(latestVideoPath, "utf8");
    } catch (error) {
        throw new Error(`Unable to read latestVideo.json: ${error.message}`);
    }

    let parsed;

    try {
        parsed = JSON.parse(contents);
    } catch {
        throw new Error("latestVideo.json contains invalid JSON.");
    }

    return validateVideo(parsed, "latestVideo.json");
}

async function writeStoredVideo(latestVideoPath, video) {
    const temporaryPath = `${latestVideoPath}.tmp`;

    try {
        await fs.writeFile(
            temporaryPath,
            `${JSON.stringify(video, null, 4)}\n`,
            "utf8"
        );
        await fs.rename(temporaryPath, latestVideoPath);
    } catch (error) {
        await fs.rm(temporaryPath, { force: true }).catch(() => {});
        throw new Error(`Unable to write latestVideo.json: ${error.message}`);
    }
}

async function updateLatestVideo({
    apiKey = process.env.YOUTUBE_API_KEY,
    playlistId = YOUTUBE_UPLOADS_PLAYLIST_ID,
    fetchImpl = globalThis.fetch,
    latestVideoPath = DEFAULT_VIDEO_PATH,
} = {}) {
    if (typeof apiKey !== "string" || apiKey.trim() === "") {
        throw new Error("YOUTUBE_API_KEY is not configured.");
    }

    if (typeof playlistId !== "string" || playlistId.trim() === "") {
        throw new Error("The YouTube uploads playlist ID is not configured.");
    }

    if (typeof fetchImpl !== "function") {
        throw new Error("This Node version does not provide fetch().");
    }

    const requestUrl = new URL(YOUTUBE_API_URL);
    requestUrl.search = new URLSearchParams({
        part: "snippet",
        playlistId: playlistId.trim(),
        maxResults: "1",
        key: apiKey.trim(),
    }).toString();

    let response;

    try {
        response = await fetchImpl(requestUrl, {
            signal: AbortSignal.timeout(15_000),
        });
    } catch (error) {
        throw new Error(`Unable to reach YouTube: ${error.message}`);
    }

    if (!response || typeof response.ok !== "boolean") {
        throw new Error("YouTube returned an invalid HTTP response.");
    }

    if (!response.ok) {
        throw new Error(`YouTube request failed with HTTP ${response.status}.`);
    }

    const responseData = await parseJsonResponse(response);
    const newVideo = videoFromYouTubeResponse(responseData);
    const storedVideo = await readStoredVideo(latestVideoPath);

    if (newVideo.videoId === storedVideo.videoId) {
        console.log("No new YouTube video.");
        return false;
    }

    await writeStoredVideo(latestVideoPath, newVideo);

    console.log(`New YouTube video found: ${newVideo.videoId}`);
    return true;
}

if (require.main === module) {
    updateLatestVideo().catch((error) => {
        console.error(`Latest video update failed: ${error.message}`);
        process.exitCode = 1;
    });
}

module.exports = {
    updateLatestVideo,
    validateVideo,
    videoFromYouTubeResponse,
};
