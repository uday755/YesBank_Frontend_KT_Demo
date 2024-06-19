import React from "react";
import Navbar from "./Navbar";
import OnboardingHeader from "./OnboardingHeader";

export default function OnboardingPan() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start rounded h-screen mx-28 p-4 bg-slate-50 mt-2">
        <OnboardingHeader/>
        <div className="p-3">
          <p className="text-xs mx-14">
            Please share the below details to register as YES Partner
          </p>
        </div>
        <div className="bg-slate-100 p-5 rounded flex justify-start mx-14 gap-10 ">
          <form action="sumbit" className="space-y-5">
            <div className="flex flex-col justify-center space-y-2">
              <label className="flex gap-1">First Name 
                <p className="text-red-600 text-xl">*</p>
                (As per PAN Card)</label>
              <input placeholder="First Name" className="p-2 w-[500px] rounded-xl" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
            <label className="flex gap-1">Middle Name 
                <p className="text-red-600 text-xl">*</p>
                (As per PAN Card)</label>
              <input placeholder="Middle Name" className="p-2 w-[500px] rounded-xl" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
            <label className="flex gap-1">Last Name 
                <p className="text-red-600 text-xl">*</p>
                (As per PAN Card)</label>
              <input placeholder="Last Name" className="p-2 w-[500px] rounded-xl" />
            </div>
          </form>
          <form action="sumbit">
            <div className="flex flex-col justify-start space-y-2">
            <label className="flex gap-1">PAN Card Number 
                <p className="text-red-600 text-xl">*</p>
                </label>
              <input placeholder="PAN Number" className="p-2 w-[500px] rounded-xl" maxLength={10} />
            </div>
          </form>
        </div>
        <div>
            <p className="text-xs mx-14 my-2">Please note that you will need your PAN card, Aadhar card, Signature, Passport Size Picture, Bank Statement to complete this journey. Kindly keep it ready.</p>
        </div>
        <div className="flex justify-end mx-20">
          <button
            type="submit"
            className=" rounded-3xl transition duration-300 bg-red-600 px-3 py-1.5 font-semibold text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Submit Information
          </button>
        </div>
      </div>
    </>
  );
}
