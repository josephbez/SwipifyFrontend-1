import React from 'react'

export default function Swipescreen(){
    const albumCoverUrl = 'https://i.kym-cdn.com/photos/images/newsfeed/002/735/674/45f.jpg'; // Replace with your actual URL

    const playlistObj = { // This will be obtained from the backend
        tracks: ['t1', 't2', 't3', 't4', 't5', 't6'],
      };
  
      return (
        <div className="screen-container">
          <div className="tracklist-container">
            <div className='Deleted-tracks'>Deleted Tracks</div>
            {playlistObj.tracks.map((track, index) => (
              <div key={index} className="track">{track}</div>
            ))}
          </div>
          <div className="swipe-screen">
            <h2 className="playlist-title">Lam's Super Cool Playlist</h2>
            <img src={albumCoverUrl} alt="Album Cover" className="album-cover-placeholder"/>
            <div className="buttons-container">
              <button className="button decline">Remove</button>
              <button className="button undo">Undo</button>
              <button className="button add">Add</button>
              <button className="button skip">Next Song</button>
            </div>
          </div>
        </div>
      );
}

