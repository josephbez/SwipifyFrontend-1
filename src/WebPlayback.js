import React, { useState, useEffect } from 'react';
import './WebPlayback.css';

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

export default function WebPlayback(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);
    const [deviceId, setDeviceId] = useState(null);
    const [gotTracks, setGotTracks] = useState(false);
    console.log("Tracks", props.track_list);


    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Swipify',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });
            setPlayer(player);
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                setDeviceId(device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', (state => {

                if (!state) {
                    return;
                }
                setTrack(state.track_window.current_track);
                setPaused(state.paused);

                player.getCurrentState().then(state => {
                    (!state) ? setActive(false) : setActive(true)
                });

            }));
            player.connect();
        };
    }, [props.token]);

    // This function transfers active playback to the Spotify session in the browser
    useEffect(() => {
        async function transferPlayback() {
            await fetch('https://api.spotify.com/v1/me/player', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + props.token
                },
                body: JSON.stringify({
                    device_ids: [
                        deviceId
                    ],
                    play: true
                })
            });
        }
        if (deviceId) {
            transferPlayback();
        }
    }, [deviceId])

    useEffect(() => {
        const track_uris = props.track_list.map(track => track.uri);
        if (deviceId) {
            fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.token}`
                },
                body: JSON.stringify({
                    uris: track_uris,
                    offset: { position: 0 }
                })
            })
                .then(response => response.json())
                .then(data => console.log('Playing playlist:', data))
                .catch(error => console.error('Error playing playlist:', error));
        }
        setGotTracks(true);
        setTrack(props.track_list[0]);
    }, [deviceId, props.token]);

    if (!is_active || !gotTracks) {
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">
                        <b>Loading...</b>
                    </div>
                </div>
            </>)
    } else {
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">
                        <div className="playlist-name"> {props.playlist_name} </div>
                        <img src={current_track?.album?.images[0]?.url}
                            className="album-img" alt="" />
                        <div className="now-playing">
                            <div className="now-playing__name">{current_track?.name}</div>
                            <div className="now-playing__artist">
                                {current_track?.artists[0]?.name}
                            </div>
                            <button className="spotify-btn" onClick={() => {
                                player.previousTrack()
                            }} >
                                <div>
                                    Remove
                                </div>
                            </button>
                            <button className='spotify-btn'> <div> Undo</div> </button>
                            <button className="spotify-btn" onClick={() => {
                                player.togglePlay()
                            }} >
                                <div>
                                    {is_paused ? "PLAY" : "PAUSE"}
                                </div>
                            </button>

                            <button className="spotify-btn" onClick={() => {
                                player.nextTrack()
                            }} >
                                <div>
                                    Keep
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}