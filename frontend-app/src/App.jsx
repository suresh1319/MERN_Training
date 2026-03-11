import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Orders from './components/Orders';
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)
  function incremnt(){
    setCount(count+1)
  }

  return (
    <>
    <Header/>
    <Content/>
    <Login/>
    <Register/>
    <Orders/>
    <Cart/>
    <Footer/>
   </>
  )
}

export default App
