import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import axios from 'axios';


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvdider = ({ children }) => {
    const [currentUserId, setCurrentUserId] = useState()

    const login = (username, password) => {
        return axios.post('http://localhost:3001/auth/login', { username, password });
    }

    const signup = (username, password) => {
        return axios.post('http://localhost:3001/auth/register', { username, password })
    }

    let value = {
        login,
        signup,
        currentUserId,
        setCurrentUserId
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}