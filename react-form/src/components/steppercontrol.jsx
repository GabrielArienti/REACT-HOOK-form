import React from "react";
import buttoncontrol from "./button";

const steppercontrol = () => {
  return (
    <div className="container flex justify-around mt-5 mb-8">
      {/* back button */}
      <button
        className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold 
      cursor-pointer border-2 border-slate-300 hover:bg-slate-300 hover:text-white transition 
      duration-2oo ease-in-out "
      ></button>
      {/* next button */}
      <button
        className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold 
      cursor-pointer border-2 border-slate-300 hover:bg-slate-300 hover:text-white transition 
      duration-2oo ease-in-out "
      ></button>
    </div>
  );
};

export default steppercontrol;
