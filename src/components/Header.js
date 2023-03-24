import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between text-white px-5 py-3'>
      <div>
        <h1 className='text-3xl'>Blossom.</h1>
      </div>
      <div className='text-xl w-1/2 px-5'>
        <nav className='flex justify-between'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contacts'>Contacts</a>
        </nav>
      </div>
    </div>
  )
}

export default Header