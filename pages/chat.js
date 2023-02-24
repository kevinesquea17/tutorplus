import React from 'react'
import ChatList from '../components/ChatList'
import HeaderChat from '../components/HeaderChat'
import Messages from '../components/Messages'
import FormMessage from '../components/FormMessage'

const chat = () => {
  return (
    <section className='flex justify-between h-screen'>
        <div className='w-[35%] bg-white h-full px-4 py-8 overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-gray-200 scrollbar-track-purple-500'>
            <h3 className='text-2xl font-bold mb-8'>Chat Recientes</h3>
            <ChatList />
        </div>
        <div className='w-[65%]'>
            <HeaderChat />
            <Messages />
            <FormMessage />
        </div>
    </section>
  )
}

export default chat
