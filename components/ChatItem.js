import React from 'react'
import Image from 'next/image'
import Person03 from '../public/person-03.jpg'

const ChatItem = () => {
  return (
    <div className='flex items-center h-24 bg-gray-100 px-2 rounded shadow-sm hover:bg-gray-200 mb-4'>
        <div className='relative mr-4'>
            <Image 
                src={Person03}
                className='w-14 h-14 object-cover rounded-full'
            />
            <div className='absolute bottom-0 right-0 bg-green-400 rounded-full w-4 h-4 border-gray-800 border-2'></div>
        </div>
        <div className='flex-1 flex justify-between pb-2 items-center'>
            <div className='flex flex-col'>
                <h4 className='text-lg font-semibold mt-3 mb-1'>Maria Patrescu</h4>
                <small className='text-gray-400'>Congratulations, Maria!!!</small>
            </div>
            <div className='flex flex-col'>
                <h5 className='text-gray-400 font-light mt-3 mb-1 text-sm'>09:54 AM</h5>
                <p className='p-3 bg-purple-500 rounded-full w-6 h-6 flex justify-center items-center text-white text-sm shadow-lg shadow-purple-500'>2</p>
            </div>
        </div>
    </div>
  )
}

export default ChatItem
