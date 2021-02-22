import React, {useEffect, useRef, useState} from 'react'
import styled from '@emotion/styled'


export const Slider: React.FC<SliderProps> = ({position, onSelect, onMove}) => {
    const {component, isPressed, press} = useSliderMovement(onMove, onSelect)
    const percentage = position * 100 + '%'
    return (
        <Wrapper ref={component} onMouseDown={() => press(true)}>
            <ProgressBarBackground>
                <ProgressBar style={{width: percentage}} moving={isPressed}/>
                <Dot style={{left: `calc(${percentage} - 6px`}} moving={isPressed}/>
            </ProgressBarBackground>
        </Wrapper>)
}

export interface SliderProps {
    position: number
    onSelect: UpdatePosition
    onMove: UpdatePosition
}

type UpdatePosition = (position: number) => void

function useSliderMovement(onMove: (position: number) => void, onSelect: (position: number) => void) {
    const component = useRef<HTMLDivElement>(null)
    const [isPressed, press] = useState(false)
    useMouseMove(isPressed, component, onMove)
    useMouseUp(isPressed, press, component, onSelect)
    return {component, isPressed, press}
}

function useMouseMove(isPressed: boolean,
                      component: React.MutableRefObject<HTMLDivElement | null>,
                      onMove: UpdatePosition) {
    useEffect(() => {
        if (!isPressed) return
        const mousemove = (e: MouseEvent) => {
            updateUserPosition(e, component, onMove)
        }
        document.addEventListener('mousemove', mousemove)
        return () => document.removeEventListener('mousemove', mousemove)
    }, [isPressed, onMove])
}

function useMouseUp(isPressed: boolean,
                    press: (value: boolean) => void,
                    component: React.MutableRefObject<HTMLDivElement | null>,
                    onSelect: UpdatePosition) {
    useEffect(() => {
        if (!isPressed) return
        const mouseup = (e: MouseEvent) => {
            press(false)
            updateUserPosition(e, component, onSelect)
        }
        document.addEventListener('mouseup', mouseup)
        return () => document.removeEventListener('mouseup', mouseup)
    }, [isPressed, onSelect])
}


function updateUserPosition(e: MouseEvent,
                            component: React.MutableRefObject<HTMLDivElement | null>,
                            update: UpdatePosition) {
    const comp = component.current
    if (comp === null) return
    const rect = comp.getBoundingClientRect()
    update(calculatePosition(e.clientX, rect))
}

function calculatePosition(clientX: number, dimensions: DOMRect): number {
    const position = (clientX - dimensions.x) / dimensions.width
    const maxBound = Math.min(1, position)
    return Math.max(0, maxBound)
}

const Wrapper = styled.div`
  height: 24px;

  &:hover > div > div {
    border: 2px solid var(--highlight);
    background: var(--highlight);
  }

  &:hover > div > span {
    visibility: visible;
  }

  &:active > div > span {
    box-shadow: 1px 1px 3px 0 var(--third) inset;
  }
`

const ProgressBarBackground = styled.div`
  border: 2px solid var(--third);
  border-radius: 2px;
  background: var(--third);
  position: relative;
  top: calc(50% - 2px);
`

const ProgressBar = styled.div<{ moving: boolean }>`
  border: 2px solid ${({moving}) => moving ? 'var(--highlight)' : 'var(--second)'};
  border-radius: 2px;
  background: ${({moving}) => moving ? 'var(--highlight)' : 'var(--second)'};
  position: absolute;
  top: -2px;
  left: -2px;
`

const Dot = styled.span<{ moving: boolean }>`
  border: 3px solid var(--main);
  border-radius: 6px;
  display: inline-block;
  position: absolute;
  top: -6px;
  visibility: ${({moving}) => moving ? 'visible' : 'hidden'};
  width: 6px;
  height: 6px;
  background: var(--main);
  box-shadow: ${({moving}) => moving ? '1px 1px 3px 0px var(--third) inset' : 'unset'};
`