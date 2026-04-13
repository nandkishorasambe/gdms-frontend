import axios from 'axios'

// ─── AXIOS INSTANCE ───────────────────────────────────────────────────────────
// Base URL uses VITE env variable; falls back to localhost for development
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// ─── REQUEST INTERCEPTOR — attach JWT ─────────────────────────────────────────
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('gdms_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

// ─── RESPONSE INTERCEPTOR — handle 401 ────────────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('gdms_token')
      localStorage.removeItem('gdms_user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api

// ─── MOCK AUTH (replace with real API calls) ──────────────────────────────────
export const authAPI = {
  login: async (email, password, role) => {
    // Simulated delay to mimic real API
    await new Promise(r => setTimeout(r, 600))
    if (!email || !password) throw new Error('Invalid credentials')
    return {
      token: 'mock_jwt_' + btoa(email + role),
      user: { id: 'U-001', email, name: email.split('@')[0], role },
    }
  },
  register: async (data) => {
    await new Promise(r => setTimeout(r, 800))
    return {
      token: 'mock_jwt_' + btoa(data.email + data.role),
      user: { id: 'U-' + Date.now(), ...data },
    }
  },
}