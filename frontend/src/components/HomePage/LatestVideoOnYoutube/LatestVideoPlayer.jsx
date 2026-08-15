import React, { useEffect, useState } from "react";
import "./LatestVideoPlayer.css"

export default function LatestVideoPlayer(){
    let [latestVideo, setLatestVideo] = useState(null);
    let [title, setTitle] = useState("");
    let [error, setError] = useState(false);

    const defaultVideo = "Eta4IxPfxME"

    async function fetchVideo(){
        try{
            let videoRequest = await fetch('/api/youtube/latest', {
                method: 'GET'
            })
            if(videoRequest.ok){
                let parsedVideoRequest = await videoRequest.json();
                setLatestVideo(parsedVideoRequest['videoId'])
                setTitle(parsedVideoRequest['title']);
            }
            else{
                console.error(`Server returned bad gateway with message: ${parsedVideoRequest.error}`)
                setError(true);
            }
        }
        catch(e){
            console.error(e.message);
            setError(true);
        }
    }

    useEffect(()=>{
        fetchVideo();
    }, [])
    
    return (
        <div className='latest-youtube-video'>
            <iframe className="video-player" src={`https://www.youtube.com/embed/${error?defaultVideo:latestVideo}?vq=hd1080`} title={`${title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}