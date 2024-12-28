import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import peperuney from "../assets/images/webp/peperuney-front-tv.webp";
import block from "../assets/images/webp/block-txt.webp";
import screen from "../assets/images/webp/tv-screen.webp";
import Icon from "../common/Icons";

const PeperuneyToons = () => {
    const [play, setPlay] = useState(false);

    const handlePlayClick = () => {
        setPlay(true);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);

    return (
        <div className="flex flex-col">
            <div className="border-t-4 border-b-4 border-black bg-gray w-full h-[39px]"></div>
            <div className="md:bg-room-layer bg-room-mobile bg-no-repeat bg-100 bg-cover bg-center xl:bg-left min-h-[700px] md:min-h-[900px] pt-8 relative overflow-hidden max-sm:-mt-[1px]">
                <img src={block} alt="block" className="mx-auto lg:mr-[70px] mt-20 pointer-events-none" />
                <img
                    src={peperuney}
                    alt="peperuney"
                    className="ml-auto absolute max-w-[347px] md:max-w-[668px] w-full right-0 z-20 pointer-events-none -bottom-5 md:bottom-0"
                />
                <div className="container relative">
                    <div className="z-10 absolute xl:left-[374px] lg:left-[216px] left-6 sm:left-10 md:left-[88px] max-w-[265px] sm:max-w-[450px] md:max-w-[477px] w-full top-[195px] sm:top-[160px] md:top-[89px]">
                        <div data-aos="fade-up" className="relative">
                            <img src={screen} alt="screen" className="z-10 relative" />
                            {play ? (
                                <iframe
                                    className="absolute left-0 top-0 w-full h-full z-20"
                                    src="https://www.youtube.com/embed/DPrUFesHCh4"
                                    title="Peperuney Pizza Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div
                                    onClick={handlePlayClick}
                                    className="bg-white grid place-items-center cursor-pointer h-16 w-16 rounded-full absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border-2 border-black duration-300 ease-linear hover:opacity-70"
                                >
                                    <Icon iconName="play" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeperuneyToons;
