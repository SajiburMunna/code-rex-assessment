import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Users-CodeRex</title>
      </Head>
      <h1 className="text-red-600">Code Rex</h1>
    </>
  );
}
