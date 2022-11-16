import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <h1>公共标题</h1>
      {/* Component组件类似于router-view 是每个路由组件渲染的位置 */}
      <Component {...pageProps} />
    </Fragment>
  )
}
