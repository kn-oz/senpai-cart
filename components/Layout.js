import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <title>senpai-kart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"  href="/favicon.ico" />
      </Head>
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main>{children}</main>
      <Footer />
    </div>
    </>
  );
}
