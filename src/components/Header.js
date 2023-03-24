import React, { useState, useEffect } from 'react';

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={isScrolled ? 'scrolled' : ''}>
      <div className='flex items-center justify-between text-white px-[6%] py-3 h-[10vh]'>
        <div>
          <h1 className='text-4xl font-bold'>Blossom.</h1>
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
    </div>
  )
}

export default Header