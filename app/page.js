import About from "@/components/About";
import Counters from "@/components/Counters";
import Skills from "@/components/Skills";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-transparent ml-40">
      <div className="flex gap-10  h-screen w-full bg-purple bg-no-repeat bg-cover items-center">
      <div className=" text-white w-1/2 flex justify-center flex-col items-start text-black p-10 ">
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
      <Image src='/images/bro.jpg' className="h-[70%] object-cover rounded-lg" width={400} height={100} alt="gym-bro"/>

     
    </div>

    <Skills/>
    <About/>
    <Counters/>
    <Footer/>
    </main>
  );
}
