import React from 'react'
import Image from 'next/image'
import contact from '../public/assets/contact.jpeg'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-[90%] m-auto lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#9ddb64]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap8'>
          <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-[#9ddb64] rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt='' />
              </div>
              <div>
                <h2 className='py-2'>
                  João Correia
                </h2>
                <p>Full Stack Developer</p>
                <p className='py-4'>Available for freelance or full-time positions. Contact me so we can talk.</p>
              </div>
              <div>
              <p className='uppercase pt-8'>
                Connect With Me
              </p>
            <div className='flex items-center justify-between py-4'>
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

          <div className='col-span-3 w-full h-auto shadow-xl shadow-[#9ddb64] rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="" id="" />
                  </div>
                  <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Phone Number</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="" id="" />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="" id="" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="" id="" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" />
                </div>
                <button className='border border-gray-700 text-lg lg:text-xl w-full p-4 text-gray-700'>Send Message</button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact