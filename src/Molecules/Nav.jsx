import React from "react";

function Nav({ icon, children }) {
  return (
    <span className="px-7 py-3 rounded-md flex gap-3 items-center hover:bg-black  hover:bg-opacity-20 cursor-pointer">
      <span className="text-3xl pt-1">{icon}</span>
      <span className="text-xl font-semibold">{children}</span>
    </span>
  );
}

export default Nav;
