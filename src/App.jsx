import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/farmers/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import Warehouse from "./pages/farmers/Warehouse";
import Services from "./pages/farmers/Services";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
