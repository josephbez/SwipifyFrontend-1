import React from 'react';
import { useNavigate } from 'react-router-dom'
import Playlist from './Playlist'

export default function WelcomeScreen(){
    return (
        <>
            <div className="Title"><b>SWIPIFY</b></div>
            <div className="subheading">SELECT. SWIPE. SAVE.</div>
            <div className='playlist-grid'>
                <Playlist name={'first playlist'}/>
                <Playlist name={'second playlist'}/>
                <Playlist name={'third playlist'}/>
                <Playlist name={'third playlist'}/>
                <Playlist name={'third playlist'}/>
                <Playlist name={'third playlist'}/>
                <Playlist name={'third playlist'}/>
                <Playlist name={'third playlist'}/>
                <Playlist name={'third playlist'}/>
                <Playlist name={'third playlist'}/>
            </div>
        </>
    )
}
