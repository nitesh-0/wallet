import React from "react";
import { Appbar } from "../components/Appbar";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f7]">
      {/* Top Appbar */}
      <Appbar />

      {/* Main Hero Section */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#dcd6f7] px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/40 to-transparent rounded-full blur-3xl -z-10"></div>

        {/* Content */}
        <h1 className="text-6xl font-extrabold text-gray-900 text-center leading-tight">
          Send Money <span className="text-blue-600">Smarter</span> & Faster
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
          Experience secure, lightning-fast transactions with PayTM Clone.  
          Designed for ease, built for speed, trusted worldwide.
        </p>

        {/* Get Started Button */}
        <button
          onClick={() => navigate("/signup")}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold flex items-center gap-2 transition duration-300"
        >
          Get Started <ArrowRight size={20} />
        </button>

        {/* Feature Cards */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            { title: "Instant Transfers", desc: "Send money in seconds, anytime.", icon: "💸" },
            { title: "Bank-Level Security", desc: "Your funds are protected 24/7.", icon: "🔒" },
            { title: "Global Access", desc: "Send anywhere, no boundaries.", icon: "🌍" }
          ].map((f, idx) => (
            <div
              key={idx}
              className="w-64 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
