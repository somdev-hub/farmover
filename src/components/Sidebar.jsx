import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ routes, activateSidebar, setActivateSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = "/" + location.pathname.split("/")[2];

  return (
    <div
      className={`h-[100dvh] items-center fixed sm:left-0  ${
        activateSidebar ? "left-0" : "-left-full"
      } transition-all duration-300 sm:flex z-50`}
    >
      <div className="bg-darkNavy sm:h-[95vh] sm:w-[17rem] h-full w-[75vw] sm:rounded-[2rem]  sm:ml-[1rem] flex flex-col justify-between py-6 sm:py-8">
        <div className="">
          <div className="px-7">
            <h2 className="font-poppins text-[1.8rem] text-white text-center font-[600] ">
              FarmOver
            </h2>
            <hr className="mt-4" />
          </div>
          <ul className="mt-8 list-none pl-0">
            {routes?.map((route, index) => {
              return (
                <li
                  onClick={() => {
                    navigate(route.path);
                    setActivateSidebar(false);
                  }}
                  key={index}
                  className={`${
                    route.paths.includes(currentRoute)
                      ? "bg-white rounded-tr-[1rem] box-border rounded-br-[1rem] py-2 pr-6"
                      : ""
                  } cursor-pointer  mb-6 pl-6 sm:pl-10 w-fit`}
                >
                  {/* <Link to={route.path} className="flex items-center gap-4"> */}
                  <div className="flex items-center gap-4">
                    <route.icon
                      className={`${
                        route.paths.includes(currentRoute)
                          ? "text-darkNavy"
                          : "text-white"
                      } text-[22px]`}
                    />
                    <span
                      className={`${
                        route.paths.includes(currentRoute)
                          ? "text-darkNavy"
                          : "text-white"
                      } text-[18px] font-[500] font-poppins`}
                    >
                      {route.name}
                    </span>
                  </div>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" px-7">
          <button className="bg-white rounded-xl w-full py-1 text-[18px] font-[500] flex items-center gap-2 text-center justify-center">
            <IoMdSettings /> Settings
          </button>
          <button
            className="bg-[#FF004D] text-white rounded-xl w-full py-1 text-[18px] font-[500] flex items-center gap-2 text-center justify-center mt-4"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              localStorage.removeItem("role");
              window.location.href = "/login";
            }}
          >
            <MdLogout /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
