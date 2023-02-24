import React from 'react'
import Image from 'next/image'
import Person03 from '../public/person-03.jpg'

const MessageSend = () => {
  return (
    <div className='flex mb-8'>
      <Image 
        src={Person03}
        className="w-12 h-12 rounded-full object-cover self-end mr-4"
      />
      <div className='flex flex-col'>
        <div className='bg-white w-96 rounded-3xl p-6 rounded-bl-none shadow mb-2'>
            <h4 className='font-bold'>Lucia Sharapova</h4>
            <small className='text-gray-400'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic.</small>
        </div>
        <small className='text-gray-400'>09:34 am</small>
      </div>
    </div>
  )
}

export default MessageSend
