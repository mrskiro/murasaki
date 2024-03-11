import Head from "next/head"
import { useRouter } from "next/router"

type Props = {
  title: string
  ogType: "website" | "article"
  description?: string
}

export const Meta = (props: Props) => {
  // const og = `https://og-image-eta-sable.vercel.app/${encodeURIComponent(
  //   props.title
  // )}`

  const og = "https://www.mrskiro.dev/assets/mrskiro.png"

  const router = useRouter()
  const url = `https://mrskiro.dev${router.asPath}`

  /* TODO: envに移動 */
  const title = `${props.title} | mrskiro.dev`
  return (
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt;&lt;text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22&gt;🟣&lt;/text&gt;&lt;/svg&gt;"
      />
      <link rel="canonical" href={url} />

      <title>{title}</title>

      {props.description && (
        <meta name="description" content={props.description} />
      )}

      <meta name="twitter:site" content="@mrskiro_" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={og} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="mrskiro.dev" />
      <meta property="og:description" content="mrskiroのブログです" />
      <meta property="og:image" content={og} />

      <meta property="og:type" content={props.ogType} />
    </Head>
  )
}
