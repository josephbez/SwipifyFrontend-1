import React from 'react';
import Home from './Home'
import Swipescreen from './Swipescreen'
import {Routes, Route} from 'react-router-dom'

export default function App(){
    return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/swipe' element={<Swipescreen/>}/>
        </Routes>
    </div>
    )
}