import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Modal from './components/common/Modal';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
      <div className="min-h-screen">
          <Routes>
              <Route path="/" element={<Modal/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </div>
  );
}

export default App;
