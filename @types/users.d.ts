type Company = {
  address: Address;
  department: string;
  name: string;
  title: string;
};

type Address = {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Users = {
  limit: number;
  skip: number;
  total: number;
  users: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    company: Company;
  }[];
};
