import Header from "../Header";
import SideBar from "../SideBar";
import UploadForm from "../UploadForm";
import AlertsHandeler from "../AlertsHandeler";
import { useState } from "react";
import AdminPanels from "../admin/tabs/AdminPanels";
import DropDown from "../DropDown";
import CustemSearch from "../CustemSearch";


const DefualtLayout=({
    children,
    uploadForm,
    setUploadForm,
  }: {
    children: React.ReactNode,
    uploadForm,
    setUploadForm,
  })=> {
      const [adminPanels,setAdminPanels]=useState(false);
    return (
      <>
      <div>
      <AlertsHandeler />
      </div>
      <section className="flex overflow-auto">
        <Header setAdminPanels={setAdminPanels} adminPanels={adminPanels} setUploadForm={setUploadForm} />
        <SideBar/>
        <div className={`z-[0] mt-[5rem] duration-300 ease-linear grid h-[calc((100vh-5rem))] w-full px-8 pt-6 ml-[16rem] `}>
          {children}
        </div>
        <div className={`z-[97] duration-300 ease-in ${uploadForm ? "opacity-100 " : "opacity-50"}`}>
          {/* {uploadForm && <UploadForm sidebarOpen={sidebarOpen} onClose={() => setUploadForm(false)} folderId={0} />} */}
        </div>
        <div className={`${adminPanels?'opacity-100':'opacity-0'} duration-200 transition-opacity`}>{adminPanels&&
        <DropDown setIsShow={setAdminPanels}><AdminPanels onClose={()=>setAdminPanels(false)}/></DropDown>}</div>
      </section>
      </>
    );
  }
  export default DefualtLayout;