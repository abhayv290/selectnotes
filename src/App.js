import React from 'react'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import NoteState from './Context/notes/Notestate'
export default function App() {
  return (
    <>



      
<NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />



          </Routes>


        </BrowserRouter>
    
</NoteState>

    </>
  )
}
