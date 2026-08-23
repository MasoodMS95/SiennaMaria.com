export const FALLBACK_VIDEO = Object.freeze({
    videoId: "Eta4IxPfxME",
    title: "Sienna Maria YouTube video",
});

export function validVideo(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        return null;
    }

    if (
        typeof value.videoId !== "string" ||
        !/^[A-Za-z0-9_-]{11}$/.test(value.videoId.trim())
    ) {
        return null;
    }

    if (
        typeof value.publishedAt !== "string" ||
        value.publishedAt.trim() === "" ||
        !Number.isFinite(Date.parse(value.publishedAt))
    ) {
        return null;
    }

    return {
        videoId: value.videoId.trim(),
        title:
            typeof value.title === "string" && value.title.trim()
                ? value.title.trim()
                : FALLBACK_VIDEO.title,
        publishedAt: value.publishedAt.trim(),
    };
}

export function selectedVideo(value) {
    return validVideo(value) ?? FALLBACK_VIDEO;
}
