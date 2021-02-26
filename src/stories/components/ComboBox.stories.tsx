import React from 'react'
import {Meta, Story} from '@storybook/react'
import {ComboBox, ComboProps} from '../../components/ComboBox'

export default {
    title: 'ComboBox',
    component: ComboBox,
    // argTypes: {
    //     onChange: {action: 'onChange'},
    // },
} as Meta

const Template: Story<ComboProps> = (args) => <ComboBox {...args} />

export const Simple = Template.bind({})
Simple.args = {
    options: [
        {value: 'usd', display: 'Dolar'},
        {value: 'arg', display: 'Peso'},
        {value: 'rub', display: 'Rublo'}],
}
