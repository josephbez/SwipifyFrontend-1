import React from 'react'
import { useEffect, useState } from 'react'
import WebPlayback from './WebPlayback'
import { useLocation } from 'react-router-dom'




export default function Swipescreen({token}){
    const albumCoverUrl = 'https://i.kym-cdn.com/photos/images/newsfeed/002/735/674/45f.jpg'; // Replace with your actual URL
    const {state} = useLocation();
    const { playlist_id, name } = state;
    const [tracks, setTracks] = useState([null]);
    const [tracksToRemove, setTracksToRemove] = useState([]);
    


    useEffect(() => {

        async function getTracks(playlist_id) {
            const response = await fetch('http://localhost:8000/tracks?' + new URLSearchParams({
                playlist_id: playlist_id,
            }));
            console.log(response);
            const json = await response.json();
            setTracks(json);
            console.log('HI')
            console.log(json);
        }

        console.log('checkpoint1')
        getTracks(playlist_id);

    }, []);
    

    let listItems = tracks.map((track) => track ? 
        <li key={track.track.id}>
            name: {track.track.name}, id: {track.track.id}, artist: {'' + track.track.artists.map((artist) => artist.name)}
            <img src={track.track.album.images[1].url}></img>
        </li>
        : null
    )

  
      return (
        <div className="screen-container">
          <div className="tracklist-container">
            {/* <div className='Deleted-tracks'>Deleted Tracks</div>
            {playlistObj.tracks.map((track, index) => (
            <div key={index} className="track">{track}</div>
            ))} */}
            <ul>
                {listItems}
            </ul>
          </div>
          <div className="swipe-screen">
            <h2 className="playlist-title">{name}</h2>
                {/* <WebPlayback token={token} /> */}
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

