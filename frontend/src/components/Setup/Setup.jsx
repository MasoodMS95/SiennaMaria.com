import React from "react";
import ImageCarousel from "./ImageCarousel/ImageCarousel"
import "./Setup.css"

export default function Setup() {
    const specs = {
        "Motherboard": "ASUS Z590-P",
        "Processor": "Intel i9 11900K",
        "GPU": "MSI Gaming Trio RTX 5080",
        "Memory": "64GB Corsair Vengeance",
        "PSU": "Super Flower Leadex VII XG 1300W",
        "Case": "Hyte Y60"
    }

    return (
        <React.Fragment>
            <ImageCarousel/>
            <div className="standard-font setup-list-container">
                <h3 className="setup-header">My Setup:</h3>
                <ul className="setup-list">
                    {Object.keys(specs).map((part) => (
                        <li key={part}><span className="pc-part">{part}</span>: {specs[part]}</li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
}