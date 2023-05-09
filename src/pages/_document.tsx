import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html data-theme='winter' >
      <Head />
      <body className=' scrollbar-hide   overflow-scroll'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
