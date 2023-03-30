import Head from "next/head";
import { Inter } from "next/font/google";

import Users from "@/features/Users";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Users-CodeRex</title>
      </Head>
      <Users />
    </>
  );
}
