type Props = {
  link: string
}

// kokoから
export const TagForMade = (props: Props) => {
  const label = (() => {
    if (props.link.includes("qiita")) return "qiita"

    return "notion"
  })()
}
