import styled from "styled-components"

export const A = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  text-decoration: ${(props) => (props.isActive ? "underline" : "inherit")};
  text-underline-offset: 4px;
`
