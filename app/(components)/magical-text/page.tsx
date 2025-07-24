import React from "react";
import MagicalText from "./_components/MagicalText";

const MagicalTextPage = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen h-full w-full"
      suppressHydrationWarning>
      <MagicalText />
    </div>
  );
};

export default MagicalTextPage;
