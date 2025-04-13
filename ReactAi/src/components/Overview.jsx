// src/components/Overview.jsx
import React from "react";
import Logo from "../assets/Overview.png";
const Overview = () => (
    <div className="my-6">
        <div className="flex items-center mb-4">
            <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold text-pink-600">Overview</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
            {[
                { label: "Turnover", value: "$92,405", change: "+ 5.39%", color: "bg-pink-50" },
                { label: "Profit", value: "$32,218", change: "+ 5.39%", color: "bg-blue-50" },
                { label: "New customer", value: "298", change: "+ 6.84%", color: "bg-blue-50" },
            ].map((item, i) => (
                <div key={i} className={`${item.color} text-black rounded-xl shadow p-4`}>
                    <div className="text-sm">{item.label}</div>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-green-500 text-sm">{item.change} period of change</div>
                </div>
            ))}
        </div>
    </div>
);

export default Overview;
