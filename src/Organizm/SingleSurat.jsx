import React, { useEffect, useState, useMemo } from "react";
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
  const memoizedDetailSurat = useMemo(() => {
    if (data) {
      return data?.data?.data;
    } else {
      return null;
    }
  }, [data]);

  useEffect(() => {
    setDetailSurat(memoizedDetailSurat);
  }, [memoizedDetailSurat]);
  return (
    <div className="lg:w-[65%] lg:h-[75%] h-screen w-full">
      <div className="flex justify-between px-10 items-center w-full h-20 bg-base-200">
        <h1 className="font-extrabold lg:text-3xl  text-2xl text-primary">
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
