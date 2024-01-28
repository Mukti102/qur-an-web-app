import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../Utils/CallAPi";
import { useQuery } from "@tanstack/react-query";
import SingleAyat from "../Molecules/SingleAyat";
import TranslateTogle from "../Molecules/TranslateTogle";
import PlayButton from "../Atoms/PlayButton";
import Bismillah from "../Atoms/Bismillah";
function SingleSurat() {
  const [detailSurat, setDetailSurat] = useState(null);
  const [hideTranslate, setHideTranslate] = useState(false);
  const params = useParams();
  const id = params.id;
  const fetch = async () => {
    const res = await axiosInstance.get(`surat/${id}`, [id]);
    return res;
  };
  const handleHideTarnslate = () => {
    setHideTranslate(!hideTranslate);
  };
  const { data } = useQuery({ queryKey: ["surat/", id], queryFn: fetch });
  useEffect(() => {
    if (data) {
      setDetailSurat(data?.data?.data);
    } else {
      setDetailSurat(null);
    }
  }, [data]);
  return (
    <div className="w-[70%] h-[75%]">
      <div className=" flex justify-between px-10 items-center w-full h-20 bg-base-200">
        <h1 className="font-extrabold text-3xl text-primary">
          <span className="mr-3">{detailSurat?.nomor}.</span>
          {detailSurat?.namaLatin}
        </h1>
        <PlayButton detailSurat={detailSurat} />
      </div>
      <TranslateTogle hide={hideTranslate} click={handleHideTarnslate} />
      <div className="w-full h-full overflow-y-auto">
        <Bismillah detailSurat={detailSurat} />
        {detailSurat?.ayat?.map((ayat, index) => {
          return <SingleAyat ayat={ayat} key={index} hide={hideTranslate} />;
        })}
      </div>
    </div>
  );
}

export default SingleSurat;
