import styled from "styled-components"

export const Wrap = styled.div`
  min-height: 100vh;
  padding: 10% 10% 0px;
  @media (max-width: 480px) {
    padding: 6%;
  }
`

export const ThreeColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  @media (min-width: 480px) {
    position: sticky;
    top: 10%;
    height: 100%;
  }
`

export const Main = styled.main`
  flex: 4;
`

export const RightMenu = styled.aside`
  flex: 1;
`

export const H1 = styled.h1`
  font-size: 20px;
`

export const Hr = styled.hr`
  margin-top: 48px;
  margin-bottom: 16px;
  border-top: 1px solid #edf2f7;
`

export const Footer = styled.footer`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Small = styled.small`
  font-size: 12px;
`
