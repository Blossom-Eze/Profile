import React from 'react'

function Contact() {
  return (
    <div id='about' className='h-screen flex flex-col items-center bg-white py-[5%]'>
        <div className='flex flex-col items-center text-black'>
            <h2 className='text-4xl py-2'>Contact me</h2>
            <div className='flex justify-between items-center'>
                <div className='h-[5px] w-[40px] bg-black rounded-md'></div>
                <h3 className='text-xl px-2 text-purple-600'>Get In Touch</h3>
                <div className='h-[5px] w-[40px] bg-black rounded-md'></div>
            </div>
        </div>
    </div>
  )
}

export default Contact