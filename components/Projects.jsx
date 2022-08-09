import React from 'react'
import ProjectItem from './ProjectItem'
import Image from 'next/image'
import Link from 'next/link'
import tldreddit from '../public/assets/projects/tldreddit.png'
import emporium from '../public/assets/projects/emporium.png'

const Projects = () => {
  return (
    <div className='w-[90%] m-auto mt-4'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#9ddb64]'>Projects</p>
        <h2 className='py-4'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
         
         <ProjectItem title='Emporium' projectType='Full Stack Project' backgroundImg={emporium} projectUrl='/emporium' />
         <ProjectItem title='TLDReddit' projectType='React Project' backgroundImg={tldreddit} projectUrl='/tldreddit' />

        </div>
      </div>
    </div>
  )
}

export default Projects