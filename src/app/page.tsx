"use client"
import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Accueil from "./Accueil";

export default function Home() {

  const [sidebarOpen,setSidebarOpen] = useState(true);
  return (
    <section className="flex overflow-auto">
      <Header sidebarOpen={false}/>
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      <div className={`className='z-[0]' mt-[2.5rem] duration-300 ease-linear grid h-full w-full p-6 ${sidebarOpen ? "ml-[12rem]":"ml-[4rem]"} `}>
        <Accueil/>
      </div>
    </section>
  );
}
