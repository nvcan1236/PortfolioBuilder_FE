export type User = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  lastLogin: string;
  active: boolean;
}

export type RegisterUser = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}