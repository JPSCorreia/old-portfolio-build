import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-[90%] m-auto md:h-screen p-2 flex items-center pt-32 mt-32'>
      <div className='max-w-[1240px] m-auto sm:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#9ddb64]'>
            About
          </p>
          <h2 className='py-4 text-gray-200'>
            Who I am
          </h2>
          <p className='pb-2 text-gray-200'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum eros nunc, id imperdiet ante semper in. Aliquam lacinia enim vitae arcu lobortis molestie. Sed leo velit, efficitur eu est sit amet, mattis volutpat lorem. In malesuada purus quis nibh lacinia facilisis. Curabitur cursus tortor a nisl aliquam consectetur. Nam a velit rutrum, laoreet tortor sit amet, pharetra massa. Maecenas pretium velit odio, ac fermentum dolor malesuada quis.
          </p>
          <p className='py-2 text-gray-200'>
            Vivamus sem velit, iaculis sed nibh at, interdum consectetur magna. Curabitur porta dolor quam, nec efficitur ex eleifend eu. Pellentesque in purus nisl. Pellentesque volutpat nisi ac diam auctor imperdiet. Mauris vitae quam ut ligula congue mollis. Pellentesque sed tempor elit. Sed neque sem, fermentum id enim scelerisque, consequat dictum libero.
          </p>
          <Link href='/#projects'>
            <p className='py-2 cursor-pointer text-gray-200 underline'>Check out some of my projects </p>
          </Link>
        </div>
        <div className='hidden sm:inline-block  rounded-full shadow-lg shadow-[#9ddb64] m-auto hover:scale-110 ease-in duration-100 justify-center items-center'>
            <Image 
              className=''
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