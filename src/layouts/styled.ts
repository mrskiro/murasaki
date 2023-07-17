import styled from "styled-components"

export const Wrap = styled.div`
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  position: relative;
  min-height: 100vh;
  padding-top: 128px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: all, 0.4s;
  @media (max-width: 1024px) {
    padding: 64px 32px 0px;
  }
`

export const Hr = styled.hr`
  margin-top: 48px;
  margin-bottom: 16px;
  border-top: 1px solid #edf2f7;
`

export const SwitcherWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 32px;
`
