import React from "react";
import { useState, useEffect } from "react";
import pcFullImage from "../../../assets/images/pc_1.png";
import pcFrieren1 from "../../../assets/images/pc_2.png";
import pcFairy1 from "../../../assets/images/pc_3.png";
import pcFrieren2 from "../../../assets/images/pc_4.png";
import pcFairy2 from "../../../assets/images/pc_5.png";
import "./ImageCarousel.css";

export default function ImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { id: 1, image: pcFullImage },
        { id: 2, image: pcFrieren1 },
        { id: 3, image: pcFrieren2 },
        { id: 4, image: pcFairy1 },
        { id: 5, image: pcFairy2 },
    ];

    const previousImageIndex =
        currentImageIndex === 0
            ? images.length - 1
            : currentImageIndex - 1;

    const nextImageIndex =
        (currentImageIndex + 1) % images.length;

    const handlePreviousClick = () => {
        setCurrentImageIndex((currentIndex) =>
            currentIndex === 0
                ? images.length - 1
                : currentIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex(
            (currentIndex) =>
                (currentIndex + 1) % images.length
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 10000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <div className="image-carousel">
            <button
                className="photo-button prev-photo-button"
                onClick={handlePreviousClick}
            >
                &#10094;
            </button>

            <div className="carousel-images">
                <img
                    src={images[previousImageIndex].image}
                    alt="Previous"
                    className="pc-image side-image"
                />

                <img
                    src={images[currentImageIndex].image}
                    alt="Current"
                    className="pc-image current-image"
                />

                <img
                    src={images[nextImageIndex].image}
                    alt="Next"
                    className="pc-image side-image"
                />
            </div>

            <button
                className="photo-button next-photo-button"
                onClick={handleNextClick}
            >
                &#10095;
            </button>
        </div>
    );
}