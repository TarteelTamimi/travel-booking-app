import { FormikHelpers, useFormik } from "formik";
import { loginFormSchema } from "../schemas/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { LoginFormValues } from "../models/LoginFormValues";
import { login } from "../services/login";
import { UserInPropsModel } from "../models/userInProps";

const LoginForm: React.FC<UserInPropsModel> = ({ userIn, setUserIn }) => {
  const navigate = useNavigate();

  const onSubmit = async (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    actions.resetForm();
    const data = await login(values.username, values.password);
    localStorage.setItem('token', data.authentication);
    console.log(userIn);
    setUserIn(true);
    navigate("/home");
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik<LoginFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });

  return (
    <div className="w-full max-w-md p-4 bg-none border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Your username</label>
          <input
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            name="username"
            id="username"
            className={
              errors.username && touched.username
                ? "bg-none border-2 border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                : "bg-none border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            }
            placeholder="username"
            required
          />
          {errors.username && touched.username && <p className="error text-red-600 font-bold text-xs pt-1">{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
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
                ? "bg-gray-50 border-2 border-red-500 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                : "bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            }
            required
          />
          {errors.password && touched.password && <p className="error text-red-600 font-bold text-xs pt-1">{errors.password}</p>}
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-400">Remember me</label>
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
        <div className="text-sm font-medium text-gray-400">
          Not registered? <a href="#" className="text-blue-700 hover:underline">Create account</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
