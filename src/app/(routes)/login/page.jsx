'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

    const {token, setToken, backendUrl} = useContext(ShopContext)
    
    const [login, setLogin] = useState('login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()



    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            let res
            if (login == 'login'){
                res = await axios.post(backendUrl + '/api/user/login', {name, email, password})

            } else {
                res = await axios.post(backendUrl + '/api/user/register', {name, email, password})

            }

            if (res.data.success){
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token){
            router.push('/')
        }
    }, [token])

    return (
        <div className='flex justify-center items-center pt-24'>
            <div className='w-[400px]'>
                <div className='flex justify-center items-center gap-x-2 prata text-3xl'>
                    {login === 'login' && <h2>Login</h2>}
                    {login === 'sign up' && <h2>Sign Up</h2>}
                    <hr className='border-0.5 border-black w-10'/>
                </div>
                <form onSubmit={handleLogin} className='flex flex-col py-6 gap-3'>
                    {login === 'sign up' && <input type="text" placeholder='Full name' name='name' value={name} onChange={(e) => setName(e.target.value)} className='border border-black px-4 py-2' />}
                    <input type="text" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black px-4 py-2' />
                    <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-black px-4 py-2' />
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