import Head from "next/head"

type Props = {
  title: string
  ogType: "website" | "article"
  description?: string
}

export const Meta = (props: Props) => {
  const og = `https://og-image-eta-sable.vercel.app/${encodeURIComponent(
    props.title
  )}`
  const fullPath = `https://${
    process.env.NEXT_PUBLIC_VERCEL_URL || "murasak1.com"
  }`
  return (
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🟣</text></svg>"
      />
      <title>{`${props.title}`}</title>

      <meta name="description" key="description" content={props.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@purp1eeeee" />

      <meta property="og:type" content={props.ogType} />
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={og} />
      <meta property="og:url" content={fullPath} />
      <meta property="og:site_name" content="murasak1.com" />
      <meta property="og:description" content={props.title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  )
}
