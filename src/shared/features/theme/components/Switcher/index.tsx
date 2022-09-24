import { useId, useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import { useTheme } from "../../Context"

export const Switcher = () => {
  const id = useId()

  const { isDark, onToggle } = useTheme()

  const [isAnimated, setIsAnimated] = useState(false)
  const clicked = useRef(false)

  const onChange = () => {
    if (clicked.current) {
      return
    }
    clicked.current = true
    setIsAnimated(true)
    onToggle()

    const interval = setInterval(() => {
      clicked.current = false
      clearInterval(interval)
      setIsAnimated(false)
    }, 1000)
  }

  return (
    <Wrap htmlFor={id}>
      <Cable $animated={isAnimated} />
      <Blub type="checkbox" id={id} checked={isDark} onChange={onChange} />
    </Wrap>
  )
}

const pull = keyframes`
  0% {
    height: 30px;
  }
  50% {
    height: 60px;
  }
  100% {
    height: 30px;
  }
`

const Wrap = styled.label`
  cursor: pointer;
  width: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cable = styled.span<{ $animated: boolean }>`
  display: block;
  width: 1px;
  height: 30px;
  background-color: ${(props) => props.theme.color};

  ${(props) =>
    props.$animated &&
    css`
      animation: ${pull} 0.5s linear;
    `}
`

const Blub = styled.input`
  box-sizing: content-box;
  width: 12px;
  height: 12px;
  border: 1px solid #a6a7ab;
  border-radius: 100%;
  background-color: #eee;
  margin-bottom: 6px;
  &:checked {
    background-color: #909296;
    border-color: #f1f3f5;
  }
`
