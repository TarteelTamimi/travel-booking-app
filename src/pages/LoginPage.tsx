import LoginForm from "../components/LoginForm";
import { UserInPropsModel } from "../models/UserProps";

const LoginPage: React.FC<UserInPropsModel> = ({ userIn, setUserIn, setUserRole }) => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse absolute top-5 left-5">
        <img src="https://img.icons8.com/?size=100&id=10860&format=png&color=1d4ed8" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-blue-700 text-2xl font-semibold whitespace-nowrap">HOTEL</span>
      </a>
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 h-full">
        <h1 className="text-5xl font-bold text-blue-700">Login to our platform</h1>
        <LoginForm userIn={userIn} setUserIn={setUserIn} setUserRole={setUserRole} />
      </div>
    </div>
  )
}

export default LoginPage;
