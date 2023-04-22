import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useGetUserId } from "../hooks/useGetUserId";


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvdider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const userId  = useGetUserId()

    // login
    const login = (username, password) => {
        return axios.post(`${import.meta.env.VITE_API_KEY}/auth/login`, { username, password });
    }

    // signup
    const signup = (username, password) => {
        return axios.post(`${import.meta.env.VITE_API_KEY}/auth/register`, { username, password })
    }

    // values 
    let value = {
        login,
        signup,
        currentUser,
        setCurrentUser
    }

    useEffect(() => {

        const fetchUser = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_KEY}/auth/user/${userId}`)
            setCurrentUser(response.data)
        }
        fetchUser();
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}