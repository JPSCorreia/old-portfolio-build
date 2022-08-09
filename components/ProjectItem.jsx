import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = (props) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#9ddb64] rounded-xl p-4 group hover:bg-gradient-to-r from-[#30aa50] to-[#9ddb64] '>
    <Image className='rounded-xl group-hover:opacity-40 ' src={props.backgroundImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[25%] translate-x-[0%] translate-y-[0%] '>
      <h3 className='text-4xl md:text-2xl lg:text-4xl text-white tracking-wider text-center'>
       {props.title}
      </h3>
      <p className='pb-2 pt-2 text-white sm:text-2xl md:text-lg lg:text-2xl font-bold text-center mt-2'>
        {props.projectType}
      </p>
      <Link href=''>
        <p className='text-center py-3 rounded-lg bg-white text-[#121212] font-bold sm:text-lg md:text-sm lg:text-lg cursor-pointer mt-2'>
          More Info
        </p>
      </Link>
    </div>
  </div>
  )
}

export default ProjectItem