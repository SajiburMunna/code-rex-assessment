type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: Company;
};

type Company = {
  address: Address;
  department: string;
  name: string;
  title: string;
};
