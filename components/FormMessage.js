import React from 'react'
import {BsCamera} from 'react-icons/bs'
import {AiOutlinePaperClip} from 'react-icons/ai'

const FormMessage = () => {
  return (
    <div className='flex p-14 py-6 border-t items-center'>
      <input type="text" placeholder='Escribe tu mensaje...'className='flex-1 outline-none bg-transparent'/>
      <div className='flex space-x-3 items-center'>
        <BsCamera  className='text-xl'/>
        <AiOutlinePaperClip  className='text-xl'/>
        <button className='text-white bg-purple-500 px-6 py-1 rounded text-base'>Send</button>
      </div>
    </div>
  )
}

export default FormMessage
