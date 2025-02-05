'use client'
import { ShopContext } from '@/app/(context)/ShopContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { LoaderIcon } from 'lucide-react'


const Login = () => {

    const { token, setToken, backendUrl } = useContext(ShopContext)

    const [login, setLogin] = useState('login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            let res
            setLoading(true)
            if (login == 'login') {
                res = await axios.post(backendUrl + '/api/user/login', { name, email, password })

            } else {
                res = await axios.post(backendUrl + '/api/user/register', { name, email, password })

            }

            if (res.data.success) {
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token)

            } else {
                toast.error(res.data.message)
            }
            setLoading(false)

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            router.push('/')
        }
    }, [token])


    return (

        <div className='flex justify-center items-center pt-24'>
            <div className='w-[400px]'>
                <div className='flex justify-center items-center gap-x-2 prata text-3xl'>
                    {login === 'login' && <h2>Login</h2>}
                    {login === 'sign up' && <h2>Sign Up</h2>}
                    <hr className='border-0.5 border-black w-10' />
                </div>
                <form onSubmit={handleLogin} className='flex flex-col py-6 gap-3'>
                    {login === 'sign up' && <input type="text" placeholder='Full name' name='name' value={name} onChange={(e) => setName(e.target.value)} className='border border-black px-4 py-2' />}
                    <input type="text" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-black px-4 py-2' />
                    <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-black px-4 py-2' />
                    <div className='flex justify-center gap-2 text-sm'>
                        {login === 'login' && <p>Don't have an account?</p>}
                        {login === 'sign up' && <p>Already have an account?</p>}

                        {login === 'login' && <p onClick={() => setLogin('sign up')} className='cursor-pointer text-blue-600 underline'>Sign Up</p>}
                        {login === 'sign up' && <p onClick={() => setLogin('login')} className='cursor-pointer text-blue-600 underline'>Login</p>}


                    </div>
                    <div className='flex justify-center mt-6'>
                        {login === 'login' && <button className='px-8 py-2 bg-black text-white w-[120px] flex justify-center'>{loading ? <LoaderIcon className='animate-spin' /> : 'Login'}</button>}
                        {login === 'sign up' && <button className='px-8 py-2 bg-black text-white  w-[120px] flex justify-center'>{loading ? <LoaderIcon className='animate-spin' /> : 'Sign Up'}</button>}
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Login