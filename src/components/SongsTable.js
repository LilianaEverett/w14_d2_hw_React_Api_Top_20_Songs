import React from 'react';

const SongsTable = ({songs}) => {

    const foundSongs = this.songs.map(song => {
        console.log(songs)
        return (
            <li>{song.name}</li>
        )
    })

    return (
        <div>
            <ul>{foundSongs}</ul>
        </div>
    )
}
    export default SongsTable;