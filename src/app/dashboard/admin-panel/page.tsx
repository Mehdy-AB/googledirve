"use client"

import AdminPanels from "@/components/admin/AdminPanels";
import DefualtLayout from "@/components/defualtLayout/DefualtLayout"
import { useLayoutContext } from "@/components/myContext/myContext";
import { useState } from "react";

const adminPanel=()=>{
  const [adminTab,setAdminTab]=useState<1|2|3|4>(3);
    const {
        sidebarOpen,
        setSidebarOpen,
        uploadForm,
        setUploadForm,
        uploadFiles,
        setUploadFiles,
      } = useLayoutContext();
    return(
        <DefualtLayout setSidebarOpen={setSidebarOpen} setUploadFiles={setUploadFiles} setUploadForm={setUploadForm} sidebarOpen={sidebarOpen} uploadFiles={uploadFiles} uploadForm={uploadForm}>
          <div>
            <div className=" flex mx-[30%] border-t-2 gap-1 justify-center  ">
               <button onClick={()=>{setAdminTab(1)}} className={`${adminTab===1?"bg-blue-400 text-white border-blue-300":"bg-white hover:bg-gray-100"} rounded-b-3xl border-l border-r shadow-lg hover:shadow-md border-b  py-2 px-6 text-lg`}>Work Flow</button>
               <button onClick={()=>{setAdminTab(2)}} className={`${(adminTab ===2)?"bg-blue-400 text-white ":"bg-white hover:bg-gray-100"} rounded-b-3xl border-l border-r shadow-lg hover:shadow-md border-b  py-2 px-6 text-lg`}>Uitlisateur</button>
               <button onClick={()=>{setAdminTab(3)}} className={`${adminTab===3?"bg-blue-400 text-white border-blue-300":"bg-white hover:bg-gray-100"} rounded-b-3xl border-l border-r shadow-lg hover:shadow-md border-b  py-2 px-6 text-lg`}> Documents</button>   
               <button onClick={()=>{setAdminTab(4)}} className={`${adminTab===4?"bg-blue-400 text-white border-blue-300":"bg-white hover:bg-gray-100"} rounded-b-3xl border-l border-rshadow-lg hover:shadow-md border-b  py-2 px-6 text-lg`}>System</button>
           
            </div>
            <AdminPanels panel={adminTab} />
          </div>
        </DefualtLayout>
    );

}
export default adminPanel;