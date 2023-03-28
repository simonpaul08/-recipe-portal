import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookies] = useCookies(["access-token"])
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let item = {
            username,
            password
        }

        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(item)
            });

            const data = await response.json()
            console.log(data)
            setCookies("access-token", data.token)
            window.localStorage.setItem("userId", data.userId)
            navigate('/')
        } catch (e) {
            console.log(e.code)
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