import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
// 总是在服务器端被渲染
export default function Document(props: DocumentProps) {
  return (
    <Html >
      <Head />
      <body className='my-body'>
        <Main />
        <NextScript />
        <div className="overlay"></div>
      </body>
    </Html>
  )
}
