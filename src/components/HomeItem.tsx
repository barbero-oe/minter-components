import {MenuItem, MenuItemProps, Selectable} from './MenuItem'
import React from 'react'

export const HomeItem: React.FC<Omit<MenuItemProps, 'icon'>> = (props) =>
    <MenuItem {...props} icon={HomeIcon}/>

export const HomeIcon: React.FC<Selectable> = ({selected}) =>
    selected ?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M448 464H299V314h-86v150H64V148L256 37l192 111v316z"/>
        </svg> :
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M256 61L84 166v277h109V294h127v149h108V165L256 61zm0-25l192 113v315H300V315h-87v149H64V150L256 36z"/>
        </svg>
