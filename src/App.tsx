import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/Navbar/Nav'
import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import TextEditor from './Pages/TextEditor/TextEditor'
import Dashboard from './Pages/Dashboard/Dashboard'
import UploadFile from './Pages/UploadFile'
import Signup from './Pages/Login/Signup'
function App() {
  

  return (
    <>
    <Nav />
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/editor" element={<TextEditor/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/converter' element={<UploadFile/>} />
     </Routes>
    </>
  )
}

export default App
