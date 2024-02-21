import React from 'react'

export default function Swipescreen(){
    return ( 
    <>
    <div className='Title'>Curate {playlistObj.name} below:</div>
    
    <div>
    <ul className="delete-list">
        <li>first</li><li>sec</li>
    </ul>
    <ul className='keep-list'>
        <li>first</li><li>sec</li>
    </ul>
    </div>

    <div className='center'>
        <button>reject song</button>
        <p>{playlistObj.tracks[0]}</p>
        <button>keep song</button>
    </div>
    </>
    )
}


let playlistObj = { //will be obtained from backend
    name: 'myplaylist',
    tracks: ['t1','t2','t3','t4','t5','t6'],
}