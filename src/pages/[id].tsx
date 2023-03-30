import useUser from "@/hooks/useUser";

function Profile() {
  const { response, loading } = useUser("/users");

  if (loading && !response) {
    return <div>Loading...</div>;
  }

  return <div>Profile</div>;
}

export default Profile;
