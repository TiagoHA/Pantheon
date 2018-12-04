import * as React from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

const ButtonWrapper = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`

interface Props extends TouchableOpacityProps {
  icon: React.ReactNode,
  isLoading?: boolean,
}

const Button = (props: Props) => {
  console.log('props', props);
  
  return (
    <ButtonWrapper
      {...props}
      disabled={props.isLoading || props.disabled}
      style={{
        shadowOpacity: 0.9,
        shadowColor: 'rgb(255,63,63)',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 15,
      }}
    >
      {props.isLoading ? <ActivityIndicator animating color="white" size="small" /> : props.icon}
    </ButtonWrapper>
  )
}

export default Button;