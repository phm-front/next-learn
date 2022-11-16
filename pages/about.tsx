import fs from "fs/promises";
import path from "path";
import type { GetStaticPropsContext, GetStaticProps } from 'next';
interface Props {
  products: any[]
  ts: number
}
export default function About(props: Props) {
  const { products, ts } = props;
  // console.log(ts);
  return (
    <ul>
      {products.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
}
// 先执行getStaticProps
export async function getStaticProps(context: GetStaticPropsContext) {
  console.log(context);
  // console.log(__dirname, process.cwd())
  // console.log('re generating');
  const jsonData = await fs.readFile(path.resolve(process.cwd(), "./data/products.json"), {
    encoding: "utf-8",
  });
  const json: { list: any[] } = JSON.parse(jsonData);
  const ts = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(100)
    }, 100);
  })
  if (!json) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
        // statusCode: 301
      },
    }
  }
  if (!json.list) {
    return { notFound: true } // true时会显示404页面
  }
  return {
    props: {
      products: json.list,
      ts
    },
    revalidate: 100,
  };
}
