import styled from "styled-components"
import NextImage from "next/image"

type Props = {
  src: string
  alt: string
}

export const Image = (props: Props) => (
  <Wrap>
    <NextImage
      layout="fill"
      objectFit="contain"
      alt={props.alt}
      src={props.src}
    />
  </Wrap>
)

// https://techlab.q-co.jp/articles/43/
const Wrap = styled.div`
  position: relative;

  > span {
    position: unset !important;
  }

  > span > img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`
