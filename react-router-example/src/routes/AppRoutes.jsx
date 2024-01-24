import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import AboutUs from '../pages/aboutUs/AboutUs'
import PageNotFound from '../pages/pageNotFound/PageNotFound'

function AppRoutes() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route> 
            <Route path ="*" element={<PageNotFound />}></Route>
         
        </Routes>
    </Router>
    
    </>
  )
}

export default AppRoutes