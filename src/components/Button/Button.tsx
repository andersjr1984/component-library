import React, { type FC } from 'react'
import styled, { css } from 'styled-components'

import { type ButtonProps } from './Button.types'

const StyledButton = styled.button<ButtonProps>`
  ${({ primary = true }) => css`
      color: ${primary ? '#1b116e' : '#ffffff'};
      background-color: ${primary ? '#6bedb5' : '#1b116e'};
      &:hover {
        background-color: ${primary ? '#55bd90' : '#6bedb5'};
      }
    `
  }
  ${({ disabled = false }) => css`
      opacity: ${disabled ? 0.5 : 1};
    `
  }
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${props => props.size === 'small' ? '7px 25px 8px' : (props.size === 'medium' ? '9px 30px 11px' : '14px 30px 16px')};
  &:active {
      border: solid 2px #1b116e;
      padding: ${props => props.size === 'small' ? '5px 23px 6px' : (props.size === 'medium' ? '7px 28px 9px' : '12px 28px 14px')};
  }
`

const Button: FC<ButtonProps> = ({ size, primary, disabled, text, onClick, ...props }) => {
  return (
    <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton>
  )
}

export default Button
