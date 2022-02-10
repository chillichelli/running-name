import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Head>
        <title>Skyscanner 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
