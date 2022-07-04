import { useEffect } from "react"
import { useRouter } from "next/router"
import Script from "next/script"

const GOOGLE_ANALYTICS_ID = "G-HRSTN8HFJC"

//　必要になったら

// type EventArgs = {
//   action: string
//   category: string
//   label: string
//   value?: string
// }

// const event = (args: EventArgs) => {
//   window.gtag("event", args.action, {
//     event_category: args.category,
//     event_label: args.label,
//     value: args.value,
//   })
// }

export const usePegeView = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!window.gtag) return
      window.gtag("config", GOOGLE_ANALYTICS_ID, {
        page_path: url,
      })
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    router.events.on("hashChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("hashChangeComplete", handleRouteChange)
    }
  }, [router.events])
}

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
