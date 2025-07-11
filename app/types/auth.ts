export type User = {
  id: string;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  lastLogin: string;
  active: boolean;
}

export type RegisterUser = {
  fullName: string;
  email: string;
  username: string;
  phoneNumber: string;
  password: string;
}