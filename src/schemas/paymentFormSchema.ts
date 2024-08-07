import * as yup from "yup";

export const paymentFormSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Required"),
  cvc: yup
    .number()
    .typeError("Must be a number")
    .min(100, "Invalid")
    .required("Required"),
  state: yup
    .string()
    .required("Required"),
  city: yup
    .string()
    .required("Required"),
  cardNumber: yup
    .string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Invalid")
    .required("Required"),
  exDate: yup
    .string()
    .required("Required"),
});