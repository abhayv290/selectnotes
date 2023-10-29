import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/Notestate';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar showAlert={showAlert} />

          <div style={{ height: '20px', marginBottom: '20px' }}>
            <Alert alert={alert} />
          </div>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/About" element={<About showAlert={showAlert} />} />
            <Route path="/Login" element={<Login showAlert={showAlert} />} />
            <Route path="/Signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}
