import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col max-w-lg mx-auto">
        <div className="">
          <h1 className="my-4 text-4xl font-bold text-center">Sign In</h1>
          <form action="" className="flex flex-col gap-4">
            <input
              type="email"
              className="p-3 rounded bg-slate-200"
              placeholder="Email"
              id="email"
            />
            <input
              type="password"
              className="p-3 rounded bg-slate-200"
              placeholder="Password"
              id="password"
            />
            <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
