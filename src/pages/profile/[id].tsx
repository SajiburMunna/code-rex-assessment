import Head from "next/head";

import Profile from "@/features/Profile";

function UserProfile() {
  return (
    <div>
      <Head>
        <title>Prfile|User</title>
      </Head>
      <Profile />
    </div>
  );
}

export default UserProfile;
