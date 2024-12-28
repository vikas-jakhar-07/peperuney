import React, { useRef, useState, useEffect } from 'react';
import PeperuneySlider from '../common/PeperuneySlider'
import { ACCORDION_ITEMS } from '../common/Helper';
import whatFaq from '../assets/images/webp/what-faq.webp'
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col'>
            <PeperuneySlider className='bg-green h-[76px] sm:h-[100px] flex items-center' />
            <div className='bg-faq-bg bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center py-14 sm:pt-[89px] sm:pb-[106px]' id='faq'>
                <div className='container'>
                    <img className='sm:max-w-[530px] max-w-[280px] mx-auto text-center pb-4' src={whatFaq} alt="what-faq" />
                    <div data-aos="fade-up" className='max-w-[687px] mx-auto'>
                        {ACCORDION_ITEMS.map((item, index) => (
                            <div
                                key={index}
                                className="bg-transparent-brown border border-white rounded-[10px] mb-[18px] transition-all duration-500"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`flex items-center justify-between font-schoolbell w-full text-left text-white text-2xl sm:text-custom-3xl sm:leading-custom-5xl font-normal ${activeIndex === index ? 'p-4 sm:pt-[18px] pb-1 sm:px-6' : 'px-4 py-5'
                                        }`}
                                >
                                    <span className='max-w-[569px]'>{item.title}</span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-0' : 'rotate-180'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {activeIndex === index ? (
                                            <path d="M5 12H19" stroke="white" strokeWidth="1.48" />
                                        ) : (
                                            <>
                                                <path d="M12 5V19" stroke="white" strokeWidth="1.48" />
                                                <path d="M5 12H19" stroke="white" strokeWidth="1.48" />
                                            </>
                                        )}
                                    </svg>
                                </button>
                                <div
                                    ref={(el) => (contentRefs.current[index] = el)}
                                    style={{
                                        height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                                    }}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                >
                                    <div className="p-[0_16px_16px_16px] sm:pb-2 sm:px-6 sm:pt-2 text-white font-schoolbell font-normal text-xl sm:text-2xl sm:leading-custom-4xl">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq