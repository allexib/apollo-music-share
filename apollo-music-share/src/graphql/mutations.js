import {gql} from 'apollo-boost'

export const ADD_SONG = gql`
mutation addSong($title: String!, $artist: String!, $thumbnail: String!,
 $duration: Float!, $url: String!) {
  insert_songs(objects: {title: $title, thumbnail: $thumbnail, duration: 
  $duration, artist: $artist, url: $url}) {
    affected_rows
  }
}

`