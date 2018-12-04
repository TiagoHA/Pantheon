import * as React from 'react'
import styled from 'styled-components/native';
import Fab from '../../components/Fab';
import HeaderLaunch from '../../components/HeaderLaunch';
import { NavigationInjectedProps } from 'react-navigation';
import { SafeAreaView } from 'react-native';

const Wrapper = styled.ImageBackground.attrs({
  source: ({ theme }) => theme.images.background
})`
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`

const AlignAtBottom = styled.View`
  position: absolute;
  bottom: 30;
  right: 10;
`;

const Arrow = styled.Image.attrs({
  source: ({theme}) => theme.images.arrowIcon
})`
  width: 30;
  height: 30;
`

interface Props extends NavigationInjectedProps {}

const SignUp = (props:Props) => (
  <Wrapper>
    <SafeArea>
      <HeaderLaunch description="Hey create an account to continue on pantheon" title="Sign Up" backAction={() => props.navigation.goBack()} />
      <AlignAtBottom>
        <Fab icon={<Arrow />} />
      </AlignAtBottom>
    </SafeArea>
  </Wrapper>
);

export default SignUp