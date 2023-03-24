import '../App.css';
import Header from './Header'
import backgroundImage from '../assets/background.jpg'

function Home() {
  return (
    <div className='h-screen bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})`,  backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
        <Header />
        <div className='flex flex-col justify-center items-center text-white h-[80vh] pl-[5%]'>
            <h3 className='text-2xl'>Hello, my name is</h3>
            <h1 className='text-6xl py-1 font-semibold'>Blossom Eze</h1>
            <h3 className='text-4xl py-2'>I am a Frontend Web Developer</h3>
            <button className='bg-purple-600 w-[200px] rounded-xl text-2xl font-medium py-3 px-1 mt-2 bg-opacity-80'>Hire Me</button>
      </div>
    </div>
  )
}

export default Home