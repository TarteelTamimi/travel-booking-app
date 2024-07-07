import { FormikHelpers, useFormik } from "formik";
import { loginFormSchema } from "../../schemas/loginFormSchema";

interface LoginFormValues {
  email: string;
  password: string;
}

const onSubmit = (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
  actions.resetForm();
};

const LoginForm: React.FC = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6" action="#">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            id="email"
            className={
              errors.email && touched.email
                ? "bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            }
            placeholder="name@company.com"
            required
          />
          {errors.email && touched.email && <p className="error text-red-500 text-xs pt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className={
              errors.password && touched.password
                ? "bg-gray-50 border border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            }
            required
          />
          {errors.password && touched.password && <p className="error text-red-500 text-xs pt-1">{errors.password}</p>}
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
          </div>
          <a href="#" className="ms-auto text-sm text-blue-700 hover:underline">Lost Password?</a>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login
        </button>
        <div className="text-sm font-medium text-gray-500">
          Not registered? <a href="#" className="text-blue-700 hover:underline">Create account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
