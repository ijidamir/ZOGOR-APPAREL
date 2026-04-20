import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LogInSignUp from './pages/LogInSignUp'
import Cart from './pages/Cart'


const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to="/shop" replace/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="Men" name="Men's Products" desc="Discover timeless style and modern essentiala tailored
        for the confident man." />}/>
        <Route path='/women' element={<ShopCategory category="Women" name="Women's Products" desc="Step into elegance with our curated collection for women who love style and expression. " />}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/login' element={<LogInSignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>

      </Router>


<Footer/>
    </div>
  )
}

export default App
