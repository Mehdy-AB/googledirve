import axiosClient from "@/app/lib/axiosClient";
import FolderDisplay from "./FolderDisplay";
import FolderDisplayTow from "./FolderDisplayTow";
import { useEffect, useState } from "react";
import DisplayFiles from "./DisplayFiles";
import UploadForm from "@/components/UploadForm";
import { useLayoutContext } from "@/components/myContext/myContext";
import Loader from "@/app/lib/Loader";

const Files = ({setSearchContent,goSearch,loader,regetFolder,
  folder
}) => {
    const [showUpoaldModele,setShowUpoaldModele]=useState(false);
    const [folders,setFolders]=useState([]);
    const{setAlerts}=useLayoutContext();
    const getfolders = () => {

      axiosClient
          .get("/backReq/admin/folders", {
              params: { type: "all" }, // Add query parameters here
          })
          .then((response) => {
              setFolders(response.data);
          })
          .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:'error get folders',duration:300}]));
  };
  useEffect(()=>{
      getfolders();
  },[]);

  return (
    <>
    {showUpoaldModele&&
      <UploadForm regetFolder={regetFolder} folderId={folder.id} onClose={()=>setShowUpoaldModele(false)} sidebarOpen={true}/>}
    <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">   
      <div className="grid grid-cols-2 items-center">
        <div className="relative max-w-72">
          <input onChange={(e)=>setSearchContent(e.target.value)} onKeyUp={(e)=>{if(e.key==="Enter"){goSearch()}}}
            className="appearance-none border pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-[0.25rem] px-3 text-gray-800 leading-tight focus:outline-none focus:bg-gray-100  focus:shadow-outline text-sm "
            id="searchFileContent"
            type="text"
            placeholder="Search Files content"
          />
          <div className="absolute right-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 cursor-pointer mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div onClick={goSearch} className="absolute cursor-pointer left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className=" justify-end flex gap-2">
          <button onClick={()=>setShowUpoaldModele(true)} className="flex items-center gap-1 py-1 px-4 border bg-blue-400 text-white rounded-lg hover:opacity-80 font-[450]">
          <svg className=" size-5"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H12M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="CurrentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.5 21L17.5 15M17.5 15L20 17.5M17.5 15L15 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            Upload Folder
          </button>
        </div>
      </div>

      <div className="grid mt-6 items-center grid-cols-2">
        <div >
        </div>
        <div className="flex justify-end">
          <span className="text-sm text-white bg-blue-500 px-2 rounded">
            {folder?.documents?.length || 0} files
          </span>
        </div>
      </div>
      <div className="mt-2 mb-6 grid">
        <div className="grid grid-cols-6 border-b pb-1 px-2">
          <div className="flex items-center justify-start gap-1">
            <span className="">name</span>
          </div>
          <span>size</span>
          <span>Modele</span>
          <span>uploadBy</span>
          <span>createdAt</span>
          <span>lastActive</span>
        </div>
        <div className=" ">
          {loader?
          <div className="flex justify-center items-center my-10"><Loader/></div>
          :
            folder.documents.length > 0 ? (
              folder.documents.map((doc,index) => (
                <DisplayFiles
                folders={folders}
                  key={index}
                  file={doc}
                />
              ))
            ) : (
              <div className="text-center my-8 flex flex-col">
                <span className="font-semibold">Non files !!</span>
                <span
                  onClick={()=>setShowUpoaldModele(true)}
                  className="text-sm underline cursor-pointer"
                >
                  Upload file
                </span>
              </div>
            )}
        </div>
      </div>
    </div>
    </>
  );
};
export default Files;
