"use client";
import React from "react";
import CountUp from "react-countup";

function Counters() {
  return (
    <section className="py-10">
        <div className="h-40  flex justify-between ml-40">
      <div className="flex gap-20 justify-center items-center">
        <div className="text-5xl font-bold flex w-40  justify-center items-center ">
          <h2 className="text-orange-400 ">
            <CountUp end={10} duration={5} />+
          </h2>
          <h3 className="text-2xl font-medium">Digital Products</h3>
        </div>
        <div className="text-5xl font-bold  flex w-40 ">
          <h2 className="text-orange-400">
            <CountUp end={117} duration={5} />+
          </h2>
          <h3 className="text-2xl font-medium">Projects</h3>
        </div>
        <div className="text-5xl font-bold  flex w-48  ">
          <h2  className="text-orange-400">
            <CountUp end={10} duration={5} />M
          </h2>
          <h3 className="text-2xl font-medium" >LIne of Code</h3>
        </div>
      </div>
      <div className="h-40 w-40 bg-purple-500 rounded-2xl"></div>
    </div>
    </section>
  );
}

export default Counters;
