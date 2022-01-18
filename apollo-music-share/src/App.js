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
                <Grid style={{
                    paddingTop: 80
                }} item xs={12} md={7}>
                    <AddSong/>
                    <SongList/>
                </Grid>
                <Grid style={{
                    position: 'fixed',
                    width: '100%',
                    right: 0,
                    top: 70
                }} item xs={12} md={5}>
                    <SongPlayer/>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
