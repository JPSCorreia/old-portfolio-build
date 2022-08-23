import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Scroller = () => {
  return (
    <div className='flex justify-center mb-8'>
    <Link href='' >
     <div className='rounded-full bg-[#121212] shadow-sm shadow-[#67E8F9] p-6 m-1 mt-4 cursor-pointer hover:scale-110 hover:text-[#67E8F9] ease-in duration-100'>
      <HiOutlineChevronDoubleUp className=''  size={30} />
     </div>
    </Link>
  </div>
  )
}

export default Scroller