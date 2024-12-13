import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Modal from './components/common/Modal';
import Home from './pages/Home';
import Login from './pages/Login';
import Rank from './pages/Rank';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/rank" element={<Rank />} />
            </Routes>
        </>
    );
}

export default App;
