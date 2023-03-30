import PostCard from "@/components/PostCard";
import UsersCard from "@/components/UsersCard";
import UsersLayout from "@/components/UsersLayout";
import useUser from "@/hooks/useUser";

function Profile() {
  const { response: userData, loading: isLoadingUserData } = useUser({
    users: "/users",
  });
  const { response: post, loading: isLoadingUserPosts } = useUser({
    users: "/users",
    posts: "/posts",
  });

  const userInfo = userData as User;
  const userPost = post as Posts;

  if (isLoadingUserPosts || isLoadingUserData || !userInfo || !userPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UsersLayout title="User Profile">
        <UsersCard
          id={userInfo.id}
          firstname={userInfo.firstName}
          lastname={userInfo.lastName}
          email={userInfo.email}
          company={userInfo.company.name}
        />

        <h1 className="text-2xl font-bold mb-3 mt-3">User Posts</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {userPost.posts.map((post) => (
            <div className="grid gap-4" key={post.id}>
              <div>
                <PostCard title={post.title} body={post.body} />
              </div>
            </div>
          ))}
        </div>
      </UsersLayout>
    </div>
  );
}

export default Profile;
