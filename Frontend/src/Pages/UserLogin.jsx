import React, { useState } from 'react'
import logo from '../assets/Uber_logo_2018.png'
import {Link} from 'react-router-dom'
const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setuserData] = useState({})
    
    const submithandler = (e) => {
        e.preventDefault()
        setuserData = {
            email: email,
            password: password
        }
        console.log(userData);
        
        setEmail('')
        setPassword('')

    }


    return (
        <div className=''>
            <img className='w-15 mt-2 ml-5' src={logo} alt="" />
            <div className='p-5 mt-5 '>
            <form onSubmit={(e) => submithandler(e)} action="POST">
                <h2 for="email" className='text-2xl font-semibold'>What's your Email ?</h2>
                <input className='mt-3 p-5 font-semibold font-sans w-full border-none h-13 rounded-xl bg-gray-300' type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" name="Email" required/>

                <h2 for="email" className='text-2xl font-semibold mt-5'>Password </h2>
                <input className='mt-3 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name="password" required/>

                <button  className='w-full text-white text-xl h-13 px-5 bg-black mt-7 rounded-2xl'>Continue</button>
            </form>
            <div className='mt-5 flex items-center justify-center'>
                <p>New to Uber ? <Link className='text-blue-600' to={'/signup'}>Register here</Link></p>
            </div>

            <div className=''>
                <Link to={'/captain-login'}>
                    <div className=' rounded-2xl justify-center bg-green-400 h-13 w-full px-5 mt-80 flex items-center gap-4'>
                        <img className='w-8 h-8' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="Google" />
                        <h3 className='text-center flex items-center justify-center font-semibold'>Sign in as Captain</h3>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </div>
  )
}

export default UserLogin
