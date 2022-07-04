import styled from "styled-components"

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const DateLabel = styled.time`
  font-size: 12px;
`

export const Title = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 2px;
  &:hover {
    text-decoration: underline;
  }
`
