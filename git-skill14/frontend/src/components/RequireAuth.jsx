import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getStoredUser } from '../authStorage'

export default function RequireAuth() {
  const location = useLocation()
  if (!getStoredUser()) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return <Outlet />
}
