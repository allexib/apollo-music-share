import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://close-fly-96.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'aoT13ThzBA7qKPb5dyivNl0BXe4K6xoqY73sqAzn3RlUEIZX59om3lBMaP1RC0N7'
    }
})

export default client