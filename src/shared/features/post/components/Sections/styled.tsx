import styled, { css } from "styled-components"

export const Wrap = styled.div``

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Li = styled.li<{ $level: string; $isActive: boolean }>`
  font-size: 12px;
  font-weight: ${(props) => (props.$isActive ? "bold" : "inherit")};
  ${(props) => {
    switch (props.$level) {
      case "1":
        return css``
      case "2":
        return css``
      case "3":
        return css`
          padding-left: 12px;
        `
      case "4":
        return css`
          padding-left: 16px;
        `
      default:
        return ``
    }
  }};
`
