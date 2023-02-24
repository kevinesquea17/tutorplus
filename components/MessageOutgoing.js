import React from 'react'
import Image from 'next/image'
import Person01 from '../public/person-01.avif'

const MessageOutgoing = () => {
  return (
    <div className='flex flex-row-reverse mb-8'>
        <Image 
        src={Person01}
        className="w-12 h-12 rounded-full object-cover self-end ml-4"
        />
        <div className='flex flex-col'>
            <div className='bg-purple-500 w-96 rounded-3xl p-6 rounded-br-none shadow mb-2'>
                <h4 className='font-bold text-white'>Amalia Lipa</h4>
                <small className='text-white'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic.</small>
            </div>
            <small className='text-gray-400 self-end'>09:45 am</small>
        </div>
    </div>
  )
}

export default MessageOutgoing
