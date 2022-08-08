import React from 'react'
import Image from 'next/image'
import {SiCss3, SiExpress, SiHtml5, SiRedux, SiJavascript, SiNodedotjs, SiReact, SiGithub, SiNextdotjs} from 'react-icons/si'

const Skills = () => {
  return (
    <div className='w-full lg: h-screen p-2'
    >
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#9ddb64]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiHtml5 color='#dd4b25' size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiCss3 background-color='red' color='#2762e9' size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiJavascript color='#efd81f' size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <SiNodedotjs color='#43853d' size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <SiExpress color='#ffffff' size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Express.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiReact color='#61dafb' size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiRedux color='#764abc'size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-[#9ddb64] rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiGithub color='#ffffff' size={48} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git / Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

