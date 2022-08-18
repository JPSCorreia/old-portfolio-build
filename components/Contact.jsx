import React from 'react'
import Image from 'next/image'
import contact from '../public/assets/contact.jpeg'
import Link from 'next/link'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-[90%] m-auto md:h-screen pt-4 mt-32'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full flex flex-col justify-center h-full'>
        <p id='contact-start' className='text-xl tracking-widest uppercase text-[#9ddb64]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className=''>
          <div className='w-full shadow-xl shadow-[#9ddb64] rounded-xl p-4 justify-center flex flex-col mx-auto'>
            <div className='lg:p-4 h-full '>
              <div className=' flex flex-row justify-between'>
                <div className=''>
                  <h2 className='pb-2' id='contact-name'>João Correia</h2>
                  <p>Full Stack Developer</p>
                  <p className='mt-4'>Available for freelance or full-time positions.</p>
                  <p>Contact me so we can talk.</p>
                  <div className='flex m-auto items-center justify-start py-1'>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] ml-0 p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                      <FaLinkedinIn size={24}/>
                    </div>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                      <FaGithub size={24}/>
                    </div>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                      <AiOutlineMail size={24}/>
                    </div>
                    <div className='rounded-full bg-[#121212] shadow-sm shadow-[#9ddb64] p-3 m-2 cursor-pointer hover:scale-110 hover:text-[#9ddb64] ease-in duration-100'>
                      <BsFillPersonLinesFill size={24}/>
                    </div>
                  </div>
                </div>
                <div className='hidden lg:block w-[300px]'>
                  <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt='' />
                </div>   
              </div>
              <div>

                <div className='col-span-3 w-full h-auto'>
                  <div className=''>
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
                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="6" />
                      </div>
                      <div className='flex flex-row w-[95%] m-auto'>
                        <button className='m-auto text-lg lg:text-xl w-full p-4 text-gray-700 mt-4 hover:scale-105 ease-in duration-300 hover:text-[#ffffff]'>Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact