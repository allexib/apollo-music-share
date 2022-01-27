import React from 'react'
import {Pause,Save,PlayArrow} from '@mui/icons-material';
import {
    CircularProgress, Card, CardMedia, CardContent,
    Typography, CardActions, IconButton
} from '@mui/material'
import {makeStyles} from '@mui/styles';
import {useSubscription} from '@apollo/react-hooks'
import {GET_SONGS} from "../graphql/subscriptions";
import {SongContext} from "../App";


function SongList() {
    /*let loading = false*/
    const {data, loading, error} = useSubscription(GET_SONGS)

    /*const song = {
        title: 'lune',
        artist: 'moon',
        thumbnail: 'https://avatars.githubusercontent.com/u/75475838?s=400&u=2b642fc87e14e3e2a1e5f77621a9c081e9c4f551&v=4'
    }*/

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
    if (error) return <div>error fetching songs</div>

    return (
        <div>
            {data.songs.map(song => (
                <Song key={song.id} song={song}/>
            ))}
        </div>
    )
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
    const {state} = React.useContext(SongContext)
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
                        {state.isPlaying ? <Pause/> : <PlayArrow/>}
                    </IconButton>
                    <IconButton size='small' color='secondary'>
                        <Save/>
                    </IconButton>
                </CardActions>
            </div>
        </div>
    </Card>
}

export default SongList