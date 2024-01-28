import React from "react";
import { Outlet } from "react-router";
import ListSurah from "./ListSurah";

function ReadQuran() {
  return (
    <div className="w-full h-screen flex">
      <ListSurah />
      <Outlet />
    </div>
  );
}

export default ReadQuran;
