import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { signup } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await signup(username, password);
            const data = await response.json()
        }catch(e){
            console.log(e.response.data)
        }

    }

    return (
        <form className='form p-4' onSubmit={handleSubmit}>
            <h3 className='mb-4 text-center'>Register</h3>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div className='mb-4'>
                <input type="password" className='form-control' placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <button type='submit' className='btn btn-auth w-100'>Register</button>
            </div>
        </form>
    )
}

export default Register