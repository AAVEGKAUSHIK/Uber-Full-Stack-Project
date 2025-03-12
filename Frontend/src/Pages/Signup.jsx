import React, { useState } from 'react';
import logo from '../assets/Uber_logo_2018.png'
import { Link } from 'react-router-dom'
const Signup = () => {
      const [firstname, setFirstname] = useState('');
      const [lastname, setLastname] = useState('');
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [userData, setuserData] = useState({})
      
      const submithandler = (e) => {
          e.preventDefault()
          console.log(firstname, lastname, email, password);
          
          setuserData({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
          })
          console.log(userData);
          
          setEmail('')
          setPassword('')
  
      }
  return (
    <div className=''>
            <img className='w-15 mt-2 ml-5' src={logo} alt="" />
            <div className='p-5 mt-5 '>
        <form onSubmit={(e) => submithandler(e)} action="POST">
            <div className='flex justify-center items-center gap-2'>
                <div className=''>
                    <h2 for="firstname" className='text-2xl font-semibold'>Firstname</h2>
                    <input className='mt-3 p-5 font-semibold font-sans w-full border-none h-13 rounded-xl bg-gray-300' type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="email" placeholder="Firstname" name="Firstname" required/>
                </div>
                <div className=''>
                    <h2 for="email" className='text-2xl font-semibold mt-5'>Lastname </h2>
                    <input className='mt-3 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} name="password" required/>
                </div>
            </div>
            <div className=''>
                <h2 for="email" className='text-2xl font-semibold mt-5'>Email </h2>
                <input className='mt-3 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} name="Email" required/>
            </div>

            <div className=''>
                <h2 for="Password" className='text-2xl font-semibold mt-5'>Password </h2>
                <input className='mt-3 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name="Password" required/>
            </div>

                <button onClick={() => submithandler()} className='w-full text-white text-xl h-13 px-5 bg-black mt-7 rounded-2xl'>Continue</button>
            </form>
            <div className='mt-5 flex items-center justify-center'>
                <p>Already have an account ? <Link className='text-blue-600' to={'/login'}>Login </Link></p>
            </div>

            <div className=''>
                <Link to={'/captain-register'}>
                    <div className=' rounded-2xl justify-center bg-green-400 h-13 w-full px-5 mt-56 flex items-center gap-4'>
                        <img className='w-8 h-8' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="Google" />
                        <h3 className='text-center flex items-center justify-center font-semibold'>Register as Captain</h3>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </div>
  )
}

export default Signup
