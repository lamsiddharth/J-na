import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import {  Blogs } from './pages/Blogs'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} /> */}
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
