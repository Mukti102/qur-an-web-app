import React from "react";

function Bismillah({ detailSurat }) {
  console.log(detailSurat?.namaLatin);
  return (
    <div
      className={`flex justify-center items-center w-full py-10 ${
        detailSurat?.namaLatin === "Al-Fatihah" ? "hidden" : "block"
      }`}
    >
      <h1 className="font-sansArab text-2xl font-bold">
        بِسْمِ اللَّهِ الرَّ حْمنِ الرَّحِيْمِ
      </h1>
    </div>
  );
}

export default Bismillah;
