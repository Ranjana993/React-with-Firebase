import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from '../Context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { user, login } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)    
            navigate('/')
            
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }


    return (
        <div className='w-full h-screen '>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/9c08772c-0ce8-4813-b503-93859177a146/IN-en-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className='bg-white-600 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50 '>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold '> Sign In</h1>
                        {
                            error ? <p className='p-4 bg-red-400 my-2'> {error}</p> : null
                        }
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder=' Email' autoComplete='email' />
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder=' Password' autoComplete='current-Password' />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold '>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p className='mr-2'><input type="checkbox" />Remember me </p>
                                <p>Need Help</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>New to Netflix ? </span>{" "}
                                <Link to="/signup">Sign Up </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login