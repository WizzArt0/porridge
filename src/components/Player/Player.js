import React from 'react'
import Sidebar from './../Sidebar/Sidebar'
import Body from './../Body/Body'
import Footer from './../Footer/Footer'
import './Player.css'
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import SearchPage from "../Search/SearchPage"

function Player({ spotify }) {
  return (

    <div className="player">
      <div className="player__body">
      
          {/* <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes> */}
        
        <Body spotify={spotify} />
        <Sidebar />
      </div>
      <Footer spotify={spotify} />
    </div>

  );
}

export default Player