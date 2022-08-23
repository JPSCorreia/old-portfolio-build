/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-[90%] m-auto md:h-screen p-2 flex items-center pt-32 mt-32'>
      <div className='max-w-[1240px] m-auto sm:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#67E8F9] animate__animated animate__fadeInLeft'>
            About
          </p>
          <h2 className='py-4 text-gray-200 animate__animated animate__fadeInLeft'>
            Who I am
          </h2>
          <p className='pb-2 text-gray-200'>
          Since I was a child I've had a passion for science, technology and programming so I was always well-versed in computers and the newer technologies, but it wasn't until 2020 that I saw the opportunity to try and start a career as a web developer.           </p>
          <p className='py-2 text-gray-200'>
          I started with Javascript, HTML and CSS as foundations for web development and quickly found myself learning more advanced frameworks such as React.js, how to operate a full stack application using Node.js, Express.js and PostgreSQL and building multiple projects so I could learn more about these technologies.          </p>
          <Link href='/#projects'>
            <p className='py-2 cursor-pointer text-gray-200 underline'>Check out some of my projects </p>
          </Link>
        </div>
        <div className='hidden sm:inline-block rounded-full shadow-lg shadow-[#67E8F9] m-auto hover:scale-110 ease-in duration-100 justify-center items-center'>
            <Image 
              className='animated-image'
              src="/assets/profile.png"
              alt="/"
              width='192'
              height='192'
            />
          </div>
      </div>
    </div>
  )
}

export default About