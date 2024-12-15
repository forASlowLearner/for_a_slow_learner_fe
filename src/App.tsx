import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Rank from './pages/Rank';
import InfoQuestion from './pages/InfoQuestion';
import PreTestQuestion from './pages/PreTestQuestion';
import Quiz from './pages/Quiz';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/register-questions" element={<InfoQuestion />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/pre-test" element={<PreTestQuestion />} />
            </Routes>
        </>
    );
}

export default App;
