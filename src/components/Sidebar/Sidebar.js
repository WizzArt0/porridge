import React, { Component } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./../../spotify";
import { useStateValue } from "./../../StateProvider";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";

import SearchPage from "../Search/SearchPage"
import Body from "../Body/Body";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  // console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://uchenikspb.ru/kbase/wp-content/uploads/2020/10/wJAax2S50ZA.jpg"
        alt=""
      />
      <BrowserRouter>
        <Link to="/"><SidebarOption Icon={HomeIcon} option="Home" /> </Link>
        <Link to="/search"><SidebarOption Icon={SearchIcon} option="Search" /> </Link>
        <Link to="/library"><SidebarOption Icon={LibraryMusicIcon} option="Your Library" /> </Link>
      </BrowserRouter>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;