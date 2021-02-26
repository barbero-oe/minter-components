import React, {useState} from 'react'
import styled from '@emotion/styled'

export const ComboBox: React.FC<ComboProps> = ({options, onChange}) => {
    const [current, setCurrent] = useState<string>()
    const select = (option: Option) => {
        setCurrent(option.display)
        onChange(option.value)
    }
    return (
        <CustomSelect role="combobox">
            <Input readOnly={true}
                   onChange={() => ({})}
                   value={current}
                   placeholder="Select an item"/>
            <Options options={options} onChange={select}/>
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

  &:focus-within {
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

const Options: React.FC<OptionsProps> = ({options, onChange}) => {
    const [focused, setFocused] = useState('')
    return (
        <OptionList role="listbox">{options.map((option) =>
            <Item focused={option.value === focused}
                  onMouseEnter={() => setFocused(option.value)}
                  onClick={() => onChange(option)}
                  key={option.value}
                  tabIndex={-1}
                  role="option">{option.display}</Item>)}
        </OptionList>)
}

interface OptionsProps {
    options: Option[]
    onChange: (value: Option) => void
}

const OptionList = styled.ul`
  display: block;
  padding: 0.3em 0;
  margin: 0.5em 0;
  list-style: none;
  background: #555555;
  border-radius: 0.3em;
`

const Item = styled.li<ItemProps>`
  padding: 0.5em 1ch;
  margin: 0;
  background: ${p => p.focused ? '#333333' : 'inherit'};
`

interface ItemProps {
    focused: boolean
}

