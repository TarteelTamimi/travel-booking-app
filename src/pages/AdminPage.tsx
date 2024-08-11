import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Cities from "../components/Admin/Cities";
import Hotels from "../components/Admin/Hotels";
import Rooms from "../components/Admin/Rooms";

const AdminPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [content, setContent] = useState("Cities");

  const toggleSidebar = () => {
    if (isSidebarVisible) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsSidebarVisible(false);
        setIsAnimatingOut(false);
      }, 300);
    } else {
      setIsSidebarVisible(true);
    }
  };

  const handleButtonClick = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <>
      <div onClick={toggleSidebar} className="fixed left-5 top-56 text-blue-700 p-[10px] rounded-full text-3xl hover:bg-white cursor-pointer">
        <IoIosArrowForward />
      </div>
      {isSidebarVisible && (
        <div className={isAnimatingOut
          ? "bg-white w-[20%] rounded-r-lg fixed -left-28 top-52 min-h-[28rem] slide-left"
          : "bg-white w-[20%] rounded-r-lg fixed -left-28 top-52 min-h-[28rem] slide-right"}>
          <div className="border-b-2">
            <button onClick={toggleSidebar} className="absolute top-5 right-10 text-gray-700 p-[10px] rounded-full text-3xl hover:bg-gray-100">
              <IoIosArrowBack />
            </button>
            <h3 className="ml-3 p-6 text-grey-700 text-3xl">To Manage</h3>
          </div>
          <button onClick={() => handleButtonClick("Cities")} className="mb-2 w-full text-xl p-5 hover:bg-gray-100">Manage Cities</button>
          <button onClick={() => handleButtonClick("Hotels")} className="mb-2 w-full text-xl p-5 hover:bg-gray-100">Manage Hotels</button>
          <button onClick={() => handleButtonClick("Rooms")} className="mb-2 w-full text-xl p-5 hover:bg-gray-100">Manage Rooms</button>
        </div>
      )}
      <div>
        {content === "Cities" && <Cities />}
        {content === "Hotels" && <Hotels />}
        {content === "Rooms" && <Rooms />}
      </div>
    </>
  );
};

export default AdminPage;
