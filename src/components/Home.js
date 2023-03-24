import React from 'react'
import Header from './Header'
import backgroundImage from '../assets/background.jpg'

function Home() {
  return (
    <div className='h-screen bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})`,  backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
        <Header />
    </div>
  )
}

export default Home