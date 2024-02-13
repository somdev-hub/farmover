import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/farmers/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import Warehouse from "./pages/farmers/Warehouse";
import Services from "./pages/farmers/Services";
import Learning from "./pages/farmers/Learning";
import Calendar from "./pages/farmers/Calendar";
import WarehouseView from "./pages/farmers/WarehouseView";
import Signup from "./pages/welcome/Signup";
import SetPassword from "./pages/welcome/SetPassword";
import Login from "./pages/welcome/Login";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" overflow-x-scroll noScrollbar ml-[20rem] pb-4">
        <Navbar />
        {/* {children} */}
        <Outlet />
        {/* <Dashboard/> */}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/services" element={<Services />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/warehouse/view" element={<WarehouseView />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
