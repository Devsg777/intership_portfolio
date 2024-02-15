import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="flex gap-10  h-screen w-full bg-purple bg-no-repeat bg-cover justify-center items-center">
      <Image
        src="/images/bro.jpg"
        className="h-[70%] object-cover rounded-lg"
        width={400}
        height={100}
        alt="gym-bro"
      />
      <div className="bg-white rounded-2xl w-40 h-16  flex  gap-3 justify-center items-center relative bottom-40 right-20">
        <h3 className="text-5xl font-semibold text-orange-400"> 12 </h3>
        <h4>Year experiance</h4>
      </div>
      <div className="text-white w-1/2 flex justify-center flex-col items-start text-black p-10 ">
        <h2 className="text-[40px]">Hello I'm</h2>
        <h1 className="text-[60px] font-bold">Dev </h1>
        <h3 className="text-[20px] font-semibold">
          Web Developer from Karnataka
        </h3>
        <p className="mt-3">
          Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum
          dolore
        </p>
        <div className="flex gap-5 items-center mt-3">
          <button className="bg-orange-400 hover:bg-black hover:text-white transition-all duration-1000 hover:scale-110 w-32 h-10 rounded-3xl ">
            Download
          </button>
          <button>About</button>
        </div>
      </div>
    </div>
  );
}

export default About;
