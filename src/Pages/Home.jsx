import React from "react";
import Sidebar from "../Organizm/Sidebar";
import { Outlet } from "react-router";

function Home() {
  return (
    <div className="flex w-full  min-h-screen overflow-hidden">
      <Sidebar />
      <div className="lg:block w-full hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
