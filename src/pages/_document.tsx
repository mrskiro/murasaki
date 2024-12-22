import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* TODO: https://web.dev/font-best-practices/ */}
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&amp;display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
