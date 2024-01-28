import React from "react";
import { GiBookmarklet } from "react-icons/gi";
import { IoMdBookmarks } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Nav from "../Molecules/Nav";
function Sidebar() {
  return (
    <div className="drawer w-max lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-side">
        <div className="menu bg-primary p-4 w-80 min-h-full text-white">
          <div className=" mx-auto w-44  h-44">
            <img src={logo} className="w-full h-full object-cover" alt="" />
          </div>
          {/* Sidebar content here */}
          <div className="w-max flex flex-col gap-7 mx-auto mt-10">
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
      </div>
    </div>
  );
}

export default Sidebar;
