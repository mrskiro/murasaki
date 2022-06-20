import Head from "next/head"

type Props = {
  title: string
}

export const Meta = (props: Props) => {
  return (
    <Head>
      <title>{`${props.title} | 🟣`}</title>
      <link rel="icon" href="/favicon.ico" />
      {/* wip */}
    </Head>
  )
}
