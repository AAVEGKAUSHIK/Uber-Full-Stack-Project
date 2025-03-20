import React, { useState } from 'react';
import logo from '../assets/Uber_logo_2018.png'
import { Link } from 'react-router-dom'
const CaptainRegister = () => {
      const [firstname, setFirstname] = useState('');
      const [lastname, setLastname] = useState('');
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [vehicleColor, setVehicleColor] = useState('')
      const [vehicleNumber, setVehicleNumber] = useState('')
      const [vehicleType, setVehicleType] = useState('')
      const [vehicleCapacity, setVehicleCapacity] = useState('')
      const [CaptainData, setCaptainData] = useState({})
      
      const submithandler = (e) => {
          e.preventDefault()
          console.log(firstname, lastname, email, password, vehicleColor, vehicleNumber, vehicleType, vehicleCapacity);
          
          setCaptainData({
            fullname: {
                firstname: firstname,
                lastname: lastname,
            },
            email: email,
            password: password,
            vehicle : {
                Color: vehicleColor,
                VehicleNumber: vehicleNumber,
                Type: vehicleType,
                Capacity: vehicleCapacity
            }
          })
        console.log(CaptainData);
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setVehicleColor('')
        setVehicleNumber('')
        setVehicleType('')
        setVehicleCapacity('')
      }
  return (
    <div className=''>
            <div className='flex gap-2 items-center justify-center'> 
            <img className='w-10 mt-2 ml-5' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="" />
            <h3 className='font-semibold text-2xl'>Uber</h3>
            </div>
            <div className='p-5 '>
        <form onSubmit={(e) => submithandler(e)} action="POST">
            <div className='flex justify-center items-center gap-2'>
                <div className=''>
                    <h2 for="firstname" className='text-2xl font-semibold'>Firstname</h2>
                    <input className='mt-1 p-5 font-semibold font-sans w-full border-none h-13 rounded-xl bg-gray-300' type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="firstname" placeholder="Firstname" name="Firstname" required/>
                </div>
                <div className=''>
                    <h2 for="email" className='text-2xl font-semibold mt-5'>Lastname </h2>
                    <input className='mt-1 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} name="password" required/>
                </div>
            </div>
            <div className=''>
                <h2 for="email" className='text-2xl font-semibold mt-5'>Email </h2>
                <input className='mt-1 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} name="Email" required/>
            </div>

            <div className=''>
                <h2 for="Password" className='text-2xl font-semibold mt-5'>Password </h2>
                <input className='mt-1 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name="Password" required/>
            </div>

            <div className=''>
                <h2 for="Password" className='text-2xl font-semibold mt-5'>Vehicle Colour </h2>
                <input className='mt-1 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Vehicle color' value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} name="Color" required/>

                <h2 for="Password" className='text-2xl font-semibold mt-5'>Vehicle Plate Number </h2>
                <input className='mt-1 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="VehicleNumber" placeholder='Vehicle color' value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} name="Vehicle Number" required/>

                <h2 for="Vehicle Type" className='text-2xl font-semibold mt-5'>Vehicle Type </h2>
                <select onChange={(e) => setVehicleType(e.target.value)} value={vehicleType} className='w-full p-3 rounded-xl mt-3 border-2' name="" id="">
                    <option autoFocus value="">--Select--</option>
                    <option value={'Car'}>Car</option>
                    <option value={'Auto'}>Auto</option>
                    <option value={'Motorcycle'}>Motorcycle</option>
                </select>

                <h2 for="Capacity" className='text-2xl font-semibold mt-5'>Vehicle Capacity </h2>
                <input className='mt-1 p-5 font-semibold w-full border-none h-13 rounded-xl bg-gray-300'  type="text" id="password" placeholder='Vehicle Capacity' value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} name="Capacity" required/>
            </div>

                <button onClick={() => submithandler()} className='w-full text-white text-xl h-13 px-5 bg-black mt-7 rounded-2xl'>Continue</button>
            </form>
            <div className='mt-5 flex items-center justify-center'>
                <p>Already have an account ? <Link className='text-blue-600' to={'/captain-login'}>Login </Link></p>
            </div>

            <div className=''>
                <Link to={'/login'}>
                    <div className=' rounded-2xl justify-center bg-orange-300 h-13 w-full px-5 mt-20 flex items-center gap-4'>
                        <img className='w-8 h-8' src="https://pngimg.com/uploads/uber/uber_PNG27.png" alt="Uber" />
                        <h3 className='text-center flex items-center justify-center font-semibold'>Login as User</h3>
                    </div>
                    </Link>
                    
                </div>
            </div>
        </div>
  )
}

export default CaptainRegister

