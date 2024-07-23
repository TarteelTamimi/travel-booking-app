import * as yup from "yup";

const usernameRules = /^[a-zA-Z0-9]+$/;
const passwordRules = /^.{3,}$/;

export const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .matches(usernameRules, "Username can only contain alphanumeric characters")
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(3)
    .matches(passwordRules, { "message": "Please create a stronger password" })
    .required("Required"),
});