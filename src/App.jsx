import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard'
import ChatbotDashboard from './pages/ChatbotDashboard'
import ChartDashboard from './pages/ChartDashboard'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="chatbot" element={<ChatbotDashboard />} />
          <Route path="charts" element={<ChartDashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

