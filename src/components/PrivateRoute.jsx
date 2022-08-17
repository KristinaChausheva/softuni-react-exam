import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
  const isLogged = true
  return isLogged ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
