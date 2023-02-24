import React from 'react'
import MessageSend from './MessageSend'
import MessageOutgoing from './MessageOutgoing'

const Messages = () => {
  return (
    <div className='px-14 py-6 h-[70%] overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-gray-200 scrollbar-track-purple-500'>
      <MessageSend />
      <MessageOutgoing />
      <MessageSend />
      <MessageOutgoing />
      <MessageSend />
      <MessageOutgoing />
    </div>
  )
}

export default Messages
