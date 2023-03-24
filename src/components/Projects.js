import React from 'react'

function Projects() {
  return (
    <div id='projects' className='h-screen flex flex-col items-center bg-black py-[5%]'>
        <div className='flex flex-col items-center text-white'>
            <h2 className='text-4xl py-2'>My Projects</h2>
            <div className='flex justify-between items-center'>
                <div className='h-[5px] w-[40px] bg-white rounded-md'></div>
                    <h3 className='text-xl px-2 text-purple-600'>What I've built</h3>
                <div className='h-[5px] w-[40px] bg-white rounded-md'></div>
            </div>
        </div>
    </div>
  )
}

export default Projects