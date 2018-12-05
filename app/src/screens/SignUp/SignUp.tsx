import * as React from 'react'
import styled from 'styled-components/native'
import { NavigationInjectedProps } from 'react-navigation'
import { SafeAreaView, Alert, Platform, ScrollView, Keyboard, AsyncStorage } from 'react-native'
import * as Apollo from 'react-apollo-hooks';
import gql from 'graphql-tag';

import { Routes } from '../../config/Router';
import Fab from '../../components/Fab'
import HeaderLaunch from '../../components/HeaderLaunch'
import Input from '../../components/Input'

const Wrapper = styled.ImageBackground.attrs({
  source: ({ theme }) => theme.images.background,
})`
  flex: 1;
`

const KeyboardWrapper = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
`

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`

const AlignAtBottom = styled.View`
  position: absolute;
  bottom: 30;
  right: 10;
`

const Arrow = styled.Image.attrs({
  source: ({ theme }) => theme.images.arrowIcon,
})`
  width: 30;
  height: 30;
`

const REGISTER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
    }
  }
`

interface Props extends NavigationInjectedProps {}

const SignUp = (props: Props) => {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const register = Apollo.useMutation(REGISTER);


  const validateAndSubmit = async () => {
    setLoading(true);
    Keyboard.dismiss();

    if (!email || !password || !name) {
      setLoading(false);
      return Alert.alert('Error', 'Please fill all the fields')
    }

    try {
      const res = await register({
        variables: {
          name,
          email,
          password,
        }
      });

      const token = res && res.data && res.data.register && res.data.register.token;

      await AsyncStorage.setItem('token', token);

      props.navigation.navigate(Routes.Home)
    } catch(err) {
      setLoading(false);

      const errorMessage = err.message.replace("GraphQL error: ", "")

      Alert.alert('Error', errorMessage);
    }

  }

  return (
    <Wrapper>
      <KeyboardWrapper>
        <SafeArea>
          <ScrollView>
            <HeaderLaunch
              description="Hey create an account to continue on pantheon"
              title="Sign Up"
              backAction={() => props.navigation.goBack()}
            />
            <Input value={name} onChangeText={name => setName(name)} placeholder="Name" />
            <Input value={email} onChangeText={email => setEmail(email)} placeholder="Email" />
            <Input
              value={password}
              onChangeText={password => setPassword(password)}
              placeholder="Password"
              secureTextEntry
            />
          </ScrollView>
          <AlignAtBottom>
            <Fab isLoading={loading} onPress={validateAndSubmit} icon={<Arrow />} />
          </AlignAtBottom>
        </SafeArea>
      </KeyboardWrapper>
    </Wrapper>
  )
}

export default SignUp
