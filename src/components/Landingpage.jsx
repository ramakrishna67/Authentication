import React, { useState } from "react";
import "../App.css";

const Landingpage = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="h-52 w-52 absolute rounded-full bg-gradient-to-b from-blue-900 to-sky-500 left-[-80px] top-[-80px]"></div>
        <div className="h-52 w-52  fixed rounded-full bg-gradient-to-b from-amber-600 to-orange-600 right-[-80px] bottom-[-80px]"></div>
        <div className="flex flex-col h-2/3 w-96 bg-white/[0.13] translate-[-50%,-50%] justify-center">
          <p className="text-slate-50 text-2xl">Welcome!!!</p>
          <form className="flex flex-col gap-3 m-5 mt-10 ">
            {!isloggedin && (
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="m-2 p-2 w-52 text-sm text-cyan-300 bg-transparent outline-none border-b-2"
              />
            )}
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="m-2 p-2 w-52 text-sm text-cyan-300 bg-transparent outline-none border-b-2"
            />
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="m-2 p-2 w-52 text-sm text-cyan-300 bg-transparent outline-none border-b-2"
            />
            <button className="h-10 w-36 bg-slate-700 text-white text-md rounded-xl">
              {!isloggedin ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="p-3 flex text-slate-50 gap-2 mt-3">
            <p>{!isloggedin ? "Have an account?" : "Don't have an account?"}</p>
            <p
              onClick={() => {
                setIsloggedin(!isloggedin);
              }}
              className="cursor-pointer"
            >
              {!isloggedin ? "Login" : "Sign up"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
