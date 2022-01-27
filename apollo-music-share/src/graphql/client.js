import ApolloClient from 'apollo-client'
import {WebSocketLink} from 'apollo-link-ws'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {gql} from "apollo-boost";

const headers = {"x-hasura-admin-secret": "aoT13ThzBA7qKPb5dyivNl0BXe4K6xoqY73sqAzn3RlUEIZX59om3lBMaP1RC0N7"};


const client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'wss://close-fly-96.hasura.app/v1/graphql',
        options: {
            reconnect: true,
            connectionParams: {
                headers,
            },
        }
    }),
    cache: new InMemoryCache(),
    typeDefs: gql`
    type Song{
    id:uuid!
    title:String!
    artist:String!
    thumbnail: String!
    duration: Float!
    url: String!
    }
    
    input SongInput {    
    id:uuid!
    title:String!
    artist:String!
    thumbnail: String!
    duration: Float!
    url: String!
    }
    
    type Query{
    queue:[Song]!
    }
    
    type Mutation {
    addOrRemoveFromQueue(input:SongInput!):[Song]!
    }
    `
})

const data = {
    queue: []
}

client.writeData({data})

export default client

/*
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://close-fly-96.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'aoT13ThzBA7qKPb5dyivNl0BXe4K6xoqY73sqAzn3RlUEIZX59om3lBMaP1RC0N7'
    }
})

export default client*/
