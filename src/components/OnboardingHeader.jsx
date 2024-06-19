import React from 'react'

export default function OnboardingHeader() {
  return (
    <>
        <div className="flex justify-evenly gap-28 text-white bg-slate-100 p-3">
          <div className="bg-lime-600 p-1 rounded-3xl">
            Let's get to know you better
          </div>
          <div className="bg-red-600 p-1 rounded-3xl">Personal Details</div>
          <div className="bg-red-600 p-1 rounded-3xl">Bank Details</div>
          <div className="bg-red-600 p-1 rounded-3xl">Upload Documents</div>
        </div>
    </>
  )
}
