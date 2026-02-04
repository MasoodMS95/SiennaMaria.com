import React, { useEffect, useState } from "react";

export default function HomePage(){
    const [latestVideo, setLatestVideo] = useState(null);
    const [isLatestVideoLoaded, setisLatestVideoLoaded] = useState(false);
    

    useEffect(()=>{
        
    }, []);

    return (
        <React.Fragment>
            {isLatestVideoLoaded &&
                <div>
                    TEST
                </div>
            }
        </React.Fragment>
    )
}