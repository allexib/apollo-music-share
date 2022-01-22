import React from 'react'
import {
    TextField, InputAdornment, Button, Dialog,
    DialogTitle, DialogContent, DialogActions
} from "@mui/material/";
import {makeStyles} from '@mui/styles'
import {Link, AddBoxOutlined} from "@mui/icons-material/";
import ReactPlayer from 'react-player'
import SoundCloudPlayer from 'react-player/lib/players/SoundCloud'
import YoutubePlayer from 'react-player/lib/players/YouTube'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    urlInput: {
        margin: theme.spacing(1)
    },
    addSongButton: {
        margin: theme.spacing(1)
    },
    dialog: {
        textAlign: 'center',
    },
    thumbnail: {
        width: '90%'
    }
}))

function AddSong() {
    const classes = useStyles()
    const [url, setUrl] = React.useState('')
    const [playable, setPlayable] = React.useState(false)
    const [dialog, setDialog] = React.useState(false)
    const [song, setSong] = React.useState({
        duration: 0,
        title: '',
        artist: '',
        thumbnail: ''
    })

    React.useEffect(() => {
        const isPlayable = SoundCloudPlayer.canPlay(url) || YoutubePlayer.canPlay(url)
        setPlayable(isPlayable)
    }, [url])

    function handleChangeSong(event) {
        const {name, value} = event.target
        setSong(prevSong => ({
            ...prevSong,
            [name]: value
        }))
    }

    function handleCloseDialog() {
        setDialog(false)
    }

    async function handleEditSong({player}) {
        const nestedPlayer = player.player.player
        let songData
        if (nestedPlayer.getVideoData) {
            songData = getYoutubeInfo(nestedPlayer)
        } else if (nestedPlayer.getCurrentSound) {
            songData = await getSoundcloudInfo(nestedPlayer)
        }
        setSong({...songData, url})
    }

    function getYoutubeInfo(player) {
        const duration = player.getDuration()
        const {title, video_id, author} = player.getVideoData()
        const thumbnail = `http://img.youtube.com/vi/${video_id}/0.jpg`
        return {
            duration,
            title,
            artist: author,
            thumbnail
        }
    }

    function getSoundcloudInfo(player) {
        return new Promise(resolve => {
            player.getCurrentSound(songData => {
                if (songData) {
                    resolve({
                        duration: Number(songData.duration / 1000),
                        title: songData.title,
                        artist: songData.user.username,
                        thumbnail: songData.artwork_url.replace('-large', '-t500x500')
                    })
                }
            })
        })

    }

    const {thumbnail, title, artist} = song
    return (
        <div className={classes.container}>
            <Dialog
                className={classes.dialog}
                open={dialog}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Edit Song</DialogTitle>
                <DialogContent>
                    <img src={thumbnail}
                         alt='Song thumbnail'
                         className={classes.thumbnail}
                    />
                    <TextField
                        value={title}
                        onChange={handleChangeSong}
                        margin='dense'
                        name='title'
                        label='Title'
                        fullWidth
                    />
                    <TextField
                        value={artist}
                        onChange={handleChangeSong}
                        margin='dense'
                        name='artist'
                        label='Artist'
                        fullWidth
                    />
                    <TextField
                        value={thumbnail}
                        onChange={handleChangeSong}
                        margin='dense'
                        name='thumbnail'
                        label='Thumbnail'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color='secondary'>Cancel</Button>
                    <Button variant='outlined' color='primary'>Add Song</Button>
                </DialogActions>
            </Dialog>
            <TextField
                className={classes.urlInput}
                onChange={event => setUrl(event.target.value)}
                value={url}
                placeholder='Add Youtube or Soundcloud Url'
                fullWidth
                margin='normal'
                type='url'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Link/>
                        </InputAdornment>
                    )
                }}
            />
            <Button
                disabled={!playable}
                className={classes.addSongButton}
                onClick={() => setDialog(true)}
                variant='contained' color='primary' endIcon={<AddBoxOutlined/>}
            >
                Add
            </Button>
            <ReactPlayer url={url} hidden onReady={handleEditSong}/>
        </div>
    )
}

export default AddSong