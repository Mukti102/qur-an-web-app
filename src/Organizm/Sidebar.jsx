import React from "react";
import { GiBookmarklet } from "react-icons/gi";
import { IoMdBookmarks } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { NavLink, useParams } from "react-router-dom";
import Nav from "../Molecules/Nav";
function Sidebar() {
  const url = window.location.href.includes("surat");
  console.log(url);
  return (
    <div
      className={`menu bg-primary p-4 lg:w-[30%] w-full items-center h-screen  lg:min-h-full text-white ${
        url ? "hidden" : "block"
      }`}
    >
      <div className=" mx-auto w-44  h-44">
        <img src={logo} className="w-full h-full object-cover" alt="" />
      </div>
      {/* Sidebar content here */}
      <div className="w-max flex flex-col gap-7 items-center mx-auto mt-10">
        <NavLink to={"surat"}>
          <Nav icon={<GiBookmarklet />}>Read Al-Qur'an</Nav>
        </NavLink>
        <NavLink to={"Bookmarks"}>
          <Nav icon={<IoMdBookmarks />}>Bookmarks</Nav>
        </NavLink>
        <NavLink to={"Setting"}>
          <Nav icon={<IoSettingsOutline />}>Setting</Nav>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
