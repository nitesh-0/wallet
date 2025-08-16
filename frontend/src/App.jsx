import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Send } from './pages/Send'
import { PrivateRouter } from './components/PrivateRouter'
import { Landing } from './pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        
        <Route path="/dashboard" element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        } />
        
        <Route path="/send" element={
          <PrivateRouter>
            <Send />
          </PrivateRouter>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
