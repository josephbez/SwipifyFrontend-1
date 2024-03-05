import React from 'react'
import { useEffect, useState } from 'react'
import WebPlayback from './WebPlayback'
import { useLocation } from 'react-router-dom'




export default function Swipescreen({ token }) {
    const { state } = useLocation();
    const { playlist_id, name } = state;
    const [tracks, setTracks] = useState([null]);
    const [tracksToRemove, setTracksToRemove] = useState([]);
    const [loading, setLoading] = useState(true);
    const [trackCounter, setTrackCounter] = useState(0);

    useEffect(() => {
        async function getTracks(playlist_id) {
            const response = await fetch('http://localhost:8000/tracks?' + new URLSearchParams({
                playlist_id: playlist_id,
            }));
            const json = await response.json();
            console.log("Tracks: ", json);
            setTracks(json);
            setLoading(false);
        }
        getTracks(playlist_id);

    }, []);
    console.log("Tracks: ", tracks);
    if (loading) {
        return <div>Loading...</div>;
    }

    const listTracks = tracks.map((track) => track ?
        {
            name: track.track.name,
            id: track.track.id,
            artist: '' + track.track.artists.map((artist) => artist.name),
        }
        : null);
    let listItems = tracks.map((track) => track ?
        <li key={track.track.id}>
            name: {track.track.name}, id: {track.track.id}, artist: {'' + track.track.artists.map((artist) => artist.name)}
        </li>
        : null
    )


    return (
        <div className="screen-container">
            <div className="tracklist-container">
                <select>
                    {listTracks.map((item) => <option>{item.name}</option>)}
                </select>
            </div>
            <div className="swipe-screen">
                {<WebPlayback token={token} track_list={tracks.map(item => item.track)} playlist_name= {name}/>}
            </div>
        </div>
    );
}

