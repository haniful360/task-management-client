import Header from "@/components/Header/Header";
import MainContent from "@/components/MainContent/MainContent";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-[1440px] mx-auto">
      {/* Sidebar */}
      <Sidebar />

      <main className="shadow-md w-[1187px]">
        {/* Header */}
        <Header />
        {/* main Content */}
        <MainContent />
      </main>
    </div>
  );
}
