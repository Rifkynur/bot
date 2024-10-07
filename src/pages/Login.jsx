import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <section className="font-Montserrat relative flex h-screen w-full items-center justify-center">
      <div className="flex w-full max-w-[507px] flex-col items-center gap-7">
        <h1 className="text-5xl font-bold">Login</h1>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="email" className="text-2xl text-primary">
            Email
          </label>
          <div className="flex w-full items-center gap-4 rounded-2xl bg-primary p-4 text-white">
            <FaEnvelope className="size-9" />
            <input type="email" id="email" placeholder="example@gmail.com" className="border-l-2 border-white bg-transparent px-2 text-2xl placeholder:text-white focus:outline-none" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="password" className="text-2xl text-primary">
            Password
          </label>
          <div className="flex w-full items-center gap-4 rounded-2xl bg-primary p-4 text-white">
            <FaLock className="size-9" />
            <input type="password" id="password" placeholder="******" className="border-l-2 border-white bg-transparent px-2 text-2xl placeholder:text-white focus:outline-none" />
          </div>
        </div>
        <button className="ms-auto w-fit rounded-2xl bg-primary px-12 py-4 text-2xl font-semibold capitalize text-white">log in</button>
      </div>
    </section>
  );
};

export default Login;
