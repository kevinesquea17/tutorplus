import React from 'react'
import CardTutor from './CardTutor'

const TutorList = () => {
  return (
    <div className='grid grid-cols-3 gap-8'>
      <CardTutor />
      <CardTutor />
      <CardTutor />
    </div>
  )
}

export default TutorList
