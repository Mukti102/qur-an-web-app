import React from "react";
import Sidebar from "../Organizm/Sidebar";
import { Outlet } from "react-router";

function Home() {
  return (
    <div className="flex w-full min-h-screen overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Home;
