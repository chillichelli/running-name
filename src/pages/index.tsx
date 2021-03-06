import AddButton from "@/components/AddButton";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchFlight from "@/components/SearchFlightMUI";
// import SearchFlight from "@/components/SearchFlight";
import SubtractButton from "@/components/SubtractButton";
import { trpc } from "@/utils/trpc";
import Head from "next/head";

export default function Home() {
  // const { data, isLoading } = trpc.useQuery(["amadeus.get-location", "LON"]);
  // if (data) {
  //   console.log(data);
  // }

  return (
    <div className='max-w-screen-2xl mx-auto'>
      {/* <Head>
        <title>Skyscanner 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <Hero />
      {/* <SearchFlight /> */}
      <SearchFlight />
      {/* <AddButton /> */}
      {/* <SubtractButton /> */}
      {/* <SearchFlight /> */}
    </div>
  );
}
