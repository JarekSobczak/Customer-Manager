export interface Customer {
  id?:number;
  name: string;
  photoUrl: string;
  description: string;
  age: number;
  address: Address;
  type:CustomerType;
  categories: string[];
}
export interface Address {
  city: string;
  street: string;
  number: number
}

export enum CustomerType {
  Standard,
  Premium,
  VIP
}
