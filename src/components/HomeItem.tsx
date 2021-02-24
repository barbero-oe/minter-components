import {MenuItem, MenuItemProps} from './MenuItem'
import React from 'react'
import {Selectable} from './Selectable'

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

export const Shuffle: React.FC = () =>
    <svg xmlns="http://www.w3.org/2000/svg"
         fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"
         clipRule="evenodd" viewBox="0 0 31 25">
        <g stroke="currentColor" strokeWidth="2">
            <path fill="none" d="M1.2 20.2C11.6 19.9 12.9 5.2 23 5"/>
            <path d="M23.6 1.1v7.6L29.4 5l-5.8-3.8z"/>
            <path fill="none" d="M1 4.3c3.2 0 5.9 1.9 7.8 3.9M16 16.5c2.1 2 3.5 2.7 7 2.8"/>
            <path d="M24 15.5v7.6l5.8-3.8-5.8-3.8z"/>
        </g>
    </svg>

export const Previous: React.FC = () =>
    <svg xmlns="http://www.w3.org/2000/svg"
         fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"
         clipRule="evenodd">
        <g stroke="currentColor" strokeWidth="2">
            <path d="M20.7 22.5V1L4 11.5l16.7 11z"/>
            <path d="M5.1 22.6H1V1h4.2v21.6z"/>
        </g>
    </svg>

export const Next: React.FC = () =>
    <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
         strokeLinecap="round" strokeLinejoin="round"
         clipRule="evenodd" viewBox="0 0 22 24">
        <g stroke="currentColor" strokeWidth="2">
            <path d="M1 22.5V1l16.7 10.5L1 22.5z"/>
            <path d="M16.6 22.6h4V1h-4v21.6z"/>
        </g>
    </svg>
