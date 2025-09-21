export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
}

export const branches: Branch[] = [
  {
    id: 1,
    name: "Downtown Branch",
    address: "123 Main St, Cityville",
    phone: "555-1111",
  },
  {
    id: 2,
    name: "Uptown Branch",
    address: "456 High St, Cityville",
    phone: "555-2222",
  }
];
