const STORAGE_KEY = 'skill14_auth_user'

/**
 * Persists logged-in user (localStorage per assignment: localStorage or sessionStorage).
 */
export function getStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data && data.userId != null && data.username) {
      return { userId: String(data.userId), username: data.username }
    }
    return null
  } catch {
    return null
  }
}

export function setStoredUser(userId, username) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ userId, username })
  )
}

export function clearStoredUser() {
  localStorage.removeItem(STORAGE_KEY)
}
