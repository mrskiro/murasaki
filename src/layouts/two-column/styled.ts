import styled from "styled-components"

export const TwoColumn = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 24px;
  }
`

export const LeftMenu = styled.div`
  @media (min-width: 640px) {
    grid-column: span 2;
    position: sticky;
    top: 48px;
    height: fit-content;
  }
`

export const Main = styled.main`
  @media (min-width: 640px) {
    grid-column: span 10;
  }
`
