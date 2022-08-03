import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-md shadow-[#9ddb64] z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/assets/jcorreia-fullstackdev.png"
          alt="/"
          width='288'
          height='64'
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'> Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'> About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'> Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'> Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'> Contact</li>
            </Link>
          </ul>
          <div className='md:hidden'>
            <AiOutlineMenu size={24} />
          </div>
        </div>
      </div>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/40'>
        <div className='shadow-md shadow-[#9ddb64] fixed h-screen left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#121212] pt-4 pr-4 pb-4 pl-2 ease-in duration-500'>
          <div> 
            <div className='flex w-full items-center justify-between'>
              <Image src="/assets/jcorreia-fullstackdev.png" alt='/'
              width='216'
              height='48'/>
              <div className='rounded-full shadow-md shadow-[#9ddb64] p-3 cursor-pointer'>
                <AiOutlineClose size={24} />
              </div>
            </div>
            <div className='p-2'>

            </div>
            <div className=''>
              <ul>
                <Link href='/'>
                <li className='px-12 py-4 text-lg'>Home</li>
                </Link>
                <Link href='/'>
                <li className='px-12 py-4 text-lg'>About</li>
                </Link>
                <Link href='/'>
                <li className='px-12 py-4 text-lg'>Skills</li>
                </Link>
                <Link href='/'>
                <li className='px-12 py-4 text-lg'>Project</li>
                </Link>
                <Link href='/'>
                <li className='px-12 py-4 text-lg'>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
