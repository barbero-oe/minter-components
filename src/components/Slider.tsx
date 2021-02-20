import React, {useEffect, useRef, useState} from 'react'
import styled from '@emotion/styled'

export const Slider: React.FC<SliderProps> = ({position, update}) => {
    const [isMoving, setMoving] = useState(false)
    const component = useRef<HTMLDivElement>(null)
    const [currentPosition, setCurrentPosition] = useState(0)
    const percentage = (isMoving ? currentPosition : position) * 100 + '%'
    useMouseToMove(isMoving, component, setCurrentPosition, setMoving, update)
    return (
        <Wrapper ref={component}
                 onClick={handleClick(update)}
                 onMouseDown={() => setMoving(true)}>
            <ProgressBarBackground>
                <ProgressBar style={{width: percentage}} moving={isMoving}/>
                <Dot style={{left: `calc(${percentage} - 6px`}} moving={isMoving}/>
            </ProgressBarBackground>
        </Wrapper>)
}

export interface SliderProps {
    position: number
    update: UpdatePosition
}

type UpdatePosition = (position: number) => void

function useMouseToMove(isMoving: boolean,
                        component: React.MutableRefObject<HTMLDivElement | null>,
                        setCurrentPosition: UpdatePosition,
                        setMoving: (value: boolean) => void,
                        update: UpdatePosition) {
    useEffect(() => {
        const mousemove = (e: MouseEvent) => {
            if (!isMoving) return
            updateUserPosition(e, component, setCurrentPosition)
        }
        const mouseup = (e: MouseEvent) => {
            if (!isMoving) return
            setMoving(false)
            updateUserPosition(e, component, update)
        }
        document.addEventListener('mousemove', mousemove)
        document.addEventListener('mouseup', mouseup)
        return () => {
            document.removeEventListener('mousemove', mousemove)
            document.removeEventListener('mouseup', mouseup)
        }
    }, [setCurrentPosition, component, isMoving, setMoving, update])
}

function updateUserPosition(e: MouseEvent,
                            component: React.MutableRefObject<HTMLDivElement | null>,
                            update: UpdatePosition) {
    const comp = component.current
    if (comp === null) return
    const rect = comp.getBoundingClientRect()
    update(calculatePosition(e.clientX, rect))
}

function handleClick(update: UpdatePosition): (e: React.MouseEvent<HTMLDivElement>) => void {
    return (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.button !== MouseButtons.Main) return
        const newPosition = calculatePosition(e.clientX, e.currentTarget.getBoundingClientRect())
        update(newPosition)
    }
}


function calculatePosition(clientX: number, dimensions: DOMRect): number {
    const position = (clientX - dimensions.x) / dimensions.width
    const maxBound = Math.min(1, position)
    return Math.max(0, maxBound)
}

enum MouseButtons {
    Main,
    Auxiliary,
    Secondary,
    Fourth,
    Fifth
}

const Wrapper = styled.div({
    height: '24px',
    '&:hover > div > div': {
        border: '2px solid var(--highlight)',
        background: 'var(--highlight)',
    },
    '&:hover > div > span': {
        visibility: 'visible',
    },
    '&:active > div > span': {
        boxShadow: '1px 1px 3px 0px var(--third) inset',
    },
})

const ProgressBarBackground = styled.div({
    border: '2px solid var(--third)',
    borderRadius: '2px',
    background: 'var(--third)',
    position: 'relative',
    top: 'calc(50% - 2px)',
})

const ProgressBar = styled.div<{ moving: boolean }>(({moving}) => ({
    border: moving ? '2px solid var(--highlight)' : '2px solid var(--second)',
    borderRadius: '2px',
    background: moving ? 'var(--highlight)' : 'var(--second)',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
}))

const Dot = styled.span<{ moving: boolean }>(({moving}) => ({
    border: '3px solid var(--main)',
    borderRadius: '6px',
    display: 'inline-block',
    position: 'absolute',
    top: '-6px',
    visibility: moving ? 'visible' : 'hidden',
    width: '6px',
    height: '6px',
    background: 'var(--main)',
    boxShadow: moving ? '1px 1px 3px 0px var(--third) inset' : 'unset',
}))