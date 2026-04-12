import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import RequireAuth from './components/RequireAuth'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
