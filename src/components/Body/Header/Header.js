import React from "react";
import "./Header.css";
import { useStateValue } from "./../../../StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import TrackSearchResult from "./TrackSearchResult";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // console.log(searchResults);

  // useEffect(() => {
  //   if (!search) return setSearchResults([]);
  //   let cancel = false;
  //   spotify.searchTracks(search).then(res => {
  //     if (cancel) return
  //     setSearchResults(
  //       res.tracks.items.map(track => {
  //         const smallestAlbumImage = track.album.images.reduce(
  //           (smallest, image) => {
  //             if(image.height < smallest.height) return image
  //             return smallest 
  //           }, 
  //           track.album.images[0]
  //         )

  //         return{
  //           artist: track.artists[0].name,
  //           title: track.name,
  //           uri: track.uri,
  //           albumUrl: smallestAlbumImage.url,
  //         }
  //       })
  //     )
  //   })

  //   return () => cancel = true
  // }, [search, token])



  return (
    <div>
      <div className="header">
        {/* <div className="header__left">
          <SearchIcon />
          <input
            placeholder="Search for Artists or Songs "
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div> */}
        <div className="header__right">
          <Avatar alt={user?.display_name} src={user?.images[0].url} />
          <h4>{user?.display_name}</h4>
        </div>
      </div>
      {/* <div className="search__results">
        {searchResults.map(track => (
          <TrackSearchResult track={track} key={track.uri} />
        ))}
      </div> */}
    </div>
  );
}

export default Header;