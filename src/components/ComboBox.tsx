import React from 'react'
import styled from '@emotion/styled'

export const ComboBox: React.FC<ComboProps> = () => {
    return (
        <CustomSelect/>)
}

export interface ComboProps {

}

export const CustomSelect = styled.div`
  color: #b3b3b3;
  border: 1px solid;
  border-radius: 0.3em;
  height: 2em;
  width: 25ch;
  position: relative;
  
  &::before {
    content: 'Select an item';
    position: absolute;
    left: 1ch;
    top: 50%;
    transform: translateY(-50%);
    font-weight: lighter;
  }
  
  &::after {
    content: '\f0d7';
    color: white;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Free", serif;
    font-weight: 900;
    
    position: absolute;
    right: 1.5ch;
    top: 50%;
    transform: translateY(-50%);
  }
`