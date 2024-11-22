import { useState } from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import UploadProgress from "../UploadProgress";
import UploadForm from "../UploadForm";
import { useLayoutContext } from "../myContext/myContext";


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
      
    return (
      <section className="flex overflow-auto">
        <Header sidebarOpen={false} setUploadForm={setUploadForm}/>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        {uploadFiles.length > 0 && <UploadProgress setFiles={setUploadFiles} files={uploadFiles}/>}
        <div className={`z-[0] mt-[2.5rem] duration-300 ease-linear grid h-[calc((100vh-2.5rem))] w-full px-8 pt-6 ${sidebarOpen ? "ml-[12rem]":"ml-[4rem]"} `}>
          {children}
        </div>
        <div className={`z-[97] duration-300 ease-in ${uploadForm ? "opacity-100 ":"opacity-50"}`}>
              {uploadForm && <UploadForm sidebarOpen={sidebarOpen} onClose={()=> setUploadForm(false)}/>}
        </div>
      </section>
    );
  }
  export default DefualtLayout;