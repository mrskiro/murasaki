import styled from "styled-components"

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const DateLabel = styled.time`
  font-size: ${(props) => props.theme.fontSizes.xs};
`

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: 2px;
  &:hover {
    text-decoration: underline;
  }
`
