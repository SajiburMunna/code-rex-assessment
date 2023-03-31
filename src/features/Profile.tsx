import Masonry from "react-masonry-css";

import PostCard from "@/components/PostCard";
import UsersCard from "@/components/UsersCard";
import UsersLayout from "@/components/UsersLayout";
import useUser from "@/hooks/useUser";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

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

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {userPost.posts.map((post) => (
            <div key={post.id}>
              <PostCard title={post.title} body={post.body} />
            </div>
          ))}
        </Masonry>
      </UsersLayout>
    </div>
  );
}

export default Profile;
