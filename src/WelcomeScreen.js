import React from 'react';
import Playlist from './Playlist'

export default function WelcomeScreen({token}) {
    return (
    <>
      <div className="Title">Welcome to Swipify</div>
      <div className="underTitle">Select a playlist and start swiping</div>
      <ul className='centered-list'>
        <Playlist name={'first playlist'} token = {token}/>
        <Playlist name={'second playlist'} token = {token}/>
        <Playlist name={'third playlist'} token = {token}/>
      </ul>
    </>
    )
}
