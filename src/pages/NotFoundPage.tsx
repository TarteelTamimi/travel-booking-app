import { FaArrowLeft } from "react-icons/fa";
import notFound from "../assets/undraw_page_not_found_re_e9o6.svg";

const NotFoundPage = () => {

  return (
    <div className="absolute top-40 left-[500px] flex">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <img src={notFound} alt="not found" width={500} height={500} />
          <h3 className="text-2xl font-bold p-10">Page Not Found :(</h3>
        </div>
        <a href="/home" className="flex hover:cursor-pointer hover:text-blue-800 hover:underline">
          <FaArrowLeft className="mr-2 mt-[5px]" />
          Back to home page
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage;
