import styled from "styled-components"

export const SROnly = (props: { label: string }) => {
  return <Label>{props.label}</Label>
}

const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`
