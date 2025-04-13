import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import DetailReport from "./components/DetailReport";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Header />
        <div className="px-6">
          <Overview />
          <DetailReport />
        </div>
      </div>
    </div>
  );
}