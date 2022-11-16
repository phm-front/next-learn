import { useEffect } from "react"

export default function Sales() {
  useEffect(() => {
    fetch('https://nextjs-course-3ffd1-default-rtdb.firebaseio.com/sales.json')
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }, [])
  return <h1>sales</h1>
}