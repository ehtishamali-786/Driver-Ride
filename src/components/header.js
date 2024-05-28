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
        name: 'CONTECT US',
        path: '/contactUs',
      },
    ];
  return (
    <header className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="logo"/>
        <div
        className={` flex  border-gray-200   px-4 lg:px-6 py-2.5   bg-opacity-0`}
      >
        <div
          className={` mt-6 w-[75%] lg:w-[75%] lg:block  items-center `}
        >
          <ul className='flex flex-col mt-4  xxs:justify-center xxs:items-center     xl:text-[20px] lg:text-[16px] lg:flex-row xl:space-x-8 xxl:space-x-16 lg:space-x-8 lg:mt-0'>
            {navLinks.map((item, index) => {
              return (
                <Link href={item.path}>
                  <li
                    key={index}
                    className={` py-2 px-0 rounded-full   cursor-pointer `}
                    onClick={() => setIsActive(item?.path)}
                    style={{
                      backgroundColor:
                        item?.path === isActive ? '#FF0080' : '',
                        
                    }}
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;