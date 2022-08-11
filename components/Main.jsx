/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>

      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      
        <div>
        
          {/* <p className='uppercase text-sm tracking-widest text-gray-100'>
            Let's Build Something Together
          </p> */}
          <h1 className='py-4 text-gray-100'>
            Greetings, I'm <span className='text-[#9ddb64]'>João Correia</span> 
          </h1>
          <p className='py-4 text-gray-200 max-w-[75%] m-auto'>I'm a full stack web developer and I specialize in building and designing responsive full stack web applications using the latest technologies.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-3 m-1 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <FaLinkedinIn size={24}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-3 m-1 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <FaGithub size={24}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-3 m-1 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <AiOutlineMail size={24}/>
            </div>
            <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-3 m-1 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
              <BsFillPersonLinesFill size={24}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main