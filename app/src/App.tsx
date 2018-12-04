import * as React from 'react'
import { AsyncStorage } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { createRouter } from './config/Router';
import Theme from './config/Theme';

export interface Props {}

const App = () => {
  const [ token, setToken ] = React.useState('');

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setToken(token || '');
  };

  React.useEffect(() => {
    getToken();
  }, [])

  const Router = createRouter(token);

  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App