import React from 'react'
import "./Header.css";

export default function TrackSearchResult({ track }) {
  return (
    <div className='track'>
        <img src={track.albumUrl} style={{height: '64px', width: '64px'}} />
        <div className='track_info'>
            <div>{track.title}</div>
            <div>{track.artist}</div>
        </div>
    </div>
  )
}
