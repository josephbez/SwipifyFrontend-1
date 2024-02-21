import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){

    return (
    <>
      <div className="Title">Welcome to Swipify</div>
      <div className="underTitle">Select a playlist and start swiping</div>
      <ul className='centered-list'>
        <Playlist name={'first playlist'}/>
        <Playlist name={'second playlist'}/>
        <Playlist name={'third playlist of lam'}/>
      </ul>
    </>
    )

}

function Playlist( {name} ){ //more params later, params passed by backend
    const navigate = useNavigate();
    return (
        <li>
            <button onClick={() => {navigate('/swipe')}} className = "playlist-button">
                {name}
            </button>
        </li>
    )
}
