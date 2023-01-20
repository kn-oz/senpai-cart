import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Product from "../components/Product";
import { data } from "../lib/data";


export default function Home() {
  return (
    <>
    <Head>
        <title>senpai-kart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"  href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="home-main p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            data.products.map((product, index) => {
              return (
                <Product key={product.slug + index} productData={product} />
              )
            })
          }
        </div>
      </Layout>
    </>
  );
}
