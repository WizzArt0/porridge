import React from 'react'
import Sidebar from './../Sidebar/Sidebar'

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* <Body spotify={spotify} /> */}
      </div>
      {/* <Footer spotify={spotify} /> */}
    </div>
  );
}

export default Player