"use client"

import axiosClient from "@/app/lib/axiosClient";
import Files from "@/components/admin/FoldersComponents/Files";
import FilesSearch from "@/components/admin/FoldersComponents/FilesSearch";
import Folder from "@/components/admin/FoldersComponents/Folder";
import DefualtLayout from "@/components/defualtLayout/DefualtLayout";
import { useLayoutContext } from "@/components/myContext/myContext";
import { useEffect, useState } from "react";


const documentsManagment=()=>{
    const {
        sidebarOpen,
        setSidebarOpen,
        uploadForm,
        setUploadForm,
        uploadFiles,
        setUploadFiles,
        setAlerts
      } = useLayoutContext();
    const [folders, setFolders] = useState([]);
    const [searchContent, setSearchContent] = useState(null);
    const [loader, setLoader] = useState(true);
    const [currentView, setCurrentView] = useState(null); 
    const [breadcrumb, setBreadcrumb] = useState<{folder:string,id:number}[]>([]);  //
    const [panel, setPanel] = useState<'folders'|'files'|'search'>('folders');
    const getWorkspaces = () => {
        setLoader(true);
        axiosClient
            .get("/backReq/admin/folders", {
                params: { type: "workspaces" }, // Add query parameters here
            })
            .then((response) => {
                setFolders(response.data);
                setLoader(false);
            })
            .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in getting workspaces'}]));
    };

 const getFolder = (folderId,name) => {
    if(folderId===-1){
        setCurrentView(null)
        setBreadcrumb([])
        getWorkspaces();
        return;
    }
    setBreadcrumb([...breadcrumb,{folder:name,id:folderId}]);
    setLoader(true);
    axiosClient
        .get("/backReq/admin/folders", { params: { type: "folder", folderId } })
        .then((response) => {
            setCurrentView(response.data); // Display subfolders and files of the clicked folder
            setLoader(false);
        })
        .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:'error in getting folders'}]));
        
    };

    const regetFolder = (folderId) => {
        setLoader(true);
        axiosClient
            .get("/backReq/admin/folders", { params: { type: "folder", folderId } })
            .then((response) => {
                setCurrentView(response.data); // Display subfolders and files of the clicked folder
                setLoader(false);
            })
            .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:'error in getting folders'}]));
            
    };
    const createFolder=(name:string)=>{
        axiosClient
        .post("/backReq/admin/folders", {data:{
          folder_name:name,
          folder_parent_id: currentView?.id ||0,
        }})
        .then(()=>getFolder(currentView.id,currentView.name))
        .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in creating folder'}]));      
    }

    useEffect(()=>{
        getWorkspaces();
    },[]);

    return(
        <DefualtLayout setSidebarOpen={setSidebarOpen} setUploadFiles={setUploadFiles} setUploadForm={setUploadForm} sidebarOpen={sidebarOpen} uploadFiles={uploadFiles} uploadForm={uploadForm}>
        <div className="h-full z-0 w-full py-10 px-30 ">
        <div className="grid items-start grid-cols-2">
            <div className="grid">
            <span className="text-xl font-semibold">File Manager - Folders</span>
            <span className="text-sm text-gray-400">File Manager - Folders</span>
            </div>
            <div className="flex items-end justify-end gap-2">
            <button className="py-1 px-4 border bg-blue-400 text-white rounded-lg hover:opacity-80 font-[450]">create</button>
            <button className="flex items-center py-1 px-4 border bg-gray-200 rounded-lg hover:opacity-80 font-[450]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mr-1">
            <path  strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>

        filter</button>
            </div>
        </div>

        <div className="rounded bg-[#f3f3f7] grid-cols-8 grid shadow-lg ring-1 pt-4 px-8 mx-2 my-6 ring-gray-200">
            <div className=" col-span-6">
            <div className="grid  items-center grid-cols-10">
                <div className=" col-span-1 items-center flex justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
                </div>
                <div className="grid col-span-9">
                <span className=" text-2xl font-semibold">{currentView?currentView.name:'File Manager'}</span>
                <span className="pl-1 text-gray-500">{currentView?`option 1 | ${currentView.subFolders.length} subfolders | ${currentView?.documents.reduce((acc, doc) => acc + doc.size, 0)} MB | ${currentView.documents.length} items`:'option 1 | 50 folders | 2.6GB | 758 items'}</span>
                </div>
            </div>
            </div>
            <div className=" col-span-2">

            </div>
            <div className="flex gap-3 font-[500] mt-6">
            <span onClick={()=>setPanel('folders')} className={`${panel==='folders'?'text-blue-400 border-b-2 border-blue-400':'hover:text-blue-400 text-gray-500 border-b-2'} cursor-pointer hover:border-blue-400`}>Folders</span>
            {currentView&&<span onClick={()=>setPanel('files')} className={`${panel==='files'?'text-blue-400 border-b-2 border-blue-400':'hover:text-blue-400 text-gray-500 border-b-2'} cursor-pointer hover:border-blue-400`}>Files</span>}
            {panel==='search'&&<span onClick={()=>setPanel('search')} className={`${panel==='search'?'text-blue-400 border-b-2 border-blue-400':'hover:text-blue-400 text-gray-500 border-b-2'} cursor-pointer hover:border-blue-400`}>search</span>}
            </div>
        </div>
        {panel==='folders'&&<Folder loader={loader} goSearch={(()=>setPanel('search'))} setSearchContent={setSearchContent} createFolder={createFolder} setBreadcrumb={setBreadcrumb} breadcrumb={breadcrumb} goFile={()=>{setPanel('files')}} folders={folders} currentView={currentView} getFolder={getFolder}/>}
        {panel==='files'&& currentView && <Files regetFolder={regetFolder} loader={loader} goSearch={(()=>setPanel('search'))} setSearchContent={setSearchContent} folder={currentView}/>}
        {panel==='search' && <FilesSearch defaultContent={searchContent}  />}
        </div>
        </DefualtLayout>
    );
}
export default documentsManagment;
