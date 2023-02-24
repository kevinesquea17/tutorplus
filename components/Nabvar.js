import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'


const Nabvar = () => {

  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')
  }

  return (
    <header className='flex justify-between items-center h-[70px] border-b  border-gray-300'>
      <div className='w-3/5 flex justify-between items-center'>
        <h3 className='text-4xl font-bold'>Tutor<span className='text-3xl font-medium text-purple-600'>+</span></h3>
        <nav className='flex space-x-10 items-center mt-2 font-medium'>
          <Link href='/' className='text-purple-600 font-bold'>Home</Link>
          <Link href='/'>Categories</Link>
          <Link href='/'>Tutors</Link>
          <Link href='/'>About</Link>
        </nav>
      </div>
      <div className='flex items-center space-x-6'>
        <button 
          className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-2 rounded-full text-white shadow-lg shadow-purple-500'
          onClick={handleLogin}
        >
          Login
        </button>
        <button className='bg-transparent border-[1px] rounded-full border-gray-800 px-6 py-2 shadow-lg shadow-gray-400'>Register</button>
      </div>
    </header>
  )
}

export default Nabvar
