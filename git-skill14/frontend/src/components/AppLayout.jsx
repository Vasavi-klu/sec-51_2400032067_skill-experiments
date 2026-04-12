import { Link, Outlet, useNavigate } from 'react-router-dom'
import { clearStoredUser } from '../authStorage'

export default function AppLayout() {
  const navigate = useNavigate()

  function logout() {
    clearStoredUser()
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-shell">
      <header className="top-nav">
        <span className="brand">Skill 14 Auth</span>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <button type="button" className="link-button" onClick={logout}>
            Logout
          </button>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
