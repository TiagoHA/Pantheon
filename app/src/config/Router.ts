import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Home from '../screens/Home/Home'
import Launch from '../screens/Launch/Launch'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'

export const Routes = {
  Home: 'Home',
  Launch: 'Launch',
  Login: 'Login',
  SignUp: 'SignUp',
  Logged: 'Logged',
  NonLogged: 'NonLogged',
}

const Logged = createStackNavigator(
  {
    [Routes.Home]: Home,
  },
  {
    initialRouteName: Routes.Home,
    headerMode: 'none',
  },
)

const NonLogged = createStackNavigator(
  {
    [Routes.Launch]: Launch,
    [Routes.Login]: Login,
    [Routes.SignUp]: SignUp,
  },
  {
    initialRouteName: Routes.Launch,
    headerMode: 'none',
  },
)

export const createRouter = (token: string) =>
  createAppContainer(
    createSwitchNavigator(
      {
        [Routes.Logged]: Logged,
        [Routes.NonLogged]: NonLogged,
      },
      {
        initialRouteName: token ? Routes.Logged : Routes.NonLogged,
      },
    ),
  )
