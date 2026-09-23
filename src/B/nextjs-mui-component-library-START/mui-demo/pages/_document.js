import { Html, Head, Main, NextScript } from "next/document";
// The contents of this component represent the whole DOM
// that every page will be using. It will ultimately "wrap"
// our Home component contents (from the index.js)
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
