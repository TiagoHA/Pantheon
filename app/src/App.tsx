import * as React from 'react'
import { AsyncStorage } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { createRouter } from './config/Router'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'

import Theme from './config/Theme'

const client = new ApolloClient({
  uri: 'https://ed5aa365.ngrok.io/graphql',
})

export interface Props {}

const App = () => {
  const [token, setToken] = React.useState('')

  const getToken = async () => {
    AsyncStorage.clear();
    const token = await AsyncStorage.getItem('token')

    setToken(token || '')
  }

  React.useEffect(() => {
    getToken()
  }, [])

  const Router = createRouter(token)

  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <ThemeProvider theme={Theme}>
          <Router />
        </ThemeProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
