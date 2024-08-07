import { FormikHelpers, useFormik } from "formik";
import { toast } from "react-toastify";
import { useState } from "react";
import { PaymentFormValues } from "../models/paymentFormValues";
import { useNavigate } from "react-router-dom";
import { paymentFormSchema } from "../schemas/paymentFormSchema";

interface PaymentFormProps {
  roomNumber: string;
  roomType: string;
  price: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ roomNumber, roomType, price }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (values: PaymentFormValues, actions: FormikHelpers<PaymentFormValues>) => {
    setLoading(true);
    try {
      actions.resetForm();
      navigate("/confirmation", { state: { ...values, roomNumber, roomType, price } });
      toast.success("Payed Successfully", {
        position: "top-center",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Something Went Wrong", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik<PaymentFormValues>({
    initialValues: {
      fullName: "",
      email: "",
      state: "",
      city: "",
      cardNumber: "",
      exDate: "",
      cvc: 0,
      specialRequests: "",
    },
    validationSchema: paymentFormSchema,
    onSubmit,
  });
  return (
    <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 float-end mx-5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center">
          <label htmlFor="fullName" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">Your Full Name:</label>
          <div className="w-full">
            <input
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="fullName"
              id="fullName"
              className={
                errors.fullName && touched.fullName
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
              placeholder="full name"
              required
            />
            {errors.fullName && touched.fullName && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.fullName}</p>}
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">Your Email:</label>
          <div className="w-full">
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              id="email"
              className={
                errors.email && touched.email
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
              placeholder="example@company.com"
              required
            />
            {errors.email && touched.email && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.email}</p>}
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="state" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">Your State:</label>
          <div className="w-full">
            <input
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              name="state"
              id="state"
              className={
                errors.state && touched.state
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
              placeholder="USA"
              required
            />
            {errors.state && touched.state && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.state}</p>}
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="city" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">Your City:</label>
          <div className="w-full">
            <input
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              name="city"
              id="city"
              className={
                errors.city && touched.city
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
              placeholder="New York"
              required
            />
            {errors.city && touched.city && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.city}</p>}
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="cardNumber" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">Card Number:</label>
          <div className="w-full">
            <input
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name="cardNumber"
              id="cardNumber"
              className={
                errors.cardNumber && touched.cardNumber
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
              placeholder="xxxx xxxx xxxx xxxx"
              required
            />
            {errors.cardNumber && touched.cardNumber && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.cardNumber}</p>}
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="exDate" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">Exp. Date:</label>
          <div className="w-full">
            <input
              value={values.exDate}
              onChange={handleChange}
              onBlur={handleBlur}
              name="exDate"
              id="exDate"
              className={
                errors.exDate && touched.exDate
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
              placeholder="MM/YYYY"
              required
            />
            {errors.exDate && touched.exDate && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.exDate}</p>}
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="cvc" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">CVC:</label>
          <div className="w-full">
            <input
              value={values.cvc}
              onChange={handleChange}
              onBlur={handleBlur}
              name="cvc"
              id="cvc"
              className={
                errors.cvc && touched.cvc
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
              placeholder=""
              required
            />
            {errors.cvc && touched.cvc && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.cvc}</p>}
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="specialRequests" className="block w-1/3 mb-2 text-sm font-medium mr-3 text-gray-500">Special Requests:</label>
          <div className="w-full">
            <textarea
              value={values.specialRequests}
              onChange={handleChange}
              onBlur={handleBlur}
              name="specialRequests"
              id="specialRequests"
              className={
                errors.specialRequests && touched.specialRequests
                  ? "border-2 w-full border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                  : "border-2 w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              }
            />
            {errors.specialRequests && touched.specialRequests && <p className="error text-red-600 font-bold text-xs pt-1 ml-2">{errors.specialRequests}</p>}
          </div>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className={!loading
            ? "w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-60"
            : "w-1/3 text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-60 cursor-default"}
        >
          {loading ? "confirming..." : "confirm"}
        </button>
      </form>
    </div>
  )
}

export default PaymentForm
