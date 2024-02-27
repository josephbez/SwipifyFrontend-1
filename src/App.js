import React from 'react';
import Home from './Home'
import Swipescreen from './Swipescreen'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'


export default function App() {
    const [token, setToken] = useState('');

    useEffect(() => {

        async function getToken() {
            const response = await fetch('http://localhost:8000/auth/token');
            console.log(response);
            const json = await response.json();
            setToken(json.access_token);
        }

        getToken();

    }, []);

    return (
        <div className="App">
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/swipe' element={<Swipescreen token = {token}/>} />
            </Routes>
        </div>
    )
}
