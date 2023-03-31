import Link from "next/link";

import UsersCard from "@/components/UsersCard";
import UsersLayout from "@/components/UsersLayout";
import useUsers from "@/hooks/useUsers";

function Users() {
  const { response, loading } = useUsers("/users");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UsersLayout title="Users List">
        <div className="flex justify-center gap-4 flex-wrap">
          {response?.users.map((user) => (
            <div className="basis-1/4 2xl:basis-1/5" key={user.id}>
              <Link href={`profile/${user.id}`} legacyBehavior>
                <a>
                  <UsersCard
                    id={user.id}
                    firstname={user.firstName}
                    lastname={user.lastName}
                    email={user.email}
                    company={user.company.name}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </UsersLayout>
    </>
  );
}
export default Users;
