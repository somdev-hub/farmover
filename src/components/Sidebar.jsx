import { RxDashboard } from "react-icons/rx";
import { LuWarehouse } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split('/').slice(0, 2).join('/');
  console.log(currentRoute);
  const routes = [
    {
      name: "Dashboard",
      icon: RxDashboard,
      path: "/"
    },
    {
      name: "Warehouse",
      icon: LuWarehouse,
      path: "/warehouse"
    },
    {
      name: "Services",
      icon: MdDesignServices,
      path: "/services"
    },
    {
      name: "Learning",
      icon: FaBook,
      path: "/learning"
    },
    {
      name: "Calendar",
      icon: FaRegCalendar,
      path: "/calendar"
    }
  ];
  return (
    <div className="h-[100vh] items-center flex fixed">
      <div className="bg-darkNavy h-[95vh] w-[17rem] rounded-[2rem]  ml-[1rem] flex flex-col justify-between py-8">
        <div className="">
          <div className="px-7">
            <h2 className="font-poppins text-[1.8rem] text-white text-center font-[600] ">
              FarmOver
            </h2>
            <hr className="mt-4" />
          </div>
          <ul className="mt-8">
            {routes.map((route, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    currentRoute === route.path
                      ? "bg-white rounded-tr-[1rem] box-border rounded-br-[1rem] py-2 pr-6"
                      : ""
                  } cursor-pointer  mb-6 pl-10 w-fit`}
                >
                  <Link to={route.path} className="flex items-center gap-4">
                    <route.icon
                      className={`${
                        currentRoute === route.path
                          ? "text-darkNavy"
                          : "text-white"
                      } text-[22px]`}
                    />
                    <span
                      className={`${
                        currentRoute === route.path
                          ? "text-darkNavy"
                          : "text-white"
                      } text-[18px] font-[500] font-poppins`}
                    >
                      {route.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" px-7">
          <button className="bg-white rounded-xl w-full py-1 text-[18px] font-[500] flex items-center gap-2 text-center justify-center">
            <IoMdSettings /> Settings
          </button>
          <button className="bg-[#FF004D] text-white rounded-xl w-full py-1 text-[18px] font-[500] flex items-center gap-2 text-center justify-center mt-4">
            <MdLogout /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
