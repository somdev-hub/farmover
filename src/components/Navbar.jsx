import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentRoute = location.pathname.split("/").slice(0, 2).join("/");
  const routes = [
    {
      path: "/warehouse",
      text: "Warehouse"
    },
    {
      path: "/services",
      text: "Services"
    },
    {
      path: "/learning",
      text: "Learning"
    },
    {
      path: "/calendar",
      text: "Calendar"
    }
  ];
  return (
    <div className="mt-[4vh] flex justify-between w-[75vw] items-center">
      <div className="">
        {currentRoute === "/" ? (
          <>
            <p className="text-[18px] text-brown font-[500]">Welcome to your</p>
            <h2 className="text-[24px] font-[600] m-0">Dashboard</h2>
          </>
        ) : (
          routes.map((route, index) => {
            return currentRoute === route.path ? (
              <h2 className="text-[24px] font-[600] m-0" key={index}>
                {route.text}
              </h2>
            ) : (
              ""
            );
          })
        )}
      </div>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          className="
            border-[2px] border-brown rounded-[0.75rem] p-2 px-4
            w-[15rem] text-[14px] font-[400] text-brown bg-transparent outline-none
        "
          placeholder="Search for anything..."
        />
        <CgProfile className="text-[2rem] text-brown" />
        <IoMdNotifications className="text-[2rem] text-brown" />
      </div>
    </div>
  );
};

export default Navbar;
