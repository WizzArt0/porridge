import React from 'react'
import Sidebar from './../Sidebar/Sidebar'
import Body from './../Body/Body'
import Footer from './../Footer/Footer'
// import './Player.css'
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import { useStateValue } from "./../../StateProvider";

function SearchPage({ spotify }) {

  const [{ token }, dispatch] = useStateValue();
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    let cancel = false;
    spotify.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if(image.height < smallest.height) return image
              return smallest 
            }, 
            track.album.images[0]
          )

          return{
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => cancel = true
  }, [search, token])

  return (
    <div className="search__page">
        <div className="search__input">
          <SearchIcon />
          <input
            placeholder="Search for Artists or Songs "
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            // chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div> */}
    </div>
  );
}

export default SearchPage