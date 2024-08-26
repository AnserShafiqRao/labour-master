import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../Images/labour-master-logo.png';
import './style.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiPhoneCall as ContactUs} from "react-icons/fi";
import { FaFacebookSquare as Fb } from "react-icons/fa";
import { FaInstagram as Insta } from "react-icons/fa6";
import { FaXTwitter as X } from "react-icons/fa6";
import { FaLinkedin as LinkedIn } from "react-icons/fa";

const navigation = [
  { name: 'How it works', href: '/#section-6', current: false },
  { name: 'Careers', href: '/about-us/', current: false },
  { name: 'Our Roles', href: '/job-seekers/', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(100);

  const controlHeader = () => {
    setLastScrollY(window.scrollY);
    if (lastScrollY >50 && window.scrollY > lastScrollY && mobileMenuOpen === false) {
      setShowHeader(false);
    } else if( window.scrollY < lastScrollY && mobileMenuOpen === false) {
      setShowHeader(true); 
    }
    else{
      setShowHeader(true);
    }
    // setLastScrollY(window.scrollY);
    if (window.scrollY > 50) {
      const myHeader = document.getElementById('mainHeader');
      myHeader.style.backgroundColor = '#fcfcfc';
  } else if(window.scrollY <= 50 ){
      const myHeader = document.getElementById('mainHeader');
      myHeader.style.backgroundColor = '#00000000';
  }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    window.addEventListener('click', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  });
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (

    <>
    <div className='flex justify-between w-[90%] mx-auto my-1'>
      <div className='flex flex-row'>
        <Fb className='text-[1.2vw] lg:mx-[0.5vw] cursor-pointer text-stone-700 hover:text-[var(--dark-golden-color)]'/>
        <Insta className='text-[1.2vw] lg:mx-[0.5vw] cursor-pointer  text-stone-700 hover:text-[var(--dark-golden-color)]'/>
        <X className='text-[1.2vw] lg:mx-[0.5vw] cursor-pointer  text-stone-700 hover:text-[var(--dark-golden-color)]'/>
        <LinkedIn className='text-[1.2vw] lg:mx-[0.5vw] cursor-pointer  text-stone-700 hover:text-[var(--dark-golden-color)]'/>
      </div>

      <div className='flex flex-row justify-center'>
        <h3 className='lg:text-[1vw] font-[600]  text-stone-700 tracking-[1px] mx-[0.5vw] transition-transform ease-in-out hover:scale-[1.025] hover:border-b-2 hover:border-[var(--dark-golden-color)] '><Link to={'/about-us/'}>FAQs</Link></h3>
        <h3 className='lg:text-[1vw] font-[600]  text-stone-700 tracking-[1px] mx-[0.5vw] transition-transform ease-in-out hover:scale-[1.025] hover:border-b-2 hover:border-[var(--dark-golden-color)] '><Link to={'/about-us/'}>Blog</Link> </h3>
        <h3 className='flex flex-row items-center  text-stone-700 lg:text-[1vw] font-[600] tracking-[1px] mx-[0.5vw] transition-transform ease-in-out hover:scale-[1.025] hover:border-b-2 hover:border-[var(--dark-golden-color)] '><ContactUs className='mr-2'/> <Link to={'tel:+1234567890'}>(855) 519 1069</Link></h3>
      </div>

    </div>

    <Disclosure as="nav" className={`bg-transparent w-[90%] mx-auto shadow-none header sticky-header ${showHeader ? 'visible' : 'hidden'}`}>
      <div
        className={`w-full py-4 px-0 lg:px-0 lg:py-4 `}
        id="mainHeader"
      >

        <div className="relative flex h-16 items-center justify-center">

          {/* Mobile menu opening icons */}
          <div className="absolute right-12 flex items-center lg:hidden">
            <DisclosureButton className="group absolute inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white xl:hidden">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="mobile-menu-icon block h-6 w-6 group-data-[open]:hidden" onClick={() => setMobileMenuOpen(true)}/>
              <XMarkIcon aria-hidden="true" className="mobile-menu-icon hidden h-6 w-6 group-data-[open]:block" onClick={ () => setMobileMenuOpen(false)} />
            </DisclosureButton>
          </div>

          {/* Logo and Menu */}
          <div className="flex flex-1 items-center justify-start lg:items-stretch lg:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link to={'/'}><img alt="Labour Master" src={Logo} className="h-16 w-auto" /></Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:ml-6 lg:flex lg:items-center">
              <div className="flex flex-row space-x-2">
              <div className="hidden lg:flex lg:items-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                  <HashLink
                    key={item.name}
                    to={item.href}
                    className={classNames(
                    location.pathname + location.hash === item.href
                    ? 'active-background text-black text-[1.05vw]  tracking-wider uppercase font-[600] '
                    : ' tracking-wide text-[1.05vw] text-black tracking-wider uppercase underline-button font-[500]',
                      ' px-2 mx-2 py-2 font-medium text-[1.05vw] tracking-wider uppercase font-[500] text-black',)}>
                          {item.name}
                  </HashLink>))}
                  <button className='bg-[var(--dark-golden-color)] rounded-[30px] px-4 py-2 text-[1.05vw] font-[600] capitalize text-stone-50 transition-transform ease-in-out hover:scale-[1.025]' >Agency scale strategy call</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className={`disclosure-panel lg:hidden` }>
        <div className="space-y-1 px-4 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as={Link}
            to={item.href}
            className={classNames(
              location.pathname === item.href
                ? 'active-background tracking-wider text-white'
                : 'text-gray-300 tracking-wide hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
          {item.name}
        </DisclosureButton>
        ))}
        </div>
      </DisclosurePanel>

    </Disclosure>

    </>

    
  );
}
