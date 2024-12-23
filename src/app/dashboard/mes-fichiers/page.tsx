"use client"

import axiosClient from "@/app/lib/axiosClient";
import Files from "@/components/FoldersComponents/Files";
import FilesSearch from "@/components/FoldersComponents/FilesSearch";
import Folder from "@/components/FoldersComponents/Folder";
import OpenPdf from "@/components/FoldersComponents/OpenPdf";
import MetaData from "@/components/admin/Modeles/MetaData";
import { useLayoutContext } from "@/components/myContext/myContext";
import { useEffect, useState } from "react";


const Page=()=>{
    const {
        setAlerts
      } = useLayoutContext();
    const [folders, setFolders] = useState([]);
    const [fileOpen, setFileOpen] = useState(null);
    const [filesOpen, setFilesOpen] = useState<{id:number,name:string,data?}[]>([]);
    
    const getFile =async (fileId) => {
        await axiosClient
            .get("/backReq/admin/document", { params: { type: "download",documentId:fileId },responseType: "blob",})
            .then((response) => {
              const blob = new Blob([response.data], { type: 'application/pdf' });
              const url = URL.createObjectURL(blob);
              setFilesOpen((prev) =>
                prev.map((file) =>
                  file.id === fileId ? { ...file, data: url } : file
                )
              );
              
            })
            .catch(() => setAlerts((prv)=>[...prv,{type:2,message:"error in getting modeles"}]));
    };

    const addFileToOpen = async (file: { id: number; name: string }) => {
        setFilesOpen((prevFilesOpen) => {
          // Check if the file with the same id already exists
          const exists = prevFilesOpen.some((f) => f.id === file.id);
      
          if (exists) {
            
            setFileOpen(file.id);
            setPanel('openFile')
            return prevFilesOpen; // No changes needed
          }
         
          // Add the new file while maintaining a max length of 10
          const updatedFiles = [...prevFilesOpen, file];
          if (updatedFiles.length > 10) {
            updatedFiles.shift(); // Remove the first element
          }
      
          setFileOpen(file.id);
          setPanel('openFile')
          return updatedFiles;
        });
        await getFile(file.id);
    };
      
    const [searchContent, setSearchContent] = useState(null);
    const [loader, setLoader] = useState(true);
    const [currentView, setCurrentView] = useState(null); 
    const [breadcrumb, setBreadcrumb] = useState<{folder:string,id:number}[]>([]);  //
    const [panel, setPanel] = useState<'folders'|'files'|'search'|'openFile'>('folders');
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
        .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in getting folders'}]));
        
    };

    const regetFolder = (folderId) => {
        setLoader(true);
        axiosClient
            .get("/backReq/admin/folders", { params: { type: "folder", folderId } })
            .then((response) => {
                setCurrentView(response.data); // Display subfolders and files of the clicked folder
                setLoader(false);
            })
            .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in getting folders'}]));
            
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
            <div className=" col-span-8 gap-3 font-[500] mt-6">
            <span onClick={()=>{setPanel('folders');setFileOpen(null)}} className={`${panel==='folders'?'text-blue-400 border-b-2 border-blue-400':'hover:text-blue-400 text-gray-500 border-b-2'} cursor-pointer hover:border-blue-400 mx-1`}>Folders</span>
            {currentView&&<span onClick={()=>{setPanel('files');setFileOpen(null)}} className={`${panel==='files'?'text-blue-400 border-b-2 border-blue-400':'hover:text-blue-400 text-gray-500 border-b-2'} cursor-pointer hover:border-blue-400 mx-1`}>Files</span>}
            {panel==='search'&&<span onClick={()=>{setPanel('search');setFileOpen(null)}} className={`${panel==='search'?'text-blue-400 border-b-2 border-blue-400':'hover:text-blue-400 text-gray-500 border-b-2'} cursor-pointer hover:border-blue-400 mx-1`}>search</span>}
            {filesOpen.map((file,index)=><span key={index} onClick={() => { setPanel('openFile'); setFileOpen(file.id); } } className={`${fileOpen === file.id ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-400 text-gray-500 border-b-2'} relative group z-0 bg-white px-2 py-1 cursor-default shadow-sm hover:shadow-xl rounded-t-md w-16 hover:border-blue-400 mx-1`}>{(file?.name.length > 15) ? file.name.slice(0, 15) + '...' : file.name}
                <span className="opacity-0 z-10 group-hover:opacity-100 absolute cursor-pointer bottom-2 right-0" onClick={() => { setTimeout(()=>{setPanel('folders');setFilesOpen((prevFilesOpen) => prevFilesOpen.filter((f) => f.id !== file.id)); setFileOpen(null); },100)} }><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg></span></span>
            )}
            </div>
        </div>
        {panel==='folders'&&<Folder loader={loader} goSearch={(()=>setPanel('search'))} setSearchContent={setSearchContent} createFolder={createFolder} setBreadcrumb={setBreadcrumb} breadcrumb={breadcrumb} goFile={()=>{setPanel('files')}} folders={folders} currentView={currentView} getFolder={getFolder}/>}
        {panel==='files'&& currentView && <Files setFilesOpen={addFileToOpen} regetFolder={regetFolder} loader={loader} goSearch={(()=>setPanel('search'))} setSearchContent={setSearchContent} folder={currentView}/>}
        {panel==='search' && <FilesSearch setFilesOpen={addFileToOpen} defaultContent={searchContent}  />}
        {panel==='openFile'&& fileOpen && <OpenPdf file={filesOpen.find((file)=>file.id===fileOpen)} />}
        </div>
    );
}
export default Page;
