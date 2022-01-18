import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import {
    CircularProgress, Card, CardMedia, CardContent,
    Typography, CardActions, IconButton
} from '@mui/material'
import {makeStyles} from '@mui/styles';



function SongList() {
    let loading = false

    const song = {
        title: 'lune',
        artist: 'moon',
        thumbnail: 'https://avatars.githubusercontent.com/u/75475838?s=400&u=2b642fc87e14e3e2a1e5f77621a9c081e9c4f551&v=4'
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

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(3)
    },
    songInfoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    songInfo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    thumbnail: {
        objectFit: 'cover',
        width: 140,
        height: 140
    }
}))

function Song({song}) {
    const classes = useStyles()
    const {title, artist, thumbnail} = song

    return <Card className={classes.container}>
        <div className={classes.songInfoContainer}>
            <CardMedia image={thumbnail} className={classes.thumbnail}/>
            <div className={classes.songInfo}>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {title}
                    </Typography>
                    <Typography variant='body1' component='p' color='textSecondary'>
                        {artist}
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