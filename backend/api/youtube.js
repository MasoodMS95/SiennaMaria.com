const router = require("express").Router();

const TTL_MS = 7 * 24 * 60 * 60 * 1000;

let cache = {
    videoID: null,
    videoTitle: null,
    expiresAt: 0,
    inFlight: null,
};

async function fetchVideoID() {
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
        throw new Error("YouTube API key is not configured.");
    }

    const fetchedResponse = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCv6v8RgrQYdBN1EYXvPw5UA&order=date&type=video&maxResults=1&key=${API_KEY}`
    );

    const parsedResponse = await fetchedResponse.json();

    if (!fetchedResponse.ok) {
        return parsedResponse.error
            ? {
                error:
                    `Bad API Request: ${parsedResponse.error.message}`,
            }
            : {
                error: "Something went wrong.",
            };
    }

    const video = parsedResponse.items?.[0];

    if (!video) {
        return {
            error: "No videos were returned by YouTube.",
        };
    }

    return {
        videoID: video.id.videoId,
        title: video.snippet.title,
    };
}

router.get("/latest", async (req, res) => {
    try {
        if (
            cache.videoID &&
            Date.now() < cache.expiresAt
        ) {
            return res.status(200).json({
                videoId: cache.videoID,
                title: cache.videoTitle,
            });
        }

        if (!cache.inFlight) {
            cache.inFlight = (async () => {
                const fetchedVideoInfo =
                    await fetchVideoID();

                if (fetchedVideoInfo.error) {
                    throw new Error(
                        fetchedVideoInfo.error
                    );
                }

                cache.videoID =
                    fetchedVideoInfo.videoID;

                cache.videoTitle =
                    fetchedVideoInfo.title;

                cache.expiresAt =
                    Date.now() + TTL_MS;

                return {
                    videoID: cache.videoID,
                    title: cache.videoTitle,
                };
            })().finally(() => {
                cache.inFlight = null;
            });
        }

        const data = await cache.inFlight;

        return res.status(200).json({
            videoId: data.videoID,
            title: data.title,
        });
    } catch (err) {
        console.error(
            "Latest video request failed:",
            err
        );

        return res.status(502).json({
            error: err.message,
        });
    }
});

module.exports = router;