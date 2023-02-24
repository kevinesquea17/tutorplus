import React from 'react'
import Image from 'next/image'
import Person01 from '../public/person-01.avif'
import { useRouter } from 'next/router'

const CardTutor = () => {

    const router = useRouter();

    return (
        <div className="bg-white shadow-md flex flex-col rounded overflow-hidden">
            <div className="flex justify-between items-center mt-4 px-4">
                <p className="px-4 py-2 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500  text-white shadow-lg shadow-purple-500">Avalaible</p>
                <h5 className="text-2xl font-semibold">$55/hr</h5> 
            </div>
            <div className="flex justify-center mb-6 h-28 w-full">
            <Image 
                src={Person01}
                alt="tutor"
                className='rounded-full h-28 w-28 object-cover border-[4px] border-purple-500'
            />
            </div>
            <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl text-gray-900 font-bold">Maria Patrescu</h2>
            <span className="text-gray-400 mb-4">Mobile Designer</span>
            <div className="flex items-center space-x-2">
                <p className="border-[1px] border-gray-600 px-4 py-1 rounded-full">UI</p>
                <p className="border-[1px] border-gray-600 px-4 py-1 rounded-full">U/X</p>
                <p className="border-[1px] border-gray-600 px-4 py-1 rounded-full">Photoshop</p>
                <p className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1 rounded-full text-white">+2</p>
            </div>
            </div>
            <p className="text-gray-400 text-center mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="h-16 rounded-tr-2xl rounded-tl-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center">
                <button 
                    className="border-none bg-transparent text-white uppercase"
                    onClick={() => router.push('/profile')}
                >
                    View Profile
                </button>
            </div>
        </div>
        )
}

export default CardTutor
