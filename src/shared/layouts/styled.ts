import styled from "styled-components"

export const Wrap = styled.div`
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  position: relative;
  min-height: 100vh;
  padding: 10% 10% 0px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: all, 0.4s;
  @media (max-width: 480px) {
    padding: 6%;
  }
`

export const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const ThreeColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const LeftMenu = styled.div`
  flex: 1;
  @media (min-width: 480px) {
    position: sticky;
    top: 10%;
    height: 100%;
  }
`

export const Main = styled.main`
  flex: 6;
  padding-bottom: 200px;
`

export const RightMenu = styled.aside`
  width: 180px;
  position: sticky;
  top: 10%;
  height: 100%;
  @media (max-width: 767px) {
    width: inherit;
  }
  @media (max-width: 480px) {
    display: none;
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
  right: 12%;
`
