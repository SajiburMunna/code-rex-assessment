import Masonry from "react-masonry-css";

import PostCard from "@/components/PostCard";
import UsersCard from "@/components/UsersCard";
import UsersLayout from "@/components/UsersLayout";
import useUser from "@/hooks/useUser";
import Title from "@/components/Title";
import Loader from "@/components/Loader";

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

  if (isLoadingUserPosts || isLoadingUserData) {
    return <Loader />;
  }

  return (
    <div>
      <UsersLayout backbutton title="User Profile">
        <UsersCard
          id={userInfo.id}
          firstname={userInfo.firstName}
          lastname={userInfo.lastName}
          email={userInfo.email}
          company={userInfo.company.name}
        />
        <Title title="User Posts" />
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
