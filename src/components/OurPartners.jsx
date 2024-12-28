import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { OUR_PARTNERS } from '../common/Helper'
import weWorkImg from '../assets/images/webp/we-work-with.webp'
import Heading from '../common/Heading'

const OurPartners = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);

    return (
        <div className='bg-our-partners bg-cover bg-no-repeat bg-center lg:pt-[113px] pt-16 pb-[66px] lg:pb-[311px]' id="meme">
            <div className='container'>
                <div data-aos="fade-up" className='flex flex-col justify-center items-center max-w-[1200px] w-full mx-auto'>
                    <Heading className='text-center' text={'OUR PARTNERS'} />
                    <img src={weWorkImg} alt="work" className='lg:w-[444px] w-[250px] lg:pb-[120px] sm:pb-12 pb-4 sm:-mt-5 -mt-3' />
                    <div className='flex flex-wrap flex-row -mx-3 justify-center w-full'>
                        {OUR_PARTNERS.map((obj, index) => (
                            <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-3 flex justify-center items-center lg:pb-6 pb-5'>
                                <img src={obj.image} alt="svg" className='sm:max-w-[360px] max-w-[236px] w-full' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPartners