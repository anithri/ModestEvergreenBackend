import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3003/graphql',
  cache: new InMemoryCache()
})

export const GraphqlClient = ({ children }) => {

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

