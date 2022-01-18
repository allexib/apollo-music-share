import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import {
    CircularProgress, Card, CardMedia, CardContent,
    Typography, CardActions, IconButton
} from '@mui/material'


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

function Song({song}) {
    const {title, artist, thumbnail} = song

    return <Card>
        <div>
            <CardMedia image={thumbnail}/>
            <div>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {title}
                    </Typography>
                    <Typography variant='body1' component='p' color='textSecondary'>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton size='small' color='primary'>
                        <PlayArrowIcon/>
                    </IconButton>
                    <IconButton size='small' color='secondary'>
                        <SaveIcon/>
                    </IconButton>
                </CardActions>
            </div>
        </div>
    </Card>
}

export default SongList