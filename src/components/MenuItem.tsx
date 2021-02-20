import React from 'react'
import styled from '@emotion/styled'
import {Selectable} from './Selectable'

export const MenuItem: React.FC<MenuItemProps> =
    ({onClick, text, selected, icon}) =>
        <Item onClick={onClick} selected={selected}>
            {icon ? <Icon>{icon?.({selected})}</Icon> : <></>}
            <Name>{text}</Name>
        </Item>

export interface MenuItemProps {
    onClick: () => void,
    text: string
    selected: boolean
    icon?: React.FC<Selectable>
}

const Item = styled.a<Selectable>(({selected}) => ({
    borderLeft: '4px solid ' + (selected ? 'var(--highlight)' : 'transparent'),
    color: selected ? 'var(--main)' : 'var(--second)',
    paddingLeft: '1em',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'default',
    '&:hover': {
        color: 'var(--main)',
    },
}))

const Icon = styled.div({
    width: '1.5em',
    height: '1.5em',
    paddingRight: '1em',
})

const Name = styled.span({
    fontWeight: 500,
    fontSize: '0.8rem',
})
