import React from 'react'
import {
    Card, CardContent, Typography, IconButton, Slider, CardMedia, Avatar
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function QueuedSongList() {
    const song = {
        title: 'lune',
        artist: 'moon',
        thumbnail: 'https://avatars.githubusercontent.com/u/75475838?s=400&u=2b642fc87e14e3e2a1e5f77621a9c081e9c4f551&v=4'
    }

    return (
        <div style={{margin: '10px 0'}}>
            <Typography color='textSecondary' variant='button'>
                QUEUE (5)
            </Typography>
            {Array.from({length: 5}, () => song).map((song, i) => (
                <QueuedSong key={i} song={song}/>
            ))}
        </div>
    )
}

function QueuedSong({song}) {
    const {thumbnail, artist, title} = song

    return (
        <div>
            <Avatar src={thumbnail} alt='song thumbnail'/>
            <div>
                <Typography variant='subtitle2'>
                    {title}
                </Typography>
                <Typography color='textSecondary' variant='body2'>
                    {artist}
                </Typography>
            </div>
            <IconButton>
                <DeleteIcon color='error'/>
            </IconButton>
        </div>
    )
}

export default QueuedSongList