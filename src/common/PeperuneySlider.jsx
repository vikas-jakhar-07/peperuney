import React, { useEffect, useRef } from "react";
import poperuneyImg from "../assets/images/webp/pepeureny-image.webp";

const Peperuney = ({ className = "", bgColor = "bg-red-500" }) => {
    const sliderRef = useRef(null);
    const sizeImage = 233;
    const items = 16;
    const sliderspeed = 2000;

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;
        const children = Array.from(slider.children);
        children.forEach((child) => {
            const clone = child.cloneNode(true);
            slider.appendChild(clone);
        });

        let currentIndex = 0;

        const startSliding = () => {
            const totalItems = items * 2; 
            currentIndex++;
            slider.style.transition = `transform ${sliderspeed / 1000}s linear`;
            slider.style.transform = `translateX(-${currentIndex * sizeImage}px)`;

            if (currentIndex >= items) {
                setTimeout(() => {
                    slider.style.transition = "none";
                    slider.style.transform = "translateX(0)";
                    currentIndex = 0;
                }, sliderspeed);
            }
        };

        const interval = setInterval(startSliding, sliderspeed);

        return () => clearInterval(interval);
    }, [sliderspeed, sizeImage, items]);

    return (
        <div
            className={`${className} showcase relative overflow-hidden mx-auto w-full flex border-t-4 border-black border-b-[6px] ${bgColor}`}
        >
            <div
                ref={sliderRef}
                className="slider flex relative gap-10"
                style={{ width: `${items * 2 * sizeImage}px` }} // Double the width for clones
            >
                {Array.from({ length: items }).map((_, index) => (
                    <img
                        key={index}
                        src={poperuneyImg}
                        alt={`Item ${index}`}
                        className="item w-[163px] h-[28px] sm:w-[233px] sm:h-[40px] object-cover cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
};

export default Peperuney;
