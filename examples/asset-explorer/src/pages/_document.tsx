import React from 'react';

import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from 'next/document';

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
