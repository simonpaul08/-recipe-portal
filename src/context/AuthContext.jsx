import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useGetUserId } from "../hooks/useGetUserId";


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvdider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const userId  = useGetUserId()
    const login = (username, password) => {
        return axios.post('http://localhost:3001/auth/login', { username, password });
    }

    const signup = (username, password) => {
        return axios.post('http://localhost:3001/auth/register', { username, password })
    }

    let value = {
        login,
        signup,
        currentUser,
        setCurrentUser
    }

    useEffect(() => {

        const fetchUser = async () => {
            const response = await axios.get(`http://localhost:3001/auth/user/${userId}`)
            setCurrentUser(response.data)
        }

        fetchUser()
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}