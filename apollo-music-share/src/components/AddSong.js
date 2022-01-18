import React from 'react'
import {TextField, InputAdornment, Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material/";
import {Link, AddBoxOutlined} from "@mui/icons-material/";

function AddSong() {
    const [dialog, setDialog] = React.useState(false)

    function handleCloseDialog() {
        setDialog(false)
    }

    return (
        <div>
            <Dialog
                open={dialog}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Edit Song</DialogTitle>
                <DialogContent>
                    <img src="http://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg"
                         alt='Song thumbnail'
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
                placeholder='Add Youtube or Soundcloud Url'
                fullWidth
                margin='normal'
                type='url'
                InputProps={{
                    startAdornment: (
                        <InputAdornment>
                            <Link/>
                        </InputAdornment>
                    )
                }}
            />
            <Button
                onClick={() => setDialog(true)}
                variant='contained' color='primary' endIcon={<AddBoxOutlined/>}
            >
            </Button>
        </div>
    )
}

export default AddSong