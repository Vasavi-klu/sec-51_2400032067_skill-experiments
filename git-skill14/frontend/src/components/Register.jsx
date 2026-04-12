import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../api'

export default function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await registerUser({
        username,
        password,
        email: email || undefined,
        fullName: fullName || undefined,
      })
      navigate('/login', { replace: true })
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card">
      <h1>Create account</h1>
      <p className="muted">Register to access the app.</p>
      <form onSubmit={handleSubmit} className="stack">
        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            minLength={3}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
            minLength={6}
          />
        </label>
        <label>
          Email <span className="optional">(optional)</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label>
          Full name <span className="optional">(optional)</span>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
        </label>
        {error ? <p className="error">{error}</p> : null}
        <button type="submit" className="primary" disabled={loading}>
          {loading ? 'Saving…' : 'Register'}
        </button>
      </form>
      <p className="footer-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  )
}
