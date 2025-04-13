// src/components/Sidebar.jsx
import React from "react";
import Logo from "../assets/Logo.svg";
import Side from "../assets/Side.svg";


const Sidebar = () => (
    <div className="w-64 h-screen bg-white border-r p-4 flex flex-col">
        <div className="flex items-center mb-6">
            <img src={Logo} alt="Logo" className="" />
        </div>
        <nav className="flex flex-col gap-4">
            {["Dashboard", "Projects", "Teams", "Analytics", "Messages", "Integrations"].map(item => (
                <button key={item} className="text-left px-2 py-2 rounded-lg hover:bg-pink-100 text-pink-600 font-semibold">
                    {item}
                </button>
            ))}
        </nav>
        <div className="mt-auto bg-pink-50 rounded-xl p-4 text-sm">
            <img src={Side} alt="Try now" className="mb-2" />
            <div className="font-semibold">V2.0 is available</div>
            <button className="mt-2 w-full px-4 py-2 rounded bg-pink-600 text-white">Try now</button>
        </div>
    </div>
);

export default Sidebar;
