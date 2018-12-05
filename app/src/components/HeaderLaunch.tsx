import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex-direction: column;
  background-color: transparent;
  padding-horizontal: 20;
  padding-top: 10;
  padding-bottom: 10;
`

const BackButton = styled.TouchableOpacity`
  width: 27;
  height: 27;
  align-items: center;
  justify-content: center;
  margin-bottom: 15;
`

const Title = styled.Text`
  font-size: 40;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 20;
`

const Description = styled.Text`
  font-size: 20;
  color: ${({ theme }) => theme.colors.grey};
  text-align: left;
  margin-left: 20;
  width: 80%;
`

const Arrow = styled.Image.attrs({
  source: ({ theme }) => theme.images.arrowIcon,
})`
  width: 40;
  height: 40;
  tint-color: ${({ theme }) => theme.colors.primary};
  transform: rotate(180deg);
`

interface HeaderProps {
  title: string
  backAction: () => void
  description: string
}

const HeaderLogin = ({ title, backAction, description }: HeaderProps) => (
  <Wrapper>
    <BackButton onPress={backAction}>
      <Arrow />
    </BackButton>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
)

export default HeaderLogin
