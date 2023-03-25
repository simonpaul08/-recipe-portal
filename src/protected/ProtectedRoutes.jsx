import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoutes = () => {

    const [cookies, _] = useCookies()
    const flag = cookies['access-token'] ? true : false;
    console.log(flag)

    return (
       flag ? <Outlet /> : <Navigate to="/" />
    )
}

