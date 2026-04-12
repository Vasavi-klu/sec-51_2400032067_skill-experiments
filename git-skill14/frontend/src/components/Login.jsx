import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../api'
import { setStoredUser } from '../authStorage'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const data = await loginUser({ username, password })
      setStoredUser(data.userId, data.username)
      navigate('/home', { replace: true })
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card">
      <h1>Log in</h1>
      <p className="muted">Use your username and password.</p>
      <form onSubmit={handleSubmit} className="stack">
        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error ? <p className="error">{error}</p> : null}
        <button type="submit" className="primary" disabled={loading}>
          {loading ? 'Signing in…' : 'Log in'}
        </button>
      </form>
      <p className="footer-link">
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  )
}
