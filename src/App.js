import React from 'react'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import NoteState from './Context/notes/Notestate'
import Alert from './Components/Alert'
export default function App() {
  return (
    <>



      
<NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />



          </Routes>


        </BrowserRouter>
    
</NoteState>

    </>
  )
}
