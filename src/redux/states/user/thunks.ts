import { PartialUser } from "../../../types/user";

const { VITE_API } = import.meta.env;

export const signinUserThunks = async (email: string, password: string) => {
  const { data } = await VITE_API.post("/signin", { email, password });
  if (data) {
    localStorage.setItem("admin", JSON.stringify(data));
  }
  return data;
};

export const signupUserThunks = async (user: PartialUser) => {
  const { data } = await VITE_API.post("/signup", user);
  console.log(data);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

export const logoutAdminThunks = () => {
  localStorage.removeItem("user");
};
