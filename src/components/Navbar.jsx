import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-slate-100 px-28 mt-2">
        <div>
          <img
            className=" h-20 w-auto pr-10 rounded"
            src="https://www.yesbank.in/static_cache/img/new-logo.png"
            alt="YesBank Logo"
          />
        </div>
        <button
          type="submit"
          className=" rounded-3xl transition duration-300 bg-red-600 px-3 py-1.5 font-semibold text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Logout
        </button>
      </div>
    </>
  );
}
