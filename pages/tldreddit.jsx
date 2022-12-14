/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import emporiumImg from '../public/assets/projects/tldreddit-full.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import {SiJest, SiRedux, SiReact} from 'react-icons/si'
import {DiSass} from 'react-icons/di'
import Link from 'next/link'
import {MdArrowBack} from 'react-icons/md'

const tldreddit = () => {
  return (
    <div id='tldreddit' className='w-full '>
      <div className='w-screen h-[20vh] lg:h-[30vh] relative top-20 shadow-lg shadow-[#67E8F9] rounded-xl'>
        <Image className='absolute left-0 h-[20vh] lg:h-[30vh] z-10' layout='fill' objectFit='cover' src={emporiumImg} alt='/' />
        <div className='absolute left-0 w-full h-[20vh] lg:h-[30vh] bg-black/80 z-10'>
        </div>
        <div className='absolute top-[94%] z-10 p-6 max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <p className='text-xl tracking-widest uppercase text-[#67E8F9] '>Project</p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-6 grid lg:grid-cols-5 gap-8 mt-20'>
        <div className='col-span-4 '>
        <h2 className='py-2 mb-4'>TLDReddit</h2>
          <p>            
          TLDReddit is an alternative way to browse reddit as a Single Page Application. Users are able browse any subreddit they want, they can expand any thread and comment they want and preview all types of media without ever needing to reload the page. They can route to any subreddit and comment page by writting in the browser's address bar.
          </p>
          <br/>
          <p>
            This application was built using React, bootstrapped with create-react-app and is hosted on netlify. 
            Data handling was done by fetching data using reddit's API, routing was handled by react-router and state management by Redux.
            Jest was used as the testing framework and the user interface was built using Sass with no use of a component library.
          </p>

        </div>
        <div className='col-span-4 lg:col-span-1 shadow-xl shadow-[#67E8F9] rounded-xl mt-4 pl-4 pt-2 pb-2 pr-4'>
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
                <DiSass color='#c76594' size={24} />
              </div>
              <div className='m-2'>
                <h3>Sass</h3>
              </div>
            </div>
            <div className='flex flex-row flex-start justify-start'>
              <div className='flex items-center'>
                <SiJest color='#c03c14' size={24} />
              </div>
              <div className='m-2'>
                <h3>Jest</h3>
              </div>
            </div>

            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <a href='https://serene-sinoussi-2933f8.netlify.app/' target='_blank' rel='noreferrer noopener'>
          <button className='text-lg lg:text-xl px-6 py-3 mt-2 mr-2 text-gray-800 hover:scale-105 ease-in duration-300 hover:text-[#ffffff]'>Demo</button>
          </a>
          <a href='https://github.com/JPSCorreia/TLDReddit' target='_blank' rel='noreferrer noopener'>
          <button className='text-lg lg:text-xl px-6 py-3 mt-2 ml-2 text-gray-800 hover:scale-105 ease-in duration-300 hover:text-[#ffffff]'>Code</button>
          </a>
        </div>


      </div>
      <div className='flex justify-center mb-8'>
          <Link href='/#projects' >
           <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-6 m-1 mt-4 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
            <MdArrowBack className=''  size={30} />
           </div>
          </Link>
      </div>

    </div>
  )
}

export default tldreddit