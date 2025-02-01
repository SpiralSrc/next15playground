import React from "react";

const Bg = () => {
  return (
    <div className="w-screen h-screen absolute -z-50 bg-gradient-to-l from-gray-400 to-gray-700">
      <div className="w-full h-full backdrop-blur-md bg-black/20 -z-40" />
    </div>
  );
};

export default Bg;
