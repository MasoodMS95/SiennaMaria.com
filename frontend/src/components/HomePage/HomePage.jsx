import React from 'react'
import { useNavigate  } from 'react-router-dom';
import LatestVideoPlayer from './LatestVideoOnYoutube/LatestVideoPlayer'
import './HomePage.css'

export default function HomePage(){
    let navigate = useNavigate();
    return (
        <React.Fragment>
            <h2 className='home-title standard-font'>Latest Video</h2>
            <LatestVideoPlayer/>
            <h2 className='standard-font'>Follow me on my <span onClick={()=>navigate('/socials')} className='redirect'>Socials!</span></h2>
        </React.Fragment>
    )
}