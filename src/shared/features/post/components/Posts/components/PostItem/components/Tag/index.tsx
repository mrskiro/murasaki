import Image from "next/image"
import * as S from "./styled"

type Props = {
  link: string
}

export const ExternalTag = (props: Props) => {
  const isZenn = props.link.includes("zenn")
  if (isZenn) {
    return (
      <S.Wrap>
        <Image
          src="/assets/zenn-logo.png"
          alt="zenn"
          width="52px"
          height="20px"
          objectFit="contain"
        />
      </S.Wrap>
    )
  }

  const isQiita = props.link.includes("qiita")
  if (isQiita) {
    return (
      <S.Wrap>
        <Image
          src="/assets/qiita-logo.png"
          alt="qiita"
          width="52px"
          height="20px"
          objectFit="contain"
        />
      </S.Wrap>
    )
  }

  return null
}
