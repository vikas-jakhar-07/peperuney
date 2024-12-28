import React from 'react'
import footerLayer from '../assets/images/webp/footer-vector.webp'
import footerVector from '../assets/images/webp/footer-vector-mobile.webp'
import Icon from './Icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
      <div className='relative'>
          <img className='absolute sm:block hidden -top-[54px] h-[120px] w-full' src={footerLayer} alt="footer-layer" />
          <img className='absolute sm:hidden block -top-8 h-[272px] w-full' src={footerVector} alt="footer-vector" />
          <div className='container max-sm:px-2'>
              <div className='z-10 relative flex xl:justify-between justify-center items-center flex-wrap max-xl:gap-6 py-5 md:py-2'>
                  <p className='font-schoolbell font-normal text-lg text-black text-center max-sm:max-w-[272px] max-sm:mx-auto'>Copyright ⓒ {currentYear} Peperuney Pizza. All right Reserved</p>
                  <div className='flex max-sm:gap-3 gap-4'>
                      <p className='font-schoolbell font-normal text-lg text-black'>CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0</p>
                      <div className='bg-black size-8 p-2'><Icon iconName='solarCopy' /></div>
                      <div className='border border-black size-8 p-2'><Icon iconName='formKit' /></div>
                  </div>
                  <div className='flex flex-wrap max-sm:justify-center gap-6 max-sm:gap-5 max-sm:max-w-[335px] max-sm:mx-auto'>
                      <a className='font-schoolbell hover:text-red transition duration-300 hover:after:border-b-red font-normal text-lg relative after:absolute after:w-full after:h-[1px] after:border-b xl:after:bottom-[7px] after:bottom-[6px] after:left-0 after:content-[""] after:border-b-black' target='blank' href="/">Disclaimer</a>
                      <a className='font-schoolbell hover:text-red transition duration-300 hover:after:border-b-red font-normal text-lg relative after:absolute after:w-full after:h-[1px] after:border-b xl:after:bottom-[7px] after:bottom-[6px] after:left-0 after:content-[""] after:border-b-black' target='blank' href="mailto:contact@peperuney.pizza">contact@peperuney.pizza</a>
                      <a className='font-schoolbell hover:text-red transition duration-300 hover:after:border-b-red font-normal text-lg relative after:absolute after:w-full after:h-[1px] after:border-b xl:after:bottom-[7px] after:bottom-[6px] after:left-0 after:content-[""] after:border-b-black' target='blank' href="/">White paper</a>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer