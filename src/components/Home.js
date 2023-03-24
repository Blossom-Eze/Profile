import React from 'react'
import Header from './Header'
import backgroundImage from '../assets/background.jpg'

function Home() {
  return (
    <div className='h-screen bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})`,  backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
        <Header />
        <div className='flex flex-col justify-center text-white h-[80vh] pl-[5%]'>
            <h3 className='text-2xl py-2'>Hello, my name is</h3>
            <h1 className='text-6xl font-semibold'>Blossom Eze</h1>
            <h3 className='text-2xl py-2'>I am a frontend developer</h3>
            <h2 className='text-5xl text-purple-600'>and my tech stack is</h2>
            <button className='bg-purple-600 w-[200px] rounded-xl text-2xl font-medium py-3 px-2'>Hire Me</button>
      </div>
    </div>
  )
}

export default Home