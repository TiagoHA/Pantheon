import * as React from 'react'
import { TextInputProperties } from 'react-native'
import styled from 'styled-components/native'

const InputWrapper = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: 'grey',
})`
  background-color: white;
  align-items: center;
  font-size: 16;
  color: black;
  padding: 15px 20px;
  margin: 15px;
  border-radius: 100px;
  border: 1px ${({ theme }) => theme.colors.lightGrey};
`

interface InputProps extends TextInputProperties {}

const Input = (props: InputProps) => {
  return <InputWrapper {...props} />
}

export default Input
