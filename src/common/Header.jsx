import React, { useEffect, useState, useRef } from 'react';
import flagImg from '../assets/images/svg/flag-image.svg'
import Icon from './Icons';
import { DROPDOWN_DATA } from '../common/Helper';
import { HEADER_NAV_ITEMS, SOCIAL_ICONS, NAV_DATA_LINK } from '../common/Helper'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = isMenuOpen ? "hidden" : "";
            } else {
                document.body.style.overflow = "";
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="md:h-[75px] sm:h-16 h-14 flex w-full items-center pt-8 sm:pt-16 relative z-20">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <ul className='lg:hidden block'>
                        <li className="relative z-[15]">
                            <a
                                onClick={toggleDropdown}
                                className="gap-3 relative text-white lg:text-2xl hover:text-black text-lg font-luckiest flex items-center space-x-1 cursor-pointer after:absolute ease-in-out duration-300"
                                href="#">
                                <img src={flagImg} alt="flag-image" />
                                <span>
                                    <Icon iconName="dropdown" />
                                </span>
                                {isDropdownOpen && (
                                    <span
                                        className="absolute w-[182px] left-0 top-3 px-2 pt-[14px] pb-2 mt-7 bg-red border border-white rounded-xl z-30"
                                        ref={dropdownRef}>
                                        {DROPDOWN_DATA.map((option) => (
                                            <a
                                                key={option.id}
                                                href={option.href}
                                                className="block px-1 py-2 lg:text-lg max-w-[171.94px] leading-custom-lg text-base text-primary-white hover:bg-white rounded-lg">
                                                {option.label}
                                            </a>
                                        ))}
                                    </span>
                                )}
                            </a>
                        </li>
                    </ul>
                    <button className='lg:block hidden transition duration-300 transform hover:scale-105'><Icon className='max-w-[262px]' iconName="buyPeperuney" /></button>
                    <div className="items-center gap-[59px] lg:flex hidden">
                        <ul className='flex flex-col lg:flex-row gap-10 items-center lg:items-center z-10'>
                            <li className="relative">
                                <a
                                    onClick={toggleDropdown}
                                    className="gap-3 relative text-white lg:text-2xl hover:text-black text-lg font-luckiest flex items-center space-x-1 cursor-pointer after:absolute ease-in-out duration-300"
                                    href="#">
                                    <img src={flagImg} alt="flag-image" />
                                    <span>
                                        <Icon iconName="dropdown" />
                                    </span>
                                    {isDropdownOpen && (
                                        <span
                                            className="absolute w-[182px] left-0 top-3 px-2 pt-[14px] bg-red border border-white pb-2 mt-7 rounded-xl z-30"
                                            ref={dropdownRef}>
                                            {DROPDOWN_DATA.map((option) => (
                                                <a
                                                    key={option.id}
                                                    href={option.href}
                                                    className="block px-1 py-2 lg:text-lg max-w-[171.94px] leading-custom-lg text-base text-primary-white hover:bg-white rounded-lg">
                                                    {option.label}
                                                </a>
                                            ))}
                                        </span>
                                    )}
                                </a>
                            </li>
                            <li className='flex gap-2 items-center'>
                                {NAV_DATA_LINK.map((link, index) => (
                                    <li
    className="bg-icon cursor-pointer bg-cover bg-no-repeat bg-center py-5 px-6 group transition-transform duration-300 transform hover:scale-105"
    style={{ width: "77px", height: "67px" }}
    key={index}
    onClick={toggleMenu}
>
    <a
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 flex items-center justify-center"
        href={link.href}
    >
        <Icon className="size-8 transition-transform duration-300" iconName={link.icon} />
    </a>
</li>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <div className='lg:hidden block'>
                        <div
                            className={`menuList ${isMenuOpen ? "max-lg:left-0" : "max-lg:left-[-100%]"} z-10 gap-6 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 bg-mobile-menu bg-cover bg-no-repeat bg-center max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}
                            ref={menuRef}>
                            <ul className="flex flex-col z-10 gap-6 mt-24">
                                {HEADER_NAV_ITEMS.map((item) => (
                                    <li key={item.label} onClick={toggleMenu}>
                                        <a
                                            className={`font-normal main-heading font-luckiest [text-shadow:_4px_4px_0_black] text-custom-5xl transition hover:text-red duration-300 leading-custom-6xl ${item.textColor}`}
                                            href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                                <button className="lg:hidden block transition duration-300 transform hover:scale-105">
                                    <Icon className="max-w-[262px] mt-6" iconName="buyPeperuney" />
                                </button>
                                <li className="flex items-center gap-2">
                                    {SOCIAL_ICONS.map((icon) => (
                                        <li
                                            key={icon.name}
                                            className="bg-menu-bg cursor-pointer bg-[length:100%_100%] h-[67px] w-[77px] bg-no-repeat bg-center py-5 px-4 group transition duration-300 transform hover:scale-105"
                                        >
                                            <a className="flex justify-center transition duration-300 transform group-hover:scale-105" href={icon.href}>
                                                <Icon className="size-8 transition duration-300 transform group-hover:scale-105" iconName={icon.name} />
                                            </a>
                                        </li>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        onClick={toggleMenu}
                        className='menuIcon bg-menu-bg bg-cover bg-no-repeat bg-center py-5 px-4 relative max-lg:w-[59px] max-lg:h-[51px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'>
                        {isMenuOpen ? (
                            <>
                                <span className="h-[2.85px] absolute top-6 w-[24.44px] bg-black transform rotate-45 transition duration-300"></span>
                                <span className="h-[2.85px] absolute top-6 w-[24.44px] bg-black transform -rotate-45 transition duration-300"></span>
                            </>) : (
                            <>
                                <span className="h-[3px] w-full bg-black"></span>
                                <span className="h-[2.85px] w-full bg-black"></span>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;