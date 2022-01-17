import React from 'react'
import {Grid} from '@mui/material';
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";


function App() {
    return (
        <>
            <Header/>
            <Grid container spacing={3}>
                <Grid item>
                    <AddSong/>
                    <SongList/>
                </Grid>
                <Grid item>
                    <SongPlayer/>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
