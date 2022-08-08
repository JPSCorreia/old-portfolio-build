import React from 'react'
import tldreddit from '../public/assets/projects/tldreddit2.png'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#9ddb64]'>Projects</p>
        <h2 className='py-4'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#9ddb64] rounded-xl p-4 group hover:bg-gradient-to-r from-[#30aa50] to-[#9ddb64]'>
            <Image src={tldreddit} alt='/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects