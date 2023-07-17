import styled from "styled-components"

export const A = styled.a`
  cursor: pointer;
  text-decoration: underline;
  word-break: break-all;

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.brand};
    outline-offset: 2px;
  }
`

export const Nav = styled.a<{ isActive?: boolean }>`
  cursor: pointer;
  text-decoration: ${(props) => (props.isActive ? "underline" : "inherit")};
  text-underline-offset: 4px;

  :focus-visible {
    outline: 2px solid ${(props) => props.theme.brand};
    outline-offset: 2px;
  }
`
