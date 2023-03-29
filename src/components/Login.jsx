import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { login } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await login(username, password);
            const data = await response.json()
            // console.log(data)
        }catch(e) {
            console.log(e.response.data)
        }
        
    }

    return (
        <form className='form p-4' onSubmit={handleSubmit}>
            <h3 className='mb-4 text-center'>Login</h3>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}  required/>
            </div>
            <div className='mb-4'>
                <input type="password" className='form-control' placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  required/>
            </div>
            <div className='mb-2'>
                <button type='submit' className='btn btn-auth w-100'>Login</button>
            </div>
        </form>
    )
}

export default Login