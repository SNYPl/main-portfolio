import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {" "}
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Template CSS Files */}
        <link rel="stylesheet" href="css/devicon.min.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        {/* CSS Skin File */}
        <link rel="stylesheet" href="css/skins/yellow.css" />
        {/* Live Style Switcher - demo only */}
        <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
