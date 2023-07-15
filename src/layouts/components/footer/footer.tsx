import styled from "styled-components"
import { GoMarkGithub } from "react-icons/go"
import { AppLink } from "@/components/app-link"

export const Footer = () => (
  <Wrap>
    <Detail>
      <Small>Copyright 2023 Haruki Murasaki</Small>
      <AppLink
        isExternal
        href="https://github.com/mrskiro/mrskiro.dev"
        aria-label="Go to GitHub"
      >
        <GoMarkGithub size="24px" aria-hidden />
      </AppLink>
    </Detail>
  </Wrap>
)

const Wrap = styled.footer`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Small = styled.small`
  font-size: 12px;
`
