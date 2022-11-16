import { useRouter } from "next/router"
// blogs路径后的任何路径都将被捕获 并作为参数
export default function Blogs() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>Bolgs page</h1>
    </div>
  )
};
