import React from 'react'
import styled from '@emotion/styled'

export const ComboBox: React.FC<ComboProps> = ({options}) => {
    return (
        <CustomSelect role="combobox">
            <Input readOnly={true} placeholder="Select an item"/>
            <Options options={options}/>
        </CustomSelect>)
}

export interface Option {
    value: string
    display: string
}

export interface ComboProps {
    options: Option[]
    onChange: (value: string) => void
}

export const CustomSelect = styled.label`
  color: #b3b3b3;
  display: block;
  border: 1px solid;
  border-radius: 0.3em;
  height: 2em;
  width: 25ch;
  position: relative;

  &:focus, &:focus-within {
    border: 1px solid #158def;
  }

  & ul {
    visibility: hidden;
  }

  &:focus-within ul {
    visibility: visible;
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

const Input = styled.input`
  color: inherit;
  border: none;
  height: 100%;
  width: 21ch;
  font-size: inherit;
  background: none;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 1ch;
`

const Options: React.FC<OptionsProps> = ({options}) =>
    <ul role="listbox">{options.map(({value, display}) =>
        <li key={value} role="option">{display}</li>)}
    </ul>


interface OptionsProps {
    options: Option[]
}