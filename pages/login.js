import React from 'react'
import Background02 from '../public/background-02.jpg'
import Image from 'next/image'

const login = () => {
  return (
    <div class="bg-white w-[55rem] h-[32rem] mx-auto my-10 rounded-xl shadow-md flex overflow-hidden">
    <div class="w-1/2 h-full relative overflow-hidden">
        <Image src={Background02} alt="" class="h-full w-full object-cover"/>
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-60"></div>
        <h3 className='absolute text-white top-[45%] left-[25%] text-6xl font-bold'>Tutor<span className='text-semibold text-4xl'>+</span></h3>
    </div>
    <div class="w-1/2 flex justify-center items-center">
      <form action="" class="w-4/5">
        <h3 class="mb-10 pl-6 relative uppercase text-gray-900 font-semibold  text-3xl after:content-[''] after:h-[85%] after:w-[5px] after:bg-gradient-to-r from-violet-500 to-fuchsia-500 after:absolute after:top-[1px] after:left-0 after:drop-shadow-sm after:shadow">Welcome, back</h3>
        <div class="flex flex-col mb-6">
          <label for="" class="text-purple-600 font-semibold text-sm mb-2">Username*</label>
          <input type="text" class="bg-gray-200 rounded focus:outline-none h-10 px-4 py-2 shadow-sm placeholder:text-sm placeholder:text-gray-400 placeholder:font-semibold" placeholder="Type your username"/>
        </div>
        <div class="flex flex-col mb-6">
          <label for="" class="text-purple-600 font-semibold text-sm mb-2">Password*</label>
          <input type="text" class="bg-gray-200 rounded focus:outline-none h-10 px-4 py-2 shadow-sm placeholder:text-sm placeholder:text-gray-400 placeholder:font-semibold" placeholder="Type your password"/>
        </div>
        <input type="submit" value="Login" class="text-center bg-purple-400 p-3 text-white rounded w-full uppercase font-medium shadow-lg shadow-purple-500"/>
      </form>
    </div>
  </div>
  )
}

export default login
