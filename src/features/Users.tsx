import UsersCard from "@/components/UsersCard";
import UsersLayout from "@/components/UsersLayout";
import { useUsers } from "@/hooks/useUsers";

function Users() {
  const { response, loading, error } = useUsers({
    method: "GET",
    url: `/users`,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <UsersLayout title="Users List">
        <div className="flex justify-center gap-4 flex-wrap">
          {response?.users.map((user) => (
            <div className="basis-1/4" key={user.id}>
              <UsersCard
                id={user.id}
                firstname={user.firstName}
                lastname={user.lastName}
                email={user.email}
                company={user.company.name}
              />
            </div>
          ))}
        </div>
      </UsersLayout>
    </>
  );
}
export default Users;
