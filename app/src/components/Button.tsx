import * as React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

const ButtonWrapper = styled.TouchableOpacity`
  padding: 18px 40px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`

interface Props extends TouchableOpacityProps {
  title: string
}

const Button = (props: Props) => {
  return (
    <ButtonWrapper
      {...props}
      style={{
        shadowOpacity: 0.9,
        shadowColor: 'rgb(255,63,63)',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 10,
      }}
    >
      <ButtonText>{props.title}</ButtonText>
    </ButtonWrapper>
  )
}

export default Button;