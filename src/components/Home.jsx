import puzzleImage from "../assets/puzzle_image.png"
import googleLogo from "../assets/Google_logo.png";
import githubLogo from "../assets/Github_logo.png";
import linkedinLogo from "../assets/Linkedin_logo.png";
import { useState } from "react";
import Login from "../components/Login";
import InternalLogin from "./InternalLogin";
// import { Link } from "react-router-dom";

export default function Home() {
  const [regularUser, setRegularUser] = useState(false);
  return (
    <>
    <div className="flex items-center">
      <div className="w-4/5">
        <img className="h-screen" src={puzzleImage} alt="Puzzle Image" />
      </div>
      <div className="flex flex-col justify-center items-center py-12 w-[60%]">
        <div className="sm:w-full sm:max-w-sm">
          <div className="flex justify-center items-center">
            <img className=" h-20 w-auto pr-10 rounded" src="https://www.yesbank.in/static_cache/img/new-logo.png" alt="doTask" />
          </div>
          <h2 className="mt-5 text-start text-2xl font-bold leading-9 tracking-tight  text-blue-900">
            Hello! Let's get to know you...
          </h2>
        </div>

        <div className="mt-5 sm:w-full sm:max-w-sm">
          <div className="flex justify-start items-center gap-2 mb-2">
            <div className="border-b-4 transition duration-300 hover:border-red-700 rounded">
              <button onClick={()=>{setRegularUser(true)}}>Login</button>
            </div>
            <div className="border-b-4 hover:border-red-700 rounded transition duration-300">
            <button onClick={()=>{setRegularUser(false)}}>Internal Login</button>
            </div>
          </div>
          { regularUser ?
          (<Login/>) : 
          (<InternalLogin/>)
          }
          
          <div className="flex flex-col mt-3 gap-1 justify-center items-center border-t-2">
            <div>or Other Options </div>
            <div className="flex gap-1 justify-center items-center">
              <div>
                <button
                  type="submit"
                  className="flex justify-center items-center w-full gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src={googleLogo}
                    alt="Google"
                    className="h-5 w-5 rounded"
                  />
                  <p className="text-center">Google</p>
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center items-center gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src={githubLogo}
                    alt="Github"
                    className="h-5 w-5 rounded"
                  />
                  <p className="text-center">Github</p>
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center items-center gap-1 rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="h-5 w-5 rounded"
                  />
                  <p className="text-center">LinkedIn</p>
                </button>
              </div>
            </div>
          </div>
          <div className="underline text-center m-2 border-t-2 border-gray-400">
            <a href="#">Don't have an Account? Register here</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
