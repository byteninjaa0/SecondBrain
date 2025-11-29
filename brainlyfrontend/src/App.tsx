import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './components/icon/PlusIcon'
import { ShareIcon } from './components/icon/ShareIcon'
import { Card } from './components/card'
import { CreateContentModal } from './components/createContentModal'
import { Sidebar } from './components/Sidebar'
import { Signup } from './components/Signup'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Signin } from './components/Signin'




export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
    
    
  )

}