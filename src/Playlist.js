import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WebPlayback from './WebPlayback'


export default function Playlist( {name, images} ){ //more params later, params passed by backend

    const navigate = useNavigate();
    const albumCoverUrl = images && images.length > 0 ? images[0].url : 'https://i.kym-cdn.com/photos/images/newsfeed/002/735/674/45f.jpg';
    return (
        <div className='playlist-card' onClick={() => navigate('/swipe')}>
            <div className='album-cover' style = {{ backgroundImage: `url(${albumCoverUrl})` }}></div>
            <div className='name'>{name}</div>
        </div>
    )
}
