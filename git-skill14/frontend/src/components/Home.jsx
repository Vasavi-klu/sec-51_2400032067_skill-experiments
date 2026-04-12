import { getStoredUser } from '../authStorage'

export default function Home() {
  const user = getStoredUser()

  return (
    <div className="page">
      <h1>Home</h1>
      <p className="lead">
        You are signed in as <strong>{user?.username}</strong>.
      </p>
      <p className="muted">
        Open <strong>Profile</strong> to load your full account details from the
        server.
      </p>
    </div>
  )
}
