import Image from "next/legacy/image"
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
          width={52}
          height={20}
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
          width={52}
          height={20}
          objectFit="contain"
        />
      </S.Wrap>
    )
  }

  return null
}
