import React from 'react'
import {CircularProgress} from '@mui/material'

function SongList() {
    let loading = false

    const song = {
        title: 'lune',
        artist: 'moon',
        thumbnail: 'http://img.youtube.com/vi/--ZrUFsIgMk/0.jpg'
    }

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 50
            }}>
                <CircularProgress/>
            </div>
        )
    }

    return <div>{Array.from({length: 10}, () => song).map((song, i) => (
        <Song key={i} song={song}/>
    ))}</div>
}

function Song() {
    return <div>song</div>
}

export default SongList