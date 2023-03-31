import Head from "next/head";

import Users from "@/features/Users";

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
