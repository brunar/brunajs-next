import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/assets/images/logo/favicon.gif" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Creative Bruna Radeke" />
          <meta
            property="og:image"
            content="https://whatsonchain.com/assets/images/logo/WOC-GY-09.png"
          />
          <meta
            property="og:description"
            content="Creative Bruna Radeke"
            key="og:description"
          />

          <meta name="application-name" content="BrunaJS" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="BrunaJS" />
          <meta name="theme-color" content="#212529" />
          <link
            rel="icon"
            type="image/png"
            href="/assets/images/logo/icon-128x128.png"
            sizes="128x128"
          />
          <link
            rel="apple-touch-icon"
            href="/assets/images/logo/woc-favicon-blk.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600&display=swap"
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

