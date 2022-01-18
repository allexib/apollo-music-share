import React from 'react'
import QueuedSongList from "./QueuedSongList";
import {
    Card, CardContent, Typography, IconButton, Slider, CardMedia
} from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 15px'
    },
    content: {
        flex: '1 0 auto'
    },
    thumbnail: {
        width: 150
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    playIcon: {
        height: 38,
        width: 38
    }
}))

function SongPlayer() {
    const classes = useStyles()

    return (
        <>
            <Card variant='outlined' className={classes.container}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant='h5' component='h3'>
                            Title
                        </Typography>
                        <Typography variant='subtitle1' component='p' color='textSecondary'>
                            Artist
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton>
                            <SkipPreviousIcon/>
                        </IconButton>
                        <IconButton>
                            <PlayArrowIcon className={classes.playIcon}/>
                        </IconButton>
                        <IconButton>
                            <SkipNextIcon/>
                        </IconButton>
                        <Typography variant='subtitle1' component='p' color='textSecondary'>
                            00:01:22
                        </Typography>
                    </div>
                    <Slider
                        type='range'
                        min={0}
                        max={1}
                        step={0.01}
                    />
                </div>
                <CardMedia className={classes.thumbnail}
                    image='https://avatars.githubusercontent.com/u/75475838?s=400&u=2b642fc87e14e3e2a1e5f77621a9c081e9c4f551&v=4'
                />
            </Card>
            <QueuedSongList/>
        </>
    )
}

export default SongPlayer