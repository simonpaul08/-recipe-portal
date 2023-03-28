import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoutes = () => {

    const [cookies, _] = useCookies()

    return (
        cookies['access-token'] ? <Outlet /> : <Navigate to="/" />
    )
}

