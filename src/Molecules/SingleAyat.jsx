import React from "react";

function SingleAyat({ ayat, index, hide }) {
  // Fungsi untuk mengonversi angka ke angka Arab
  function convertToArabicNumber(number) {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => arabicNumbers[parseInt(digit, 10)])
      .join("");
  }
  return (
    <div
      key={index}
      className="w-full px-10 flex flex-col  justify-center h-max py-5 border-b-[1px] border-slate-200"
    >
      <div className="text-end font-sansArab font-bold lg:text-2xl text-xl flex justify-end leading-[50px] lg:leading-[60px]">
        <div className="w-7 h-7 p-2 text-center border-[2px] text-lg border-black lg:mx-2 mx-0 rounded-full flex justify-center items-center">
          <span>{convertToArabicNumber(ayat?.nomorAyat)}</span>
        </div>
        <span className="font-sansArab">{ayat?.teksArab}</span>
      </div>
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
