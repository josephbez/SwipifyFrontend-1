import React from 'react'
import WebPlayback from './WebPlayback'

export default function Swipescreen({token}) {
    return (
        <div>
            <WebPlayback token={token} />
        </div>
    )
}


let playlistObj = { //will be obtained from backend
    name: 'myplaylist',
    tracks: ['t1', 't2', 't3', 't4', 't5', 't6'],
}
