import React from "react";
import pcImage from "../../assets/pc_1.png"
import "./Setup.css"

export default function Setup(){
    const specs = {
        "Processor": "11900K",
        "GPU": "RTX 5080",
        "Memory": "something"
    }
    return(
        <React.Fragment>
            <div className="setup-photos">
                <div className="photo-row" id="photo-row-1">
                    <img className="pc-image pc-image-1" src={pcImage}/>
                    <span className="standard-font">
                        My Setup:
                        <ul className="setup-list">
                            {Object.keys(specs).map((part) => (
                              
                                <li key={part}>{part}: {specs[part]}</li>
                              
                            ))}
                        </ul>
                    </span>
                </div>
                <div className="photo-row" id="photo-row-2">

                </div>
            </div>
        </React.Fragment>
    )
}