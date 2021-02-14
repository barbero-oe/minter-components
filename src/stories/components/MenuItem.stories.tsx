import React from 'react'
import {Meta, Story} from '@storybook/react'
import {MenuItem, MenuItemProps} from '../../components/MenuItem'
import {HomeIcon} from '../../components/HomeItem'

export default {
    title: 'MenuItem',
    component: MenuItem,
} as Meta

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />

export const HomeSelected = Template.bind({})
HomeSelected.args = {icon: HomeIcon, text: 'Home', selected: true}

export const ItemSelected = Template.bind({})
ItemSelected.args = {text: 'Made For You', selected: true}
