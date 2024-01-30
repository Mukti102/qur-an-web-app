import React from "react";
import { NavLink } from "react-router-dom";

function List({ item }) {
  return (
    <NavLink
      to={`${item?.nomor}`}
      className="flex px-5 border-b-[1px] border-slate-300 py-2 gap-1 w-full hover:bg-[rgba(0,0,0,.1)]"
    >
      <span className="text-lg  text-primary font-bold mr-2">
        {item?.nomor}.
      </span>
      <div>
        <h1 className="text-primary font-bold text-lg">{item?.namaLatin}</h1>
        <span className="text-sm font-semibold text-slate-600">
          {item?.arti}
        </span>
        <p className="text-sm text-slate-500">
          {item?.tempatTurun}, {item?.jumlahAyat} Ayat
        </p>
      </div>
    </NavLink>
  );
}

export default List;
