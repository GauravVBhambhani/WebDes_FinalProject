import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import dearDiary from "../../assets/dear-diary.svg";
import unknownUser from "../../assets/unknown-user.svg";
import React, { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[90px] z-10 border-b-2 border-solid">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="ml-10 flex items-center">
          <img src={dearDiary} alt="logo" className="mr-4" />
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>Diary</li>
            <li>Account</li>
          </ul>
        </div>
        <div>
          <img src={unknownUser} alt="logo" className="hidden md:flex mr-4" />
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <Bars3Icon className="w-6" />
            ) : (
              <XMarkIcon className="w-6" />
            )}
          </div>
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute w-full px-8 bg-sky-50"}>
        <li className="border-b-2 ">Diary</li>
        <li className="border-b-2 bg-sky-50 w-full">Home</li>
        <li className="border-b-2 bg-sky-50 w-full">Account</li>
      </ul>
    </div>
  );
}

export default Navbar;
