// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { trpc } from "@/utils/trpc";

export default function Home() {
  // const flightOffers = trpc.useQuery([
  //   "duffel.get-flight-offers",
  //   {
  //     return_offers: true,
  //     slices: [
  //       { origin: "AMS", destination: "LON", departure_date: "2022-02-14" },
  //     ],
  //     cabin_class: "economy",
  //     passengers: [{ type: "adult" }],
  //   },
  // ]);
  // console.log(flightOffers.data);

  // const restrictions = trpc.useQuery([
  //   "amadeus.get-travel-restrictions",
  //   { countryCode: "US" },
  // ]);
  // // const aircraft = await duffel.aircraft.get("arc_00009VMF8AhXSSRnQDI6Hi");
  // console.log(restrictions.data);

  return <div>Hello Nigel</div>;
}
// import * as React from "react";
// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";

// const IndexPage: NextPage = () => {
//   console.log(duffel);
//   return <div>Hello</div>;
// };

// export default IndexPage;
