import React from 'react'
import card1 from "../../assets/images/card1.png";
import { LuTrendingUpDown } from "react-icons/lu"
import BrandTitle from "../BrandTitle";

const Authlayout = ({children}) => {
  return <div className='flex'>
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <BrandTitle />
        {children}
      </div>

      {/* Right panel: centered card1 image inside colored container */}
      <div className='hidden md:block w-[40vw] h-screen bg-green-100 overflow-hidden p-8 relative'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-[88%] h-[75%] bg-violet-100 rounded-3xl border border-gray-200/60 shadow-xl flex items-center justify-center'>
            <img
              src={card1}
              className='w-[85%] h-auto object-contain'
              alt='Card Visual'
            />
          </div>
        </div>
      </div>
    </div>;
};

export default Authlayout

const StatsInfoCard =({icon, label, value, color}) =>{
  return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-20'>
        <div 
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
            >{icon}
        </div>

        <div>
            <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
            <span className='text-[20px]'>${value}</span>
        </div>
  </div>
}
