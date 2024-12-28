import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pizzaNomicsLayer from '../assets/images/webp/pizzanomics-layer.webp'
import peperunryImg from '../assets/images/webp/pepe-runny-image.webp'
import taxLayer from "../assets/images/webp/tax-layer.webp";
import pizza from "../assets/images/webp/green-pizza.webp";
import window from "../assets/images/webp/window.webp";
import coin from "../assets/images/webp/coin-gecko.webp";
import dexScreener from "../assets/images/webp/dex-screener.webp";
import dexTools from "../assets/images/webp/dex-tools.webp";
import Icon from '../common/Icons'

const Pizzanomics = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
        });
    }, []);

    return (
        <div className='relative bg-crimson-red overflow-hidden'>
            <img className='sm:w-full max-w-[972px] w-[972px] relative z-10 object-contain sm:max-w-full' src={pizzaNomicsLayer} alt="pizzanomics-layer" />
            <p className='font-luckiest absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-16 xl:left-20 top-[50px] sm:top-4 md:top-[30px] drop-shadow-[10.7px_-10.7px_0px_#FBDB81] text-burnt-orange text-[60px] sm:text-[70px] lg:text-[90px] xl:text-[141px] leading-[100%] z-20'>PIZZANOMICS</p>
            <div data-aos="zoom-out-up" className='flex lg:flex-row flex-col-reverse justify-between gap-5'>
                <div className='relative z-10 lg:-mt-10 xl:-mt-20 lg:ml-[60px] xl:ml-[67px]'>
                    <img className='max-w-[301px] sm:max-w-[420px] xl:max-w-[485px] w-full mx-auto lg:mx-0' src={peperunryImg} alt="peperunry-image" />
                </div>
                <div className="xl:max-w-[812px] lg:w-full -mx-5 lg:mx-0">
                    <div className='bg-black relative -rotate-3 w-full h-[341px] pb-10 sm:pb-11 flex justify-center items-end xl:-mt-[240px] -mt-[237px] sm:-mt-[225px] lg:-mt-[260px]'>
                        <p className='font-luckiest font-normal text-[70px] sm:text-[80px] md:text-[85px] xl:text-[135px] leading-[100%] text-white uppercase mb-0.5'>42 BILLION</p>
                    </div>
                    <p className='font-luckiest text-4xl sm:text-custom-8xl sm:leading-custom-8xl font-normal text-white relative mt-5 -rotate-3 text-center'>token supply</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-2 relative">
                <div className="bg-black -rotate-[4deg] -mx-7 xl:h-[111px] lg:w-[630px] px-7 my-auto relative z-10">
                    <p className='text-white font-luckiest font-normal text-[52px] sm:text-[75px] xl:text-[92px] text-center lg:text-left lg:ml-11 leading-[100%] text-nowrap mb-12 lg:mb-2.5 my-2.5'>LP BURNED</p>
                </div>
                <div className="lg:max-w-[942px] lg:w-full relative z-10 -mt-12 lg:mt-0 -mx-10 lg:mx-0">
                    <img src={taxLayer} alt="taxLayer" className='sm:w-full object-cover w-[610px] max-w-[610px] sm:max-w-full' />
                    <p className='text-burnt-orange drop-shadow-[6px_-6px_0px_#FBDB81] absolute left-1/2 top-[20%] -translate-x-1/2 tracking-[0.04em] text-nowrap font-normal text-[60px] sm:text-[80px] xl:text-[115px] leading-[100%] uppercase font-luckiest'>zero tax</p>
                </div>
                <span className='lg:flex bg-crimson-red w-full absolute left-0 hidden -mt-[1px] -top-1 xl:top-10 z-[1] h-24'></span>
            </div>
            <div className='sm:bg-pizzanomics-bg bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center max-sm:bg-mobile-view'>
                <div className="sm:bg-tax-layer max-sm:bg-mobile-layer bg-100 -mt-[207px] bg-cover bg-no-repeat bg-center min-h-[1190px] pt-[162px]">
                    <div className="flex w-full flex-col lg:flex-row gap-7 sm:gap-12 xl:ml-auto px-5 xl:px-0 xl:mx-11 mx-auto xl:w-fit xl:-mb-12 lg:-mb-0 md:-mb-16">
                        <div data-aos="slide-right" className="max-w-[503px] w-full pt-7 mx-auto lg:mx-0 flex flex-col items-center">
                            <img src={window} alt="window" className='w-full' />
                            <p className='font-luckiest mt-4 uppercase font-normal text-[52px] sm:text-custom-8xl text-center leading-[100%] text-white drop-shadow-[6px_6px_0px_#000000]'>bake to earn</p>
                            <button className='mt-5'><Icon className='transition duration-300 transform hover:scale-105' iconName='earn' /></button>
                        </div>
                        <img data-aos="slide-left" src={pizza} alt="pizza" className='lg:max-w-[656px] sm:max-w-[500px] max-w-[468px] mx-auto sm:w-full -ml-14 sm:mx-auto lg:mx-0 lg:min-h-[851px] max-sm:-mt-8' />
                    </div>
                    <div data-aos="fade-up" className='max-sm:bg-pizzanomics-card bg-cover bg-no-repeat bg-center'>
                        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:flex-row mx-auto max-w-[1240px] w-full px-5 gap-10 xl:gap-[60px] mt-[220px] sm:mt-[246px] sm:pt-6 md:pt-0 lg:mt-[250px] pb-[75px] sm:pb-10">
                            <img src={coin} alt="coin" className='lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px]' />
                            <img src={dexScreener} alt="dexScreener" className='lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px]' />
                            <img src={dexTools} alt="dexTools" className='lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizzanomics