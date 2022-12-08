import React from 'react'

import { Container, Label, StyledInput } from './Input.styles'

export interface InputProps {
  label: string
  value: string
  placeholder: string
  secureText: boolean
  onChangeText: (text: string) => void
}

/**
 * A stylized input for the application
 *
 * @param label           The label of the input
 * @param value           The value of the input
 * @param placeholder     The placeholder of the input
 * @param secureText      The boolean to show or hide the password
 * @param onChangeText    The function to be called when the input text is changes
 */

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, value, placeholder, secureText, onChangeText } = props

  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureText}
        keyboardType={'default'}
        testID="StyledInput/Input"
        onChangeText={onChangeText}
      />
    </Container>
  )
}

export { Input }