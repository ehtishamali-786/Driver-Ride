import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import LocationImage from '../assets/location.png'
import INstagram from '../assets/instagram.svg'
import fbLogo from '../assets/fb.svg'
import Twitter from '../assets/twitter.svg'
import LinkedLogo from '../assets/linkedin logo.png'

const Footer = () => {
    return (

        <>
            <footer className='text-center lg:text-left  bg-[#1F2128]  font-Poppins to-cyan from-blue via-blue text-white'>
                <div className='lg:mx-6 md:mx-11 xxs:mx-4 xxl:mx-0 py-10 lg:text-left xxs:text-left md:text-left '>
                    <div className='flex lg:flex-row xxs:flex-row xxs:flex-wrap lg:flex-nowrap  xxs:justify-between  lg:justify-evenly text-white '>
                        <div class=''>
                            <img src={Logo} className='xxs:hidden lg:block' />

                            <p className='lg:w-60 md:w-[52%] font-Poppins   lg:text-[16px]  md:text-[22px] xxs:text-[16px] text-left'>
                                Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
                            </p>
                            <div className='flex flex-row justify-start xxs:w-[85%] md:w-auto mt-6'>
                                <a href='#!' class='mr-4 '>
                                    <img src={fbLogo} width={20} height={20} />
                                </a>
                                <a href='#!' class='mr-4 '>
                                    <img src={Twitter} width={20} height={20} />
                                </a>
                                <a href='#!' class='mr-4 '>
                                    <img src={LinkedLogo} width={20} height={20} />
                                </a>
                                <a href='#!' class='mr-4'>
                                    <img src={INstagram} width={20} height={20} />
                                </a>
                            </div>
                        </div>

                        <div class=' text-[16px]  md:w-[50%] xxs:mt-10  lg:w-auto lg:mt-0'>
                            <div class=' '>
                                <h6 class='text-[#FF0080] font-Poppins mb-4 flex lg:justify-start md:justify-start  xl:ml-4 xxs:ml-1 md:ml-4 lg:ml-2 xl:text-[20px] xxs:text-[14px]  md:text-[20px] lg:text-[16px]'>
                                    Information
                                </h6>
                            </div>
                            <p class=''>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px] '
                                >
                                    FAQ's
                                </a>
                            </p>
                            <p class=''>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    How it Works
                                </a>
                            </p>
                            <p class=''>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    Terms & Conditions
                                </a>
                            </p>
                            <p class=''>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    Privacy Policy
                                </a>
                            </p>

                        </div>
                        <div class=' text-[16px]  md:w-[50%] xxs:mt-10 lg:w-auto  lg:mt-0'>
                            <div class=''>
                                <h6 class='text-[#FF0080] font-Poppins mb-4 flex justify-center md:justify-start xl:ml-4 xxs:ml-1 md:ml-4 lg:ml-2 xl:text-[20px] xxs:text-[14px]  md:text-[20px] lg:text-[16px]'>
                                    Pages
                                </h6>
                            </div>
                            <p class=''>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    Home
                                </a>
                            </p>
                            <p class=''>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    Our Services
                                </a>
                            </p>
                            <p class=''>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    For Businesses
                                </a>
                            </p>

                            <p>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    For Cheuffeurs
                                </a>
                            </p>
                            <p>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    About us
                                </a>
                            </p>
                            <p>
                                <a
                                    href='#!'
                                    class='text-white xl:ml-4 xxs:ml-2 md:ml-4 lg:ml-2 text-[14px]'
                                >
                                    Contect Us
                                </a>
                            </p>
                        </div>
                        <div class='font-DM Sans md:w-[100%] lg:w-auto xxs:mt-10  lg:mt-0'>
                            <div class=''>
                                <h6 class='text-[#FF0080] font-Poppins mb-4  xl:text-[20px] xxs:text-[14px]  md:text-[20px] lg:text-[16px] flex lg:justify-start md:justify-start xl:ml-4 xxs:ml-1 md:ml-4 lg:ml-2 '>
                                    Contact
                                </h6>
                            </div>
                            <p class='flex  justify-center md:justify-start mt-2 xl:text-[16px] xxs:text-[14px] md:text-[16px] lg:text-[14px] xl:w-60 md:w-60 xxs:w-[14rem] lg:w-[8rem] xl:ml-4 xxs:ml-1 md:ml-4 lg:ml-2'>
                                (406) 555-0120
                            </p>
                            <p class='flex  justify-center md:justify-start mt-2 xl:text-[16px] xxs:text-[14px] md:text-[16px] lg:text-[14px] xl:w-60 md:w-60 xxs:w-[14rem] lg:w-[8rem] xl:ml-4 xxs:ml-1 md:ml-4 lg:ml-2'>
                                zyncabiotics123@gmail.com
                            </p>
                            <p class='flex  justify-center md:justify-start mt-2 xl:text-[16px] xxs:text-[14px] md:text-[16px] lg:text-[14px] xl:w-60 md:w-60 xxs:w-[14rem] lg:w-[8rem] xl:ml-4 xxs:ml-1 md:ml-4 lg:ml-2'>
                                2972 Jamshedpur, Jharkhand Pin-831015
                            </p>
                        </div>
                        <div class='font-DM Sans md:w-[100%] lg:w-auto xxs:mt-10  lg:mt-0'>
                            <div class=' '>
                                <h6 class='text-[#FF0080] font-Poppins mb-4  xl:text-[20px] xxs:text-[14px]  md:text-[20px] lg:text-[16px] flex lg:justify-start md:justify-start xl:ml-4 xxs:ml-1 md:ml-4 lg:ml-2 '>
                                    Maps Location
                                </h6>
                            </div>
                            <img src={LocationImage} alt='location' />



                        </div>
                    </div>
                </div>

            </footer>
            <footer className="bg-[#000000] text-white p-4 mt-auto flex justify-between px-12 items-center">
                <div className="">
                    <p>© 2024 QCS | Powered by Ismail Khan</p>
                </div>
                <div className='flex flex-row justify-start xxs:w-[85%] md:w-auto '>
                    <a href='#!' class='mr-4 '>
                        <img src={fbLogo} width={20} height={20} />
                    </a>
                    <a href='#!' class='mr-4 '>
                        <img src={Twitter} width={20} height={20} />
                    </a>
                    <a href='#!' class='mr-4 '>
                        <img src={LinkedLogo} width={20} height={20} />
                    </a>
                    <a href='#!' class='mr-4'>
                        <img src={INstagram} width={20} height={20} />
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
