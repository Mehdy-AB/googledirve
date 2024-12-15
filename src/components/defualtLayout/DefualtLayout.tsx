import Header from "../Header";
import SideBar from "../SideBar";
import UploadProgress from "../UploadProgress";
import UploadForm from "../UploadForm";
import AlertsHandeler from "../AlertsHandeler";
import { useState } from "react";
import AdminPanels from "../admin/tabs/AdminPanels";
import DropDown from "../DropDown";


const DefualtLayout=({
    children,
    sidebarOpen,
    setSidebarOpen,
    uploadForm,
    setUploadForm,
    uploadFiles,
    setUploadFiles,
  }: {
    children: React.ReactNode,
    sidebarOpen,
    setSidebarOpen,
    uploadForm,
    setUploadForm,
    uploadFiles,
    setUploadFiles,
  })=> {
      const [adminPanels,setAdminPanels]=useState(false);
    return (
      <>
      <div>
      <AlertsHandeler />
      </div>
      <section className="flex overflow-auto">
        <Header setAdminPanels={setAdminPanels} sidebarOpen={false} adminPanels={adminPanels} setUploadForm={setUploadForm} />
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {uploadFiles.length > 0 && <UploadProgress setFiles={setUploadFiles} files={uploadFiles} />}
        <div className={`z-[0] mt-[2.5rem] duration-300 ease-linear grid h-[calc((100vh-2.5rem))] w-full px-8 pt-6 ${sidebarOpen ? "ml-[12rem]" : "ml-[4rem]"} `}>
          {children}
        </div>
        <div className={`z-[97] duration-300 ease-in ${uploadForm ? "opacity-100 " : "opacity-50"}`}>
          {/* {uploadForm && <UploadForm sidebarOpen={sidebarOpen} onClose={() => setUploadForm(false)} folderId={0} />} */}
        </div>
        <div className={`${adminPanels?'opacity-100':'opacity-0'} duration-200 transition-opacity`}>{adminPanels&&
        <DropDown setIsShow={setAdminPanels}><AdminPanels onClose={()=>setAdminPanels(false)} sidebarOpen={sidebarOpen}/></DropDown>}</div>
      </section>
      </>
    );
  }
  export default DefualtLayout;