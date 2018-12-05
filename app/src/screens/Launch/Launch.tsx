import * as React from 'react'
import styled from 'styled-components/native'
import { NavigationInjectedProps } from 'react-navigation'
import Button from '../../components/Button'
import { Routes } from '../../config/Router'

const Wrapper = styled.ImageBackground.attrs({
  source: ({ theme }) => theme.images.background,
})`
  flex: 1;
  align-items: center;
`

const Pantheon = styled.Image.attrs({
  source: ({ theme }) => theme.images.logo,
})`
  width: 400;
  height: 400;
`

const AppName = styled.Text`
  font-size: 35;
  margin-top: -120;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

const AppDescription = styled.Text`
  font-size: 20;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`
const AlignAtBottom = styled.View`
  position: absolute;
  bottom: 30;
`

interface Props extends NavigationInjectedProps {}

const Launch = ({ navigation }: Props) => (
  <Wrapper>
    <Pantheon />
    <AppName>Pantheon</AppName>
    <AppDescription>A Events platform for meetups</AppDescription>
    <AlignAtBottom>
      <Button title="LOGIN" onPress={() => navigation.navigate(Routes.Login)} />
      <Button title="SIGN UP" onPress={() => navigation.navigate(Routes.SignUp)} />
    </AlignAtBottom>
  </Wrapper>
)

export default Launch
