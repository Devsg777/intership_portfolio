import React from 'react'
import { LuBrainCircuit } from "react-icons/lu";

function Skills() {
  return (
    <section className='bg-white'>
        <h1 className=' text-3xl font-bold text-center py-10 '>My Skills</h1>
        <div className='grid  grid-cols-3 gap-20  px-20 py-10 '>
        <div className="flex flex-col gap-5">
        <div className="flex  gap-5 items-center justify-between">
          <div className="flex flex-col ">
          <h1 className="text-[15px]">01</h1>
          <h2 className="text-[20px] text-orange-400 ">Dediction</h2>
          </div>
          <LuBrainCircuit size={30}/>
        </div>
        <hr  className=" bg-black h-[2px]"/>
        <div>
          <p className="text-[10px]">
            Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
            aliquip ex ea commo do conse namber onequat.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex  gap-5 items-center justify-between">
          <div className="flex flex-col ">
          <h1 className="text-[15px]">01</h1>
          <h2 className="text-[20px] text-orange-400 ">Dediction</h2>
          </div>
          <LuBrainCircuit size={30}/>
        </div>
        <hr  className=" bg-black h-[2px]"/>
        <div>
          <p className="text-[10px]">
            Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
            aliquip ex ea commo do conse namber onequat.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex  gap-5 items-center justify-between">
          <div className="flex flex-col ">
          <h1 className="text-[15px]">01</h1>
          <h2 className="text-[20px] text-orange-400 ">Dediction</h2>
          </div>
          <LuBrainCircuit size={30}/>
        </div>
        <hr  className=" bg-black h-[2px]"/>
        <div>
          <p className="text-[10px]">
            Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
            aliquip ex ea commo do conse namber onequat.
          </p>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Skills