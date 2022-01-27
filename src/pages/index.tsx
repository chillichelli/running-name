import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "nigel" }]);
  if (isLoading) return <div>Loading...</div>;

  if (data) return <div>{data.greeting}</div>;
}
