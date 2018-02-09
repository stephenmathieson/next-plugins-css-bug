import Document, { Head, Main, NextScript } from 'next/document'

const { NODE_ENV = 'development' } = process.env

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    return super.getInitialProps(ctx)
  }

  render() {
    return (
      <html>
        <Head>
          {NODE_ENV === 'production' && <link rel="stylesheet" href="/_next/static/style.css" />}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
