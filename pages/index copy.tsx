import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [num, setNum] = useState(0)
  useEffect(() => {
    fetch('/data.json')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  }, [])
  return (
    <div>
      {/* <Link href={{
        pathname: '/product/[id]',
        query: { id: '999' }
      }}>产品</Link> */}
      <Link href="/product/999">产品</Link>
      <h1>Home Page</h1>
      <p>{ num }</p>
      <button onClick={ () => setNum(num + 1) }>+1</button>
    </div>
  )
}

export default Home
