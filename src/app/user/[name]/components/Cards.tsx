"use client";
import {ArrowDownIcon, ArrowUp} from "lucide-react";
import {stateStore} from "@/store/zuStore";
const Cards = ({title, from, amount}: {title: string; from: string; amount: number}) => {
  const {currency} = stateStore();
  return (
    <>
      <div
        className={`grid bg-transparent border my-5 ${title == "earnings" ? "border-green-500" : "border-red-500"} rounded-lg p-6 shadow-sm`}
      >
        <div className="card-heading">
          <h1 className="text-gray-200 font-semibold">{from}</h1>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* ${iconBg} */}
            <div className={` p-3 rounded-lg`}>
              {title == "earnings" ? (
                <ArrowUp className="text-green-500" />
              ) : (
                <ArrowDownIcon className="text-red-500" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                {currency}
                &nbsp;
                {amount}
              </h3>
            </div>
          </div>
          <div
            className={`text-sm font-medium ${title === "earnings" ? "text-green-600" : "text-red-600"}`}
          >
            {title === "earnings" ? "↑" : "↓"} {amount}%
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
