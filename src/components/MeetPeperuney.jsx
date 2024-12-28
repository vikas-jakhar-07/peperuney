import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import meetLayer from '../assets/images/webp/meet-layer.webp'
import meetSmaalLayer from '../assets/images/webp/meet-small-layer.webp'
import meetCartoon from '../assets/images/webp/meet-cartoon-image.webp'
import Heading from '../common/Heading'
import Description from '../common/Description'
import Icon from '../common/Icons'
import pizzaGuy from '../assets/images/webp/pizza-guy.webp'
import meetCloud from '../assets/images/webp/meet-bg.webp'
import { BuyPepruney } from './BuyPepruney'
import CloudsImg from '../assets/images/webp/clouds-image.webp'

const MeetPeperuney = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);

    return (
        <div className='relative meet-bg'>
            <img className='absolute sm:block hidden -top-1 w-full max-xl:h-[200px] xl:h-[268px]' src={meetLayer} alt="meet-layer" />
            <img src={meetSmaalLayer} className='absolute top-0 h-[200px] sm:hidden block w-full' alt="small-layer" />
            <img className='absolute top-8 sm:hidden block' src={CloudsImg} alt="clouds-image" />
            <div className='container max-w-[1360px] lg:pb-[293px] lg:pt-[250px] pt-[200px]'>
                <div className='w-full relative'>
                    <img className='absolute -top-28 left-0 sm:block hidden' src={meetCloud} alt="meet-image" />
                    <div className='lg:flex-row flex-col max-lg:flex-col-reverse flex gap-1 relative z-10'>
                        <div data-aos="fade-right" className='lg:w-[44%] flex items-center justify-center'>
                            <img className='max-w-[580px] w-full max-sm:-mt-8' src={meetCartoon} alt="meet-cartoon" />
                        </div>
                        <div data-aos="fade-left" className='lg:w-[56%] w-full'>
                            <Heading className='text-center lg:pb-3 sm:pb-6' text={'MEET PEPERUNEY'} />
                            <div className='sm:bg-meet-vector max-sm:bg-meet-small bg-[length:100%_100%] bg-no-repeat bg-center sm:px-7 sm:py-10 px-3'>
                                <div className='flex justify-center sm:-mt-16 xl:-mt-20'><img className='lg:max-w-[332px] sm:max-w-[195px] max-w-[0] max-sm:h-[77px] w-full' src={pizzaGuy} alt="pizza-guy" /></div>
                                <div className='sm:ps-8 ps-4'>
                                    <Description className='lg:max-w-[613px] w-full' text={`The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’`} />
                                    <div className='border-b border-charcoal-black max-sm:pt-2'></div>
                                    <div className='flex justify-between sm:pt-5 items-center sm:pb-4 pb-3'>
                                        <p className='xl:text-custom-3xl xl:leading-custom-5xl text-2xl text-charcoal-black font-schoolbell'>FEELS GREAT MAN!</p>
                                        <button><Icon className='xl:max-w-[337px] lg:max-w-[240px] max-w-[119px] transition duration-300 transform hover:scale-105' iconName='manifesto' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BuyPepruney />
        </div>
    )
}

export default MeetPeperuney