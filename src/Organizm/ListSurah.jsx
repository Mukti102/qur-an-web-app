import React, { useEffect, useState } from "react";
import List from "../Molecules/List";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../Utils/CallAPi";
import Input from "../Molecules/Input";
function ListSurah() {
  const [searchValue, setSearchValue] = useState("");
  const [surats, setSurats] = useState(null);
  const fetch = async () => {
    const res = await axiosInstance("surat");
    return res;
  };
  const { data } = useQuery({ queryKey: ["surat"], queryFn: fetch });
  useEffect(() => {
    if (data) {
      setSurats(data?.data?.data);
    }
  }, [data]);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    const result = data?.data?.data.find((item) =>
      item.namaLatin.toUpperCase().includes(searchValue.toUpperCase())
    );
    if (searchValue != "") {
      setSurats([result]);
    } else {
      setSurats(data?.data?.data);
    }
  };
  return (
    <div className="w-[35%] h-screen bg-base-300">
      <div className="flex justify-center items-center h-20 bg-slate-200 shadow-md">
        <Input
          submit={Submit}
          searchValue={searchValue}
          handleChange={handleChange}
        />
      </div>
      <div className="bg-base-200  overflow-y-auto w-full h-[86%] text-white">
        {surats?.map((item, index) => {
          return <List key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
export default ListSurah;
