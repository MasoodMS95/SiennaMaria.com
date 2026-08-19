import React from "react";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import "./Setup.css";

export default function Setup() {
    return (
        <React.Fragment>
            <ImageCarousel />

            <div className="standard-font setup-list-container">
                <h3 className="setup-header">My Setup:</h3>

                <ul className="setup-list">
                    <li className="setup-left">
                        <span className="pc-part">Motherboard</span>: ASUS Z590-P
                    </li>
                    <li className="setup-center">
                        <span className="pc-part">Processor</span>: Intel i9 11900K
                    </li>
                    <li className="setup-right">
                        <span className="pc-part">GPU</span>: MSI Gaming Trio RTX 5080
                    </li>
                    <li className="setup-left">
                        <span className="pc-part">Memory</span>: 64GB Corsair Vengeance
                    </li>
                    <li className="setup-center">
                        <span className="pc-part">Case</span>: Hyte Y60
                    </li>
                    <li className="setup-right">
                        <span className="pc-part">PSU</span>: Super Flower Leadex VII XG 1300W
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}