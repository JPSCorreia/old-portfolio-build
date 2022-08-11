/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


function Navbar() {

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {

    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }

    window.addEventListener('scroll', handleShadow)

  }, [])

  // 
  return (
    <div className={shadow? 'fixed w-full h-20 shadow-md bg-[#121212] shadow-[#121212] z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 ml-16">
        <Image
          src="/assets/jcorreia-fullstackdev.png"
          alt="/"
          width='268'
          height='78'
        />
        <div>
          <ul className='hidden lg:flex uppercase mr-20'>
            <Link href='/'>
              <li className='hover:shadow-custom pl-6 pr-6 ml-2 text-center p-3 text-xl hover:text-[#9ddb64] hover:scale-110 ease-in duration-100'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-100 '>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-100'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='hover:shadow-custom pl-6 pr-6 ml-2  p-3 text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-100'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='hover:shadow-custom pl-6 pr-6 p-3 ml-2  text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-100'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='lg:hidden rounded-full mr-16 cursor-pointer p-2 hover:shadow-sm hover:shadow-[#9ddb64] hover:scale-110 hover:text-[#9ddb64] ease-in duration-200'>
            <AiOutlineMenu size={32} />
          </div>
        </div>
      </div>
      <div className={nav? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}>
        <div 
          className={ 
            nav
            ? 'shadow-sm shadow-[#9ddb64] fixed h-screen left-0 top-0 sidebar sm:w-[70%] md:w-[60%] lg:w-[60%] bg-[#121212] pr-4 pb-4 pl-3 ease-in duration-200 ' 
            : 'shadow-sm shadow-[#9ddb64] fixed h-screen left-[-350%] top-0 sidebar pr-4 pb-4 pl-4 ease-in duration-200'
          }
        >
          <div> 
            <div className='flex w-full justify-between items-center ml-16 sidebar-image'>
              <Image 
                src="/assets/jcorreia-fullstackdev.png" 
                className='sidebar-image'
                alt='/'
                width='268'
                height='78'
              />
              <div onClick={handleNav} className=' mr-16 rounded-full hover:shadow-sm hover:shadow-[#9ddb64] p-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-200'>
                <AiOutlineClose size={32} />
              </div>
            </div>
            <div className='border-b border-[#9ddb64] sidebar-border'>
            </div>
            <div className=''>
              <ul className='flex flex-col uppercase justify-center align-center my-10'>
                <Link href='/'>
                <li onClick={() => setNav(false)} className='w-[97%] hover:shadow-custom hover:shadow-[#9ddb64] ml-1 mr-1 text-center py-4 my-2 text-xl hover:text-[#9ddb64] hover:scale-110 ease-in duration-50'>Home</li>
                </Link>
                <Link href='/#about'>
                <li onClick={() => setNav(false)} className='w-[97%] hover:shadow-custom hover:shadow-[#9ddb64] ml-1 mr-1 py-4 my-2 text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-50 '>About</li>
                </Link>
                <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='w-[97%] hover:shadow-custom hover:shadow-[#9ddb64] ml-1 mr-1 py-4 my-2 text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-50'>Skills</li>
                </Link>
                <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='w-[97%] hover:shadow-custom hover:shadow-[#9ddb64] ml-1 mr-1 py-4 my-2 text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-50'>Projects</li>
                </Link>
                <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='w-[97%] hover:shadow-custom hover:shadow-[#9ddb64] ml-1 mr-1 py-4 my-2 text-xl text-center hover:text-[#9ddb64] hover:scale-110 ease-in duration-50'>Contact</li>
                </Link>
              </ul>
                <div className='flex items-center m-auto justify-center my-1 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-sm shadow-[#9ddb64] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                  <FaLinkedinIn size={30}/>
                  </div>
                  <div className='rounded-full shadow-sm shadow-[#9ddb64] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                    <a href='https://github.com/JPSCorreia' target='_blank' rel='noreferrer noopener'>
                      <FaGithub size={30}/>
                    </a>
                  </div>
                  <div className='rounded-full shadow-sm shadow-[#9ddb64] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                  <AiOutlineMail size={30}/>
                  </div>
                  <div className='rounded-full shadow-sm shadow-[#9ddb64] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                  <BsFillPersonLinesFill size={30}/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
