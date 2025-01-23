'use client'
import React, { useState } from 'react'

const Login = () => {

    const [login, setLogin] = useState('login')

    return (
        <div className='flex justify-center items-center pt-24'>
            <div className='w-[400px]'>
                <div className='flex justify-center items-center gap-x-2 prata text-3xl'>
                    {login === 'login' && <h2>Login</h2>}
                    {login === 'sign up' && <h2>Sign Up</h2>}
                    <hr className='border-0.5 border-black w-10'/>
                </div>
                <form action="" className='flex flex-col py-6 gap-3'>
                    {login === 'sign up' && <input type="text" placeholder='Full name' className='border border-black px-4 py-2' />}
                    <input type="text" placeholder='Email' className='border border-black px-4 py-2' />
                    <input type="password" placeholder='Password' className='border border-black px-4 py-2' />
                    <div className='flex justify-between text-sm'>
                        <p>Forgot your password</p>
                        
                        {login === 'login' && <p onClick={() => setLogin('sign up')} className='cursor-pointer'>Create account</p>}
                        {login === 'sign up' && <p onClick={() => setLogin('login')} className='cursor-pointer'>Login Here</p>}
                        

                    </div>
                    <div className='flex justify-center mt-6'>
                        {login === 'login' && <button className='px-8 py-2 bg-black text-white'>Login</button>}
                        {login === 'sign up' && <button className='px-8 py-2 bg-black text-white'>Sign Up</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login