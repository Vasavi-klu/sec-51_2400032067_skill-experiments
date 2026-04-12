const base =
  import.meta.env.VITE_API_BASE?.replace(/\/$/, '') ?? ''

async function parseError(res) {
  try {
    const text = await res.text()
    if (!text) return res.statusText
    try {
      const j = JSON.parse(text)
      return j.message || j.error || text
    } catch {
      return text
    }
  } catch {
    return res.statusText
  }
}

export async function registerUser(payload) {
  const res = await fetch(`${base}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(await parseError(res))
}

export async function loginUser(payload) {
  const res = await fetch(`${base}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(await parseError(res))
  return res.json()
}

export async function fetchUserProfile(userId) {
  const res = await fetch(`${base}/api/users/${encodeURIComponent(userId)}`)
  if (!res.ok) throw new Error(await parseError(res))
  return res.json()
}
