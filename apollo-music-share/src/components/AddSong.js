import React from 'react'
import {
    TextField, InputAdornment, Button, Dialog,
    DialogTitle, DialogContent, DialogActions
} from "@mui/material/";
import {makeStyles} from '@mui/styles'
import {Link, AddBoxOutlined} from "@mui/icons-material/";
import SoundCloudPlayer from 'react-player/lib/players/SoundCloud'
import YotubePlayer from 'react-player/lib/players/YouTube'

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

    React.useEffect(() => {
        const isPlayable = SoundCloudPlayer.canPlay(url) || YotubePlayer.canPlay(url)
        setPlayable(isPlayable)
    }, [url])

    function handleCloseDialog() {
        setDialog(false)
    }

    return (
        <div className={classes.container}>
            <Dialog
                className={classes.dialog}
                open={dialog}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Edit Song</DialogTitle>
                <DialogContent>
                    <img src="http://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg"
                         alt='Song thumbnail'
                         className={classes.thumbnail}
                    />
                    <TextField
                        margin='dense'
                        name='title'
                        label='Title'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        name='artist'
                        label='Artist'
                        fullWidth
                    />
                    <TextField
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
        </div>
    )
}

export default AddSong