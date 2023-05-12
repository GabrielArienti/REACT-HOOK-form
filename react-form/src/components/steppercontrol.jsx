import React from "react";
import buttoncontrol from "./button";

const steppercontrol = () => {
  return (
    <div className="container flex justify-around mt-5 mb-8">
      {/* back button */}
      <buttoncontrol>Next</buttoncontrol>
      {/* next button */}
      <buttoncontrol>Back</buttoncontrol>
    </div>
  );
};

export default steppercontrol;
