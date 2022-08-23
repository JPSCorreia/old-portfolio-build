/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaHome, FaUser, FaUserCircle, FaGraduationCap, FaEye} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'


function Navbar() {

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {

    const handleShadow = () => {
      if (window.scrollY >= 1) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }

    window.addEventListener('scroll', handleShadow)

  }, [])

  // 
  return (
    <div className={shadow? 'fixed w-full h-20 bg-[#121212]/60 shadow-[#121212] z-[9999]' : 'fixed w-full h-20 z-[100]'}>
      {/* <canvas className='flex flex-col justify-center' id='ball-place-2'></canvas> */}
      {/* <div className='scroll-tracker shadow-lg shadow-[#67E8F9]'></div> */}
      <div className="flex justify-between items-center w-full h-full px-2 ml-3">
          <Image
            src="/assets/jcorreia-fullstackdev.png"
            alt="/"
            width='268'
            height='78'
            className='cursor-pointer'
          />
        <div>
          <ul className='hidden lg:flex uppercase mr-4'>
            <Link href='/'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2 text-center p-3 text-xl hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaHome className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Home</span></div></li>
            </Link>
            <Link href='/#about'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 '><div className='flex flex-col flex-center'><FaUserCircle className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>About</span></div></li>
            </Link>
            <Link href='/#skills'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaGraduationCap className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Skills</span></div></li>
            </Link>
            <Link href='/#projects'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaEye className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Projects</span></div></li>
            </Link>
            <Link href='/#contact'>
              <li className='w-[100px] hover:shadow-custom pl-6 pr-6 p-3 ml-2  text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><GrMail className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Contact</span></div></li>
            </Link>
          </ul>
          <div onClick={handleNav} className='lg:hidden rounded-full mr-[1rem] cursor-pointer p-2 hover:shadow-sm hover:shadow-[#67E8F9] hover:scale-110 hover:text-[#67E8F9] ease-in duration-200'>
            {nav? <AiOutlineClose className='ease-in duration-200' size={32} /> : <AiOutlineMenu className='ease-in duration-200' size={32} /> }
          </div>
        </div>
      </div>
      <div className={nav? '' : ''}>
        <div 
          className={ 
            nav
            ? 'p-0 shadow-sm fixed h-screen right-0 top-20 sidebar sm:w-20 md:w-20 lg:w-20 bg-[#121212] ease-in duration-200 bg-[#121212]/60' 
            : 'p-0 shadow-sm shadow-[#67E8F9] fixed h-screen right-[-50%] top-20 sidebar ease-in duration-200 bg-[#121212]/60'
          }
        >
          <div> 
            {/* <div className='w-[98%] flex justify-end items-center h-20 bg-transparent sidebar-image sidebar-border'> */}
                  {/* <Image 
                    src="/assets/jcorreia-fullstackdev.png" 
                    className='sidebar-image cursor-pointer'
                    alt='/'
                    width='268'
                    height='78'
                  /> */}
              {/* <div onClick={handleNav} className='outline-close rounded-full hover:shadow-sm hover:shadow-[#67E8F9] p-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-200'>
                <AiOutlineClose size={32} />
              </div> */}
            {/* </div> */}
            {/* <div className='border-b border-[#67E8F9] sidebar-border'>
            </div> */}
            <div className=''>
              <ul className='flex flex-col uppercase justify-center align-center mt-6'>
                <Link href='/'>
                <li className='w-[100%] hover:shadow-custom p-3 mt-6 ml-[3px] text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaHome className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Home</span></div></li>
                {/* <li onClick={() => setNav(false)} className='w-[95%] hover:shadow-custom hover:shadow-[#67E8F9] text-center py-4 my-2 ml-2 text-xl hover:text-[#67E8F9] hover:scale-105 ease-in duration-50'>Home</li> */}
                </Link>
                <Link href='/#about'>
                {/* <li onClick={() => setNav(false)} className='w-[95%] hover:shadow-custom hover:shadow-[#67E8F9] py-4 my-2 ml-2 text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-50 '>About</li> */}
                <li className='w-[100%] hover:shadow-custom p-3 mt-6 ml-[3px] text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100 '><div className='flex flex-col flex-center'><FaUserCircle className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>About</span></div></li>
                </Link>
                <Link href='/#skills'>
                {/* <li onClick={() => setNav(false)} className='w-[95%] hover:shadow-custom hover:shadow-[#67E8F9] py-4 my-2 ml-2 text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-50'>Skills</li> */}
                <li className='w-[100%] hover:shadow-custom p-3 mt-6 ml-[3px] text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaGraduationCap className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Skills</span></div></li>
                </Link>
                <Link href='/#projects'>
                {/* <li onClick={() => setNav(false)} className='w-[95%] hover:shadow-custom hover:shadow-[#67E8F9] py-4 my-2 ml-2 text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-50'>Projects</li> */}
                <li className='w-[100%] hover:shadow-custom p-3 mt-6 ml-[3px] text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><FaEye className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Projects</span></div></li>
                </Link>
                <Link href='/#contact'>
                {/* <li onClick={() => setNav(false)} className='w-[95%] hover:shadow-custom hover:shadow-[#67E8F9] py-4 my-2 ml-2 text-xl text-center hover:text-[#67E8F9] hover:scale-105 ease-in duration-50'>Contact</li> */}
                <li className='w-[100%] hover:shadow-custom p-3 mt-6 ml-[3px] text-xl text-center hover:text-[#67E8F9] hover:scale-110 ease-in duration-100'><div className='flex flex-col flex-center'><GrMail className='flex-center m-auto'  size={32} /><span className='text-xs mt-1'>Contact</span></div></li>
                </Link>
              </ul>
                {/* <div className='flex items-center m-auto justify-center my-1 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-sm shadow-[#67E8F9] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                  <FaLinkedinIn size={30}/>
                  </div>
                  <div className='rounded-full shadow-sm shadow-[#67E8F9] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                    <a href='https://github.com/JPSCorreia' target='_blank' rel='noreferrer noopener'>
                      <FaGithub size={30}/>
                    </a>
                  </div>
                  <div className='rounded-full shadow-sm shadow-[#67E8F9] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                  <AiOutlineMail size={30}/>
                  </div>
                  <div className='rounded-full shadow-sm shadow-[#67E8F9] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
                  <BsFillPersonLinesFill size={30}/>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
