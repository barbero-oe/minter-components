import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Slider, SliderProps} from '../../components/Slider'

export default {
    title: 'Slider',
    component: Slider,
    argTypes: {update: {action: 'updated'}},
} as Meta

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const SliderComponent = Template.bind({})
SliderComponent.args = {}
