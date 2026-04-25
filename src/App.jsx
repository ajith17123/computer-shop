import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import {BrowserRouter,Router,Routes,HashRouter, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login';
import About from './components/About';
import Product from './components/Product';

function App () {
  useEffect (
    () => {
      AOS.init ({
        duration: 1200,
        once: false,
        easing: 'ease-in-out',
      })
    } , []
  );
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;