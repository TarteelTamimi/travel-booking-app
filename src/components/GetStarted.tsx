import { FaArrowRight } from "react-icons/fa";
import bg from "../assets/herosection-bg-image.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  }

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse absolute top-5 left-5">
        <img src="https://img.icons8.com/?size=100&id=10860&format=png&color=FFFFFF" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">HOTEL</span>
      </a>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-white text-6xl font-bold mb-9 mx-40">Make Your Travel Special</h1>
        <p className="text-white text-2xl mb-8 mx-60">
          Our platform helps you discover the best hotels in the cities you want to visit. Start planning your trip now!
        </p>
        <button onClick={handleGetStarted} className="px-6 py-3 text-white font-semibold transition duration-300 bg-blue-700 text-lg rounded-xl inline-flex items-center focus:outline-none hover:bg-blue-800">
          <span className="mr-2">Get Started</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}
export default HeroSection;
