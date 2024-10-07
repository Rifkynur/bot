import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full items-center justify-center gap-6">
      <button onClick={() => navigate("/login")} className="cursor-pointer rounded-xl bg-primary px-6 py-3 text-xl font-bold text-white">
        login page
      </button>
      <button onClick={() => navigate("/inputDb")} className="cursor-pointer rounded-xl bg-primary px-6 py-3 text-xl font-bold text-white">
        input page
      </button>
    </div>
  );
};

export default Home;
