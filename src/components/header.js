import React,{useState,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png'

const Header = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(location.pathname);
    console.log('active', isActive);
    const [navbar, setNavbar] = useState(false);
  
    const ChangeRoute = ['/', '/contactUs', '/blogs'];
    const navLinks = [
      { name: 'HOME', path: '/' },
      {
        name: 'OUR SERVICES',
        path: '/services',
      },
      {
        name: 'FOR BUSINESSES',
        path: '/hireUs',
      },
      {
        name: 'FOR CHAUFFEURS',
        path: '/blogs',
      },
      {
        name: 'ABOUT',
        path: '/aboutUs',
      },
      {
        name: 'CONTACT US',
        path: '/contactUs',
      },
    ];
  return (
    
    <header className=" flex justify-evenly items-center text-white  z-[999] ">
      <div className="mt-2">
        <img src={Logo} alt="logo"/>
      </div>
        <div
          className={`  flex items-center justify-center  gap-10  `}
        >
          <ul className='flex flex-col mt-4  xxs:justify-center xxs:items-center  font-Poppins   text-[15px] lg:flex-row   space-x-1 '>
            {navLinks.map((item, index) => {
              return (
                <Link href={item.path}>
                  <li
                    key={index}
                    className={` py-1 px-4 rounded-full bg-opacity-60 shadow-md  cursor-pointer `}
                    onClick={() => setIsActive(item?.path)}
                    style={{
                      backgroundColor:
                        item?.path === isActive ? '#FF0080' : '',
                        opacity: item?.path === isActive && '60%'
                    }}
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className='flex mt-4 gap-1 '>
          <p className='font-Poppins text-[18px] font-[500] cursor-pointer'>
            Login
          </p>/
          <p className='font-Poppins text-[18px] font-[500] cursor-pointer'>
            Register
          </p>
        </div>
        </div>
    
      
    </header>
  );
};

export default Header;