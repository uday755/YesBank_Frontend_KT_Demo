import React from 'react'
import Navbar from './Navbar'
import OnboardingHeader from './OnboardingHeader'

export default function PersonalDetails() {
  return (
    <>
        <Navbar/>
        <div className="flex flex-col justify-start rounded h-screen mx-28 p-4 bg-slate-50 mt-2">
        <OnboardingHeader/>
        <div className="bg-slate-100 my-2 p-5 rounded flex justify-start mx-14 gap-10 ">
          <form action="sumbit" className="space-y-5">
            <div className="flex flex-col justify-center space-y-2">
              <label className="flex gap-1">Constitution Type: 
              </label>
              {/* <input placeholder="First Name" className="p-2 w-[500px] rounded-xl" /> */}
              <select name="constitution" id="constitution" className="p-2 w-[500px] rounded-xl">
                <option value="India" selected="selected">India</option>
                <option value="Singapore">Singapore</option>
                <option value="Dubai">Dubai</option>
                <option value="USA">United States of America</option>
                <option value="Japan">Japan</option>

              </select>
            </div>
            <div className="flex flex-col justify-center space-y-2">
            <label className="flex gap-1">Place of Incorporation 
              </label>
              <input placeholder="Place of Incorporation" className="p-2 w-[500px] rounded-xl" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <label className="flex gap-1">Where do you operate Out of? 
              </label>
              {/* <input placeholder="First Name" className="p-2 w-[500px] rounded-xl" /> */}
              <select name="constitution" id="constitution" className="p-2 w-[500px] rounded-xl">
                <option value="India" selected="selected">India</option>
                <option value="Singapore">Singapore</option>
                <option value="Dubai">Dubai</option>
                <option value="USA">United States of America</option>
                <option value="Japan">Japan</option>

              </select>
            </div>
            <div className="flex flex-col justify-center space-y-2">
            <label className="flex gap-1">Pincode
                <p className="text-red-600 text-xl">*</p>
                </label>
              <input placeholder="Pincode*" maxLength={6} className="p-2 w-[500px] rounded-xl" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
            <label className="flex gap-1">City
                <p className="text-red-600 text-xl">*</p>
                </label>
              <input placeholder="City" className="p-2 w-[500px] rounded-xl" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
            <label className="flex gap-1">State
                <p className="text-red-600 text-xl">*</p>
                </label>
              <input placeholder="State" className="p-2 w-[500px] rounded-xl" />
            </div>
          </form>
          <form action="sumbit" className='space-y-5'>
            <div className="flex flex-col justify-start space-y-2">
            <label className="flex gap-1">Email Address 
                <p className="text-red-600 text-xl">*</p>
                </label>
              <input placeholder="Email Address*" className="p-2 w-[500px] rounded-xl" />
            </div>
            <div className="flex flex-col justify-start space-y-2">
            <label className="flex gap-1">Date of Commencement of Business
                </label>
              <input type='date' className="p-2 w-[500px] rounded-xl" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <label className="flex gap-1">Monthly Revenue
              </label>
              {/* <input placeholder="First Name" className="p-2 w-[500px] rounded-xl" /> */}
              <select name="revenue" id="revenue" className="p-2 w-[500px] rounded-xl">
                <option value="100">Below $100,000 </option>
                <option value="500">Between $100K - $500K $</option>
                <option value="1000">Above $500K </option>

              </select>
            </div>
            <div className="flex flex-col justify-start space-y-2">
            <label className="flex gap-1">Total Experience
            <p className="text-red-600 text-xl">*</p>
                </label>
                <select name="experience" id="experience" className="p-2 w-[500px] rounded-xl">
                <option value="1">Below 1 year </option>
                <option value="3">Between 1 to 3 years</option>
                <option value="5">Between 3 to 5 years</option>
                <option value="5">Between 5 to 10 years</option>
                <option value="11">Above 10 years </option>
              </select>
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
  )
}
