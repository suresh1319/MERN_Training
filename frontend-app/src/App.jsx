import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Orders from './components/Orders'
import Logout from './components/Logout'
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  function incremnt(){
    setCount(count + 1)
  }

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App