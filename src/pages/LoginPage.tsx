import LoginForm from "../components/LoginForm";
import bg from "../assets/herosection-bg-image.jpg";
import { UserInPropsModel } from "../models/UserProps";

const LoginPage: React.FC<UserInPropsModel> = ({ userIn, setUserIn, setUserRole }) => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 h-full">
        <h1 className="text-5xl font-bold text-white">Login to our platform</h1>
        <LoginForm userIn={userIn} setUserIn={setUserIn} setUserRole={setUserRole} />
      </div>
    </div>
  )
}

export default LoginPage;