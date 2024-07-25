import { Paper } from "@mui/material";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [profileVisible, setProfileVisible] = useState(false);
  const currentRoute = "/" + location.pathname.split("/")[2];
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
    },
    {
      path: "/add-production",
      text: "Add Production"
    },
    {
      path: "/my-services",
      text: "My Services"
    },
    {
      path: "/service-details",
      text: "Service Details"
    },
    {
      path: "/contracts",
      text: "Contracts"
    },
    {
      path: "/add-storage",
      text: "Add storage"
    },
    {
      path: "/storage",
      text: "Storage"
    },
    {
      path: "/warehouse-details",
      text: "Details"
    },
    {
      path: "/marketplace",
      text: "Marketplace"
    },
    {
      path: "/purchases",
      text: "Purchases"
    },
    {
      path: "/create-article",
      text: "Create Article"
    },
    {
      path: "/create-video",
      text: "Create Video"
    }
  ];
  return (
    <div className="mt-[4vh] flex justify-between w-[75vw] items-center">
      <div className="">
        {["/home", "/add-production", "/production-history"].includes(
          currentRoute
        ) ? (
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
        <CgProfile
          className="text-[2rem] text-brown cursor-pointer"
          onClick={() => {
            setProfileVisible(!profileVisible);
          }}
        />
        <IoMdNotifications className="text-[2rem] text-brown" />
        {profileVisible && (
          <Paper
            sx={{
              position: "absolute",
              p: 2,
              borderRadius: "1rem",
              top: 90,
              right: 100
            }}
          >
            <div className="flex gap-3">
              <div className="w-[3rem] h-[3rem] rounded-full bg-brown"></div>
              <div className="">
                <h3 className="font-[500]">Ramesh Mehta</h3>
                <p className="font-[500] text-brown">Farmer</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center items-center">
              <button className="px-4 py-2 bg-darkNavy text-white rounded-full w-full">
                Visit your profile
              </button>
            </div>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default Navbar;
