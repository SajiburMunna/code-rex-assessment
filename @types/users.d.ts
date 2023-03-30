type Company = {
  address: Address;
  department: string;
  name: string;
  title: string;
};

type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: Company;
};

type Users = {
  limit: number;
  skip: number;
  total: number;
  users: UserData[];
};
