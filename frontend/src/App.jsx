import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Send } from './pages/Send'
import { PrivateRouter } from './components/PrivateRouter'
import { Landing } from './pages/Landing'


function App() {

  return (
    <div >
      <BrowserRouter>
      <PrivateRouter/>
      <Routes>
        <Route path = "/signup" element = {<Signup/>} />
        <Route path = "/signin" element = {<Signin/>} />
        <Route path = "/dashboard" element = { <PrivateRouter><Dashboard/></PrivateRouter>  } />
        <Route path="/send" element = { <PrivateRouter><Send/></PrivateRouter> } />
        <Route path="/" element = {<Landing/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
