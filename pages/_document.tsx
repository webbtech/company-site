import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const description = 'The Next generation of a news feed'
    const fontsUrl =
      'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'

    return (
      <Html>
        <Head>
          <meta name='description' content={description} />
          <link href={fontsUrl} rel='stylesheet' />
          {/* <link rel='stylesheet' href='../styles/index.css' /> */}
          {/* <link rel='stylesheet' href='spectre.min.css' /> */}
          {/* <link rel='stylesheet' href='spectre-exp.min.css' /> */}
          {/* // <link rel='stylesheet' href='spectre-icons.min.css' /> */}
          {this.props.styles}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
