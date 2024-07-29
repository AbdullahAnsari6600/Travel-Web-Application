import React from 'react'
import './app.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>

    </div>
  )
}

export default App
