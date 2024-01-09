export interface User {
  id: string;
  username: string;
  phone: string;
  roles: [];
}

export interface DrinkType {
  name: string;
  description: string;
  pictures: Array<string>;
}
