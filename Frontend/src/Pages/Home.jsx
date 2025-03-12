import React from 'react'
import Logo from '../assets/Uber_logo_2018.png'
import { Link } from 'react-router-dom'
import UserLogin from './UserLogin'
const Home = () => {
    return (
    <div>
        <img src={Logo} className='h-10 absolute p-1 m-4' alt="Uber Logo"/>
        <div className='h-screen bg-[url("/HomeBg.jpg")] bg-cover bg-center items-end flex overflow-x-hidden'>
                <div className='bg-white rounded-t-3xl shadow-3xl inline-block w-full h-40 px-5 py-3'>
                    <h2 className='text-2xl font-semibold mt-3 justify-center inline-block'>Get Started with Uber</h2>
                    <Link to={'/login'} className='w-full inline-block items-center text-center mt-4 h-15 text-2xl rounded-xl bg-black text-white p-2'>Continue</Link>
                </div>
        </div>
    </div>    
    )
}

export default Home
