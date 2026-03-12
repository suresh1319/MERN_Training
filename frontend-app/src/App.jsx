import { useState,createContext} from 'react'
import {BrowserRouter} from 'react-router-dom';
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
export const AppContext = createContext()

function App() {
  const [user, setUser] = useState({})

  return (
    <>
    <AppContext.Provider value={{user,setUser}}>
    <BrowserRouter>
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
      </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App