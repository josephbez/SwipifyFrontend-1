import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home(){
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

function Playlist( {name, images} ){ //more params later, params passed by backend

    const navigate = useNavigate();
    const albumCoverUrl = images && images.length > 0 ? images[0].url : 'https://i.kym-cdn.com/photos/images/newsfeed/002/735/674/45f.jpg';
    return (
        <div className='playlist-card' onClick={() => navigate('/swipe')}>
            <div className='album-cover' style = {{ backgroundImage: `url(${albumCoverUrl})` }}></div>
            <div className='name'>{name}</div>
        </div>
    )
}
