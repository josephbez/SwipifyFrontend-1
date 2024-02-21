import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WebPlayback from './WebPlayback'


export default function Playlist({ name, token }) { //more params later, params passed by backend

    const navigate = useNavigate();

    return (
        <button className="playlist-button">
            <li>
                <button onClick={() => { navigate('/swipe') }} className="playlist-button">
                    {name}
                </button>
            </li>

        </button>
    )
}

