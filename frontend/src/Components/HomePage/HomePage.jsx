import React from 'react'
import './HomePage.css'
import NavBar from '../NavBar/NavBar'
import LatestVideoPlayer from './LatestVideoOnYoutube/LatestVideoPlayer'

export default function HomePage(){
    return (
        <React.Fragment>
            <NavBar/>
            <LatestVideoPlayer/>
        </React.Fragment>
    )
}