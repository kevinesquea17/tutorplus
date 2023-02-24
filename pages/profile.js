import React from 'react'
import Nabvar from '../components/Nabvar'
import Image from 'next/image'
import Person03 from '../public/person-03.jpg'
import {AiOutlineSend} from 'react-icons/ai'
import { useRouter } from 'next/router'

const profile = () => {

    const router = useRouter();

    return (
        <section className='w-[90%] mx-auto flex flex-col gap-8 h-screen pb-4'>
            <Nabvar />
            <div className='flex-1 flex gap-8'>
                <div className='w-[60%] rounded flex flex-col gap-4'>
                    <div className='py-6 px-8 bg-white flex justify-between'>
                        <div className='flex'>
                            <div className='w-32 h-32 rounded-lg mr-4'>
                                <Image 
                                    src={Person03}
                                    className='w-32 h-32 rounded-lg object-cover'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-2xl font-bold'>Amelia Sharapova</h3>
                                <small className='text-gray-400 mb-8'>Mobile Designer</small>
                                <div className='flex space-x-2'>
                                    <button 
                                        className='bg-purple-500 rounded text-sm px-4 py-3 text-white flex space-x-4 items-center'
                                        onClick={() => router.push('/chat')}
                                    >
                                        Send a message 
                                        <AiOutlineSend className='ml-4 font-bold' />
                                    </button>
                                    <button className='bg-transparent border-[1px] border-gray-900 px-4 py-3 text-sm rounded'>Save as favorite</button>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-2xl font-bold'>$43/hr</h3>
                    </div>
                    <div className='flex-1 bg-white shadow-sm py-6 px-8'>
                        <div className='mb-8'>
                            <h3 className='font-bold text-xl mb-2'>About</h3>
                            <p className='text-gray-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        </div>
                        <div>
                            <h3 className='font-bold text-xl mb-3'>Skills</h3>
                            <div className='flex flex-wrap gap-2'>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>HTML</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>CSS</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>JavaScript</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>HTML</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>CSS</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>JavaScript</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>HTML</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>CSS</p>
                                <p className='px-2 py-2 rounded border-[1px] border-gray-900'>JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white h-full w-[40%] rounded shadow-sm p-4 pt-6 flex flex-col items-center'>
                    <h4 className='font-bold text-2xl mb-8 uppercase'>Schedules</h4>
                    <div className='flex space-x-2'>
                        <ul>
                            <li className='text-gray-800 font-bold mb-2 text-center'>Lunes</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>08:00am</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>11:00am</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>03:00pm</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>03:00pm</li>
                        </ul>
                        <ul>
                            <li className='text-gray-800 font-bold mb-2 text-center'>Martes</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>08:00am</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>11:00am</li>
                        </ul>
                        <ul>
                            <li className='text-gray-800 font-bold mb-2 text-center'>Miercoles</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>08:00am</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>11:00am</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>03:00pm</li>
                        </ul>
                        <ul>
                            <li className='text-gray-800 font-bold mb-2 text-center'>Jueves</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>08:00am</li>
                        </ul>
                        <ul>
                            <li className='text-gray-800 font-bold mb-2 text-center'>Viernes</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>08:00am</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>11:00am</li>
                            <li className='p-2 rounded bg-purple-500 text-white shadow-sm font-bold mb-2 text-sm'>03:00pm</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default profile
