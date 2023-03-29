import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const { signup } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')
        setSuccess('')

        try {
            const response = await signup(username, password);
            const data = response.data
            setSuccess(data.message)
        } catch (e) {
            console.log(e.response.data)
            setError(e.response.data)
        }

    }

    return (
        <form className='form p-4' onSubmit={handleSubmit}>
            {error.length !== 0  && <div className="alert alert-danger mb-3" role="alert">
                {error}
            </div>}
            {success.length !== 0  && <div className="alert alert-success mb-3" role="alert">
                {success}
            </div>}
            <h3 className='mb-4 text-center'>Register</h3>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className='mb-4'>
                <input type="password" className='form-control' placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className='mb-2'>
                <button type='submit' className='btn btn-auth w-100'>Register</button>
            </div>
        </form>
    )
}

export default Register