export interface User {
  uuid: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  photo: string;
  status: string;
}

export const EmptyUserState: User = {
  uuid: "",
  name: "",
  lastname: "",
  email: "",
  password: "",
  photo: "",
  status: "",
};

export interface UserInfo{
  user: User;
  loading: boolean;
  success: boolean;
  successSignup: boolean;
  error: string;
}

export type PartialUser = Partial<User>;
export const UserKey = "user";
