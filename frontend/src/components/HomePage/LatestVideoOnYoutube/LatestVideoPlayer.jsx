import React, { useEffect, useState } from "react";
import "./LatestVideoPlayer.css"

export default function LatestVideoPlayer(){
    let [latestVideo, setLatestVideo] = useState(null);
    let [title, setTitle] = useState("");
    let [error, setError] = useState(false);

    async function fetchVideo(){
        try{
            let videoRequest = await fetch('/api/youtube/latest', {
                method: 'GET'
            })
            let parsedVideoRequest = await videoRequest.json();
            if(videoRequest.ok){
                setLatestVideo(parsedVideoRequest['videoID'])
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

    if(!error){
        return (
            <div className='latest-youtube-video'>
                <iframe width="680" height="383" src={`https://www.youtube.com/embed/${latestVideo}?vq=hd1080`} title={`${title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        )
    }
}