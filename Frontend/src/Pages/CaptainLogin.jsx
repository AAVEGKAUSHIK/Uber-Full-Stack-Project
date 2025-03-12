import React, { useState } from 'react'
import logo from '../assets/Uber_logo_2018.png'
import {Link} from 'react-router-dom'
const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    
    const submithandler = (e) => {
        e.preventDefault()
        console.log(email, password);
        
        setuserData({
            email: email,
            password: password
        })
        console.log(captainData);
        
        setEmail('')
        setPassword('')

    }


    return (
        <div className=''>
            <div className='flex gap-2 items-center justify-center'> 
            <img className='w-10 mt-2 ml-5' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="" />
            <h3 className='font-semibold text-2xl'>Uber</h3>
            </div>
            <div className='p-5 mt-5 '>
            <form onSubmit={(e) => submithandler(e)} action="POST">
                <h2 for="email" className='text-2xl font-semibold'>What's your Email ?</h2>
                <input className='mt-3 p-5 font-semibold font-sans w-full border-none h-13 rounded-xl bg-gray-300' type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" name="Email" required/>

                <h2 for="email" className='text-2xl font-semibold mt-5'>Password </h2>
                <input className='mt-3 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name="password" required/>

                <button onClick={() => submithandler()} className='w-full text-white text-xl h-13 px-5 bg-black mt-7 rounded-2xl'>Continue</button>
            </form>
            <div className='mt-5 flex items-center justify-center'>
                <p>New to Uber ? <Link className='text-blue-600' to={'/captain-register'}>Register here</Link></p>
            </div>

            <div className=''>
                <Link to={'/login'}>
                    <div className=' rounded-2xl justify-center bg-orange-300 h-13 w-full px-5 mt-80 flex items-center gap-4'>
                        <img className='w-8 h-8' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="Google" />
                        <h3 className='text-center flex items-center justify-center font-semibold'>Sign in as User</h3>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </div>
  )
}

export default CaptainLogin
