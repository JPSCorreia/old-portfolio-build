/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {SiExpress, SiReact, SiPostgresql} from 'react-icons/si'


const Main = () => {
  return (
    <div id='home' className='w-[90%] m-auto md:h-screen text-center p-2 flex items-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center'>
      
          <div className='flex flex-col main'>
          <h1 className='animate__animated animate__fadeInLeft pb-2 text-gray-100 text-start text-3xl sm:text-4xl lg:text-6xl whitespace-nowrap'>
            Hi, I'm <span className='text-[#9ddb64]'>João Correia</span><span className='text-gray-100'>,</span>
          </h1>
          <h1 className='animate__animated animate__fadeInLeft  pb-6 text-gray-100 text-start text-3xl sm:text-4xl lg:text-6xl whitespace-nowrap'>
            web developer.
          </h1>
          <div className='flex flex-col'>
            <div className='py-2 text-start text-gray-200 flex flex-col md:flex-row animate__animated animate__fadeInUp'>
              <span className='flex items-center mr-2 whitespace-nowrap leading-loose tracking-widest text-lg'>Full Stack Developer<span className='hidden md:inline ml-3'>-</span>
              </span>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-lg'>
                <SiReact  className='mr-2' color='#61dafb' size={32} />
                React.js 
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center mr-3 leading-loose tracking-widest text-lg'>
                <SiExpress className='mr-2' color='#ffffff' size={32} />
                Express.js 
                <span className='hidden md:inline ml-3 '>-</span>
              </span>
              <span className='flex items-center justify-start mr-3 leading-loose tracking-widest text-lg'>
                <SiPostgresql  className='mr-2' color='#31648d' size={32} />
                PostgreSQL 
              </span>
            </div>
          </div>
          {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <FaLinkedinIn size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <FaGithub size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <AiOutlineMail size={30}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-4 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <BsFillPersonLinesFill size={30}/>
            </div>
          </div> */}
          </div>
        </div>
    </div>
  )
}

export default Main