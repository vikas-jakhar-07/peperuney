import React, { useEffect } from "react";
import clickImg from '../assets/images/webp/click-image.webp'
import CommonHeading from '../common/Heading'
import casinoImg from '../assets/images/webp/casino-logo.webp'
import Description from '../common/Description'
import Icon from '../common/Icons'
import PeperuneySlider from '../common/PeperuneySlider'
import AOS from "aos";
import "aos/dist/aos.css";

const ClickToEarn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div className='flex flex-col'>
      <PeperuneySlider className='bg-crimson-red h-[76px] sm:h-[100px] flex items-center' />
      <div className='sm:bg-click-bg bg-cover bg-no-repeat bg-center relative max-sm:bg-click-small max-sm:h-[1430px]' id="arcade">
        <img className='lg:max-w-[388px] sm:max-w-[279px] md:max-w-[300px] sm:block hidden absolute left-0 bottom-0' src={clickImg} alt="click-image" />
        <div className='container sm:pt-[100px] pt-[60px] relative z-10 pb-[128px] justify-center items-center flex lg:items-end lg:justify-end'>
          <div data-aos="fade-up" className='sm:max-w-[682px] w-full'>
            <div className='flex justify-center items-center flex-col'>
              <CommonHeading className='sm:max-w-[555px] w-full text-center sm:block hidden' text={'CLICK-TO-EARN AND ARCADE'} />
              <CommonHeading className='sm:hidden block text-center' text={'CLICK TO EARN AND ARCADE'} />
              <img className='sm:max-w-[250px] -mt-2 sm:-mt-5 max-w-[195px]' src={casinoImg} alt="casino-image" />
            </div>
            <div className='bg-casino-bg bg-no-repeat bg-center bg-[length:100%_100%] -mt-[50px]'>
              <Description className='max-w-[687px] px-4 pb-8 pt-14 sm:px-[30px] sm:pb-[30px] sm:pt-[50px]' text={'HEY YOU! Yeah, YOU! So you made it this far… Hell yeah I’m impressed! Means you’re serious about pizza, vibes, and big-time wins. Catch me at the slots or the poker table, always *ALL-IN* for that next big score. It’s the thrill, baby—the gamble, the grind—it keeps me fired up to build the ULTIMATE PIZZA EMPIRE! Wanna roll with the best? Smash that button, start stackin’ up, and show me what you got. FEELS GREAT MAN!'} />
            </div>
            <div className='sm:flex hidden justify-center w-full items-center flex-wrap gap-2 sm:gap-[30px] sm:mt-[40px]'>
              <button className='transition duration-300 transform hover:scale-105'><Icon className='max-w-[241px] w-full' iconName='playNow' /></button>
              <button className='transition duration-300 transform hover:scale-105'><Icon className='max-w-[241px] w-full' iconName='miniApp' /></button>
            </div>
            <div className='flex flex-col gap-2 sm:hidden justify-center items-center mt-2'>
              <button className='transition duration-300 transform hover:scale-105'><Icon className='max-w-[335px] w-full' iconName='playNowTwo' /></button>
              <button className='transition duration-300 transform hover:scale-105'><Icon className='max-w-[335px] w-full' iconName='miniAppTwo' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClickToEarn