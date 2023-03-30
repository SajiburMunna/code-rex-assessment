import Head from "next/head";
import { Inter } from "next/font/google";

import { useUsers } from "@/hooks/useUsers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { response, loading, error } = useUsers({
    method: "GET",
    url: `/users`,
    headers: {
      accept: "*/*",
    },
  });

  console.log("response", response);
  return (
    <>
      <Head>
        <title>Users-CodeRex</title>
      </Head>
      <h1 className="text-red-600">Code Rex</h1>
    </>
  );
}
