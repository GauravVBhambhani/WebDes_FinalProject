import React from "react";
import Navbar from "../../components/layout/Navbar";

function Account() {
  return (
    <div>
      <Navbar />
      <div className="w-full px-[100px]">
        <h1 className="border-b-2 h-[120px] text-3xl font-semibold flex items-center">
          Account
        </h1>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4 mx-[100px] my-6">
        <div class="row-span-4 h-[700px]">
          <ul>
            <li className="sidebar-list">Profile</li>
            <li className="sidebar-list">Password</li>
          </ul>
        </div>
        <div class="col-span-3 row-span-1 bg-profile-color rounded-tl-[80px]"></div>
        <div class="row-span-3 col-span-3 ... bg-green-50">03</div>
      </div>
    </div>
  );
}

export default Account;
