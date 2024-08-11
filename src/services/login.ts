import { api } from "./api";

const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/authenticate", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export { login };
