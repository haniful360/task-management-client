import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="flex min-h-screen max-w-[1440px] mx-auto">
      {/* Sidebar */}
      <Sidebar />

      <main className="shadow-md w-[1187px]">
        {/* Header */}
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Dashboardlayout;
