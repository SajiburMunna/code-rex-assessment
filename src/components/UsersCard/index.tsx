type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  company: string;
};

function UsersCard({ id, firstname, lastname, email, company }: User) {
  return (
    <div
      className="bg-[#E2E9F9] w-[300px] p-3 rounded cursor-pointer hover:drop-shadow-xl
    "
    >
      <h1 className="text-center bg-white rounded-lg text-lg font-bold mb-2">
        {firstname} {lastname}
      </h1>
      <div>
        <p className="text-center">{email}</p>
        <p className="text-center">{company}</p>
      </div>
    </div>
  );
}

export default UsersCard;
