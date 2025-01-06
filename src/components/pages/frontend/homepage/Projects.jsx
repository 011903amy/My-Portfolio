import { imgPath } from '@/components/helpers/functions-general'
import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='bg-secondary py-[5rem]'>
      <div className="container">
        <h1 className='py-10 text-primary text-6xl'>Projects</h1>
        <div className='flex items-center justify-center gap-[10rem]'>
          <img src={`${imgPath}/proj1.png`} className='bg-white rounded-[3.5rem] size-[25rem]' alt="" />
        <img src={`${imgPath}/proj2.png`} className='rounded-3xl size-[25rem]' alt="" />
        <img src={`${imgPath}/proj3.png`} className='rounded-3xl size-[25rem]' alt="" />
        </div>
        
      </div>
    </div>
    
    </>
  )
}

export default Projects