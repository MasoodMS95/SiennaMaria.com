import React from "react";
import persistedVideo from "../../../data/latestVideo.json";
import { selectedVideo } from "./videoData";
import "./LatestVideoPlayer.css"

export default function LatestVideoPlayer(){
    const video = selectedVideo(persistedVideo);
    
    return (
        <div className='latest-youtube-video'>
            <iframe className="video-player" src={`https://www.youtube.com/embed/${video.videoId}?vq=hd1080`} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
