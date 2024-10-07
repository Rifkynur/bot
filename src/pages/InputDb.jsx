import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InputDb = () => {
  const navigate = useNavigate();
  return (
    <section className="font-Montserrat relative flex h-screen w-full">
      <div className="bg-tertary sticky top-0 flex h-screen w-3/12 flex-col justify-between p-5">
        <div>
          <h1 className="mb-20 text-5xl font-bold capitalize">website bot</h1>
          <ul className="flex flex-col gap-11">
            <li className="text-xl font-bold uppercase">auto uploader</li>
            <li className="text-xl font-bold uppercase">auto like</li>
            <li className="text-xl font-bold uppercase">auto comment</li>
          </ul>
        </div>
        <div className="w-full text-right">
          <p className="cursor-pointer text-left text-xl font-bold underline">Iniadmin@admin.com</p>
          <button className="mt-4 rounded-md bg-red-700 px-4 py-2 font-semibold text-white">logout</button>
        </div>
      </div>
      <div className="flex h-screen w-full items-center bg-slate-100 px-20">
        <div className="bg-secondary flex w-[728px] flex-col gap-4 px-10 py-5">
          <h2 className="text-5xl font-bold">Input Data</h2>
          <h3 className="text-center text-xl font-bold uppercase">facebook</h3>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="emailFacebook" className="text-2xl text-primary">
              Email
            </label>
            <div className="flex w-full items-center gap-4 rounded-2xl bg-primary px-4 py-3 text-white">
              <FaEnvelope className="size-9" />
              <input type="email" id="emailFacebook" placeholder="example@gmail.com" className="w-full border-l-2 border-white bg-transparent px-2 text-2xl placeholder:text-white focus:outline-none" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="passwordFacebook" className="text-2xl text-primary">
              Password
            </label>
            <div className="flex w-full items-center gap-4 rounded-2xl bg-primary px-4 py-3 text-white">
              <FaLock className="size-9" />
              <input type="password" id="passwordFacebook" placeholder="******" className="w-full border-l-2 border-white bg-transparent px-2 text-2xl placeholder:text-white focus:outline-none" />
            </div>
          </div>
          <h3 className="text-center text-xl font-bold uppercase">instagram</h3>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="emailInstagram" className="text-2xl text-primary">
              Email
            </label>
            <div className="flex w-full items-center gap-4 rounded-2xl bg-primary px-4 py-3 text-white">
              <FaEnvelope className="size-9" />
              <input type="email" id="emailInstagram" placeholder="example@gmail.com" className="w-full border-l-2 border-white bg-transparent px-2 text-2xl placeholder:text-white focus:outline-none" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="passwordInstagram" className="text-2xl text-primary">
              Password
            </label>
            <div className="flex w-full items-center gap-4 rounded-2xl bg-primary px-4 py-3 text-white">
              <FaLock className="size-9" />
              <input type="password" id="passwordInstagram" placeholder="******" className="w-full border-l-2 border-white bg-transparent px-2 text-2xl placeholder:text-white focus:outline-none" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <button className="w-fit rounded-2xl bg-primary px-6 py-2 text-2xl font-semibold capitalize text-white">log in</button>
            <button onClick={() => navigate("/")} className="w-fit rounded-2xl bg-slate-500 px-6 py-2 text-2xl font-semibold capitalize text-white">
              cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputDb;
