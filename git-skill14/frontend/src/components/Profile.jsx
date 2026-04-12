import { useEffect, useState } from 'react'
import { fetchUserProfile } from '../api'
import { getStoredUser } from '../authStorage'

export default function Profile() {
  const user = getStoredUser()
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!user?.userId) {
        setLoading(false)
        return
      }
      setError('')
      setLoading(true)
      try {
        const data = await fetchUserProfile(user.userId)
        if (!cancelled) setProfile(data)
      } catch (e) {
        if (!cancelled) setError(e.message || 'Could not load profile')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [user?.userId])

  if (loading) {
    return (
      <div className="page">
        <h1>Profile</h1>
        <p className="muted">Loading your profile…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page">
        <h1>Profile</h1>
        <p className="error">{error}</p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Profile</h1>
      <p className="muted">Details loaded from the backend for your stored user id.</p>
      <dl className="profile-grid">
        <dt>User ID</dt>
        <dd>{profile?.id}</dd>
        <dt>Username</dt>
        <dd>{profile?.username}</dd>
        <dt>Email</dt>
        <dd>{profile?.email || '—'}</dd>
        <dt>Full name</dt>
        <dd>{profile?.fullName || '—'}</dd>
      </dl>
    </div>
  )
}
