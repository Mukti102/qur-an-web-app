import React from "react";

function SingleAyat({ ayat, index, hide }) {
  return (
    <div
      key={index}
      className="w-full px-10 flex flex-col  justify-center h-max py-5 border-b-[1px] border-slate-200"
    >
      <h1 className="text-end font-sansArab font-bold text-2xl leading-[60px]">
        {ayat?.teksArab}
      </h1>
      <span
        className={`text-start font-normal mt-4 text-slate-600 text-xs ${
          hide ? "hidden" : "block"
        }`}
      >
        {ayat?.nomorAyat}. {ayat?.teksIndonesia}
      </span>
    </div>
  );
}

export default SingleAyat;
