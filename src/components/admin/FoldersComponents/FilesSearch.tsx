import axiosClient from "@/app/lib/axiosClient";
import FolderDisplay from "./FolderDisplay";
import FolderDisplayTow from "./FolderDisplayTow";
import { useEffect, useState } from "react";
import DisplayFiles from "./DisplayFiles";
import UploadForm from "@/components/UploadForm";
import { useLayoutContext } from "@/components/myContext/myContext";

const FilesSearch = ({defaultContent}) => {
    const [files,SetFiles]=useState([]);
    const [folders,setFolders]=useState([]);
    const [content,setContent]=useState(defaultContent);
    const{setAlerts}=useLayoutContext();
    const getfolders = () => {

      axiosClient
          .get("/backReq/admin/folders", {
              params: { type: "all" }, // Add query parameters here
          })
          .then((response) => {
              setFolders(response.data);
          })
          .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error get folders',duration:300}]));
  };
  useEffect(()=>{
      getfolders();
      getFileByContent();
  },[]);
  const getFileByContent = () => {
    if(!content||content?.trim().length ===0 ){setAlerts((prv)=>[...prv,{type:3,message:'cant set content empty.'}]);return;}
    axiosClient
        .get("/backReq/admin/document", {
            params: { type: "content",content:content }, // Add query parameters here
        })
        .then((response) => {
            SetFiles(response.data);
        })
        .catch(() => setAlerts((prv)=>[...prv,{type:3,message:'error in get files.'}]));
  };
  return (
    <>
    <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">   
      <div className="grid grid-cols-2 items-center">
        <div className="relative max-w-72">
          <input value={content} onChange={(e)=>setContent(e.target.value)} onKeyUp={(e)=>{if(e.key==="Enter"){getFileByContent()}}}
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

          <div className="absolute left-0 inset-y-0 flex items-center">
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
      </div>

      <div className="grid mt-6 items-center grid-cols-2">
        <div >
        </div>
        <div className="flex justify-end">
          <span className="text-sm text-white bg-blue-500 px-2 rounded">
            {files.length || 0} files
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
          {
            files.length > 0 ? (
              files.map((doc,index) => (
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
                  className="text-sm cursor-pointer"
                >
                  Upload file and try again.
                </span>
              </div>
            )}
        </div>
      </div>
    </div>
    </>
  );
};
export default FilesSearch;
