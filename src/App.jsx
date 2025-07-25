import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
    </Routes>
  )
}

export default App

