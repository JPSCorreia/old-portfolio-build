import React from 'react'
import Image from 'next/image'
import emporiumImg from '../public/assets/projects/emporium-full.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import {SiCss3, SiExpress, SiHtml5, SiRedux, SiJavascript, SiNodedotjs, SiReact, SiGithub, SiNextdotjs, SiPostgresql} from 'react-icons/si'


const emporium = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[20vh] lg:h-[30vh] relative top-20'>
        <Image className='absolute left-0 h-[20vh] lg:h-[30vh] z-10' layout='fill' objectFit='cover' src={emporiumImg} alt='/' />
        <div className='absolute left-0 w-full h-[20vh] lg:h-[30vh] bg-black/80 z-10'>
        </div>
        <div className='absolute top-[94%] z-10 p-6 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <p className='text-xl tracking-widest uppercase text-[#9ddb64]'>Project</p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-6 grid lg:grid-cols-5 gap-8 mt-16'>
        <div className='col-span-4'>
        <h2 className='py-2 mb-4'>Emporium</h2>
          <p>            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum eros nunc, id imperdiet ante semper in. Aliquam lacinia enim vitae arcu lobortis molestie. Sed leo velit, efficitur eu est sit amet, mattis volutpat lorem. In malesuada purus quis nibh lacinia facilisis. Curabitur cursus tortor a nisl aliquam consectetur. Nam a velit rutrum, laoreet tortor sit amet, pharetra massa. Maecenas pretium velit odio, ac fermentum dolor malesuada quis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum eros nunc, id imperdiet ante semper in. Aliquam lacinia enim vitae arcu lobortis molestie. Sed leo velit, efficitur eu est sit amet, mattis volutpat lorem. In malesuada purus quis nibh lacinia facilisis. Curabitur cursus tortor a nisl aliquam consectetur. Nam a velit rutrum, laoreet tortor sit amet, pharetra massa. Maecenas pretium velit odio, ac fermentum dolor malesuada quis.
          </p>

        </div>
        <div className='col-span-4 lg:col-span-1 shadow-xl shadow-[#9ddb64] rounded-xl mt-4 pl-4 pt-4 pr-4'>
          <div className='p-2'>
            <p className='text-center text-xl font-bold pb-2'>Technologies</p>
            <div>
            <div className='flex flex-row flex-start justify-start'>
              <div className='flex items-center'>
                <SiReact color='#61dafb' size={24} />
              </div>
              <div className='m-2'>
                <h3>React</h3>
              </div>
            </div>
            <div className='flex flex-row flex-start justify-start'>
              <div className='flex items-center'>
                <SiRedux color='#764abc' size={24} />
              </div>
              <div className='m-2'>
                <h3>Redux</h3>
              </div>
            </div>
            <div className='flex flex-row flex-start justify-start'>
              <div className='flex items-center'>
                <SiNodedotjs color='#43853d' size={24} />
              </div>
              <div className='m-2'>
                <h3>Node.js</h3>
              </div>
            </div>
            <div className='flex flex-row flex-start justify-start'>
              <div className='flex items-center'>
                <SiExpress color='#ffffff' size={24} />
              </div>
              <div className='m-2'>
                <h3>Express.js</h3>
              </div>
            </div>
            <div className='flex flex-row flex-start justify-start'>
              <div className='flex items-center'>
                <SiPostgresql color='#31648d' size={24} />
              </div>
              <div className='m-2'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
            </div>
          </div>
        </div>
        <button className='text-lg lg:text-xl px-6 py-2 text-gray-700 hover:scale-105 ease-in duration-300 hover:text-[#ffffff]'>Demo</button>
        <button className='text-lg lg:text-xl px-6 py-2 text-gray-700 hover:scale-105 ease-in duration-300 hover:text-[#ffffff]'>Code</button>
      </div>
    </div>
  )
}

export default emporium