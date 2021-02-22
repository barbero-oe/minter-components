import React, {useCallback, useEffect, useState} from 'react'
import {Meta, Story} from '@storybook/react'
import {Slider, SliderProps} from '../../components/Slider'

export default {
    title: 'Slider',
    component: Slider,
    argTypes: {
        update: {action: 'updated'},
        move: {action: 'move'},
    },
} as Meta

const Template: Story<SliderProps> = (args) => {
    const [position, setPosition] = useState(args.position)
    const update = useCallback((e: number) => [args.onSelect, setPosition].map(update => update(e)), [args.onSelect])
    useEffect(() => {
        update(args.position)
    }, [args.position, update])

    const move = useCallback((e: number) => [args.onMove, setPosition].map(move => move(e)), [args.onMove])
    useEffect(() => {
        move(args.position)
    }, [move])

    return <Slider {...args} position={position} onSelect={update} onMove={move}/>
}

export const SliderComponent = Template.bind({})
SliderComponent.args = {}
