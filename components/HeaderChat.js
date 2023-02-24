import React from 'react'
import Person01 from '../public/person-01.avif'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgMenuRight} from 'react-icons/cg'

const HeaderChat = () => {
  return (
    <div className='px-14 py-6 border-b flex justify-between items-center'>
      <div className='flex space-x-2 items-center'>
        <div className='relative'>
            <Image 
                src={Person01}
                className="w-14 h-14 object-cover rounded-full"
            />
            <div className='bg-green-300 rounded-full w-4 h-4 border-2 border-gray-800 absolute bottom-0 right-0'></div>
        </div>
        <div className='flex flex-col space-y-1'>
            <h5 className='text-xl font-semibold'>Jennifer Smith</h5>
            <small className='text-gray-400'>Online</small>
        </div>
      </div>
      <div className='flex space-x-2'>
        <div className='bg-gray-200 p-4 rounded-full hover:bg-gray-300'>
            <AiOutlineSearch className='text-2xl'/>
        </div>
        <div className='bg-gray-200 p-4 rounded-full hover:bg-gray-300'>
            <CgMenuRight className='text-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default HeaderChat
