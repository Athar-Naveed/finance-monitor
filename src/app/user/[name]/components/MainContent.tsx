"use client";
import {useEffect, useState} from "react";
import Box from "./Box";
import {fetchData} from "@/app/handler/fetchBill";

const MainContent = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();

      setData(response);
    };
    getData();
  }, []);
  if (data == undefined) return <h1 className="text-black dark:text-white">Loading...</h1>;
  return (
    <>
      <div className="content">
        <div className="main-head">
          <h1 className="text-3xl font-serif text-black dark:text-white">
            Welcome! {data.username.toUpperCase()}
          </h1>
        </div>
        <div className="heads my-20">
          <h1 className="text-lg text-gray-500 my-2">
            Heads up! Your expenses are coming this way!
          </h1>
          <hr />
        </div>
        <div className="boxes">
          <Box />
        </div>
      </div>
    </>
  );
};

export default MainContent;
