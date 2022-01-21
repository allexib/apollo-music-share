import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://close-fly-96.hasura.app/v1/graphql'
})

export default client