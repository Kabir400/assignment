import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <div className="flex justify-between items-center border-b-2 p-4">
      <h2 className="text-2xl font-bold">Logo</h2>
      <div className="flex gap-1 items-center p-1 border-2 rounded-lg">
        <Image
          src="/avater.png"
          className="w-[30px] h-[25px] "
          alt="Profile"
          width={200}
          height={200}
        />
        <p className="text-sm font-bold">Rehil Siddique</p>
      </div>
    </div>
  );
}

export default Nav;
