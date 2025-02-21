"use client";
import {useEffect, useState} from "react";
import Box from "./Box";
import {fetchData} from "@/app/handler/fetchBill";

const MainContent = ({title, description}: {title: string; description: string}) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setData(response);
    };
    getData();
  }, []);
  if (data == undefined) return <h1 className="text-white flex justify-center">Loading...</h1>;
  document.title = data.fullName + " | Expense Flow";
  return (
    <>
      <div className="content">
        <div className="head m-2 lg:m-10">
          <div className="main-head">
            <h1 className="text-3xl font-serif text-white">
              {title} -- {data.fullName}
            </h1>
          </div>
          <div className="heads">
            <h1 className="text-lg text-gray-500 my-2">{description}</h1>
          </div>
        </div>
        <div className="border-b border-gray-400" />
      </div>
    </>
  );
};

export default MainContent;
