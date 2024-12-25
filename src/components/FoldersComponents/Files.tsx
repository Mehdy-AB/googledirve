import axiosClient from "@/app/lib/axiosClient";
import FolderDisplay from "./FolderDisplay";
import FolderDisplayTow from "./FolderDisplayTow";
import { useCallback, useEffect, useState } from "react";
import DisplayFiles from "./DisplayFiles";
import UploadForm from "@/components/UploadForm";
import { useLayoutContext } from "@/components/myContext/myContext";
import Loader from "@/app/lib/Loader";
import { useDropzone } from "react-dropzone";

const Files = ({setSearchContent,goSearch,loader,setCheckedFolders,checkedFolders,regetFolder,setFilesOpen,
  folder
}) => {
    const [showUpoaldModele,setShowUpoaldModele]=useState(false);
    const [folders,setFolders]=useState([]);
    const [file,setFile]=useState<File>();
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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setShowUpoaldModele(true);
  }, []);
  
  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    noClick: true,
    accept: {
      "application/pdf": [], // Accept PDFs
    },

  });

  return (
    <>
    {showUpoaldModele&&
      <UploadForm defualtfile={file} regetFolder={regetFolder} folderId={folder.id} onClose={()=>{setShowUpoaldModele(false);setFile(null)}}/>}
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
            <label className="flex items-center cursor-pointer relative" htmlFor={"check"}>
                    <input type="checkbox" onChange={(e)=>{if(e.target.checked){setCheckedFolders(folder.documents.map(folder=>folder.id))}else{setCheckedFolders([])}}} checked={folder.documents.length===checkedFolders.length&&checkedFolders.length>0}
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-secondColor checked:border-secondColor"
                    id={"check"} />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                    </span>
            </label>
            <span className="">name</span>
          </div>
          <span>size</span>
          <span>Modele</span>
          <span>uploadBy</span>
          <span>createdAt</span>
          <span>lastActive</span>
        </div>
        <div {...getRootProps()} className=" ">
        <input {...getInputProps()} accept="application/pdf" className="hidden"/>
        {isDragActive ? (
        <div className="py-20 bg-white w-full h-full px-2">
          <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                  <div className="w-full p-3">
                      <div className="relative h-48 rounded-lg border-dashed border-2 border-blue-400 bg-gray-100 flex justify-center items-center">
      
                        <div className="absolute">
                          
                          <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                          </svg>

                          <span className="block text-gray-400 font-normal">Attach you files here</span>
                          </div>
                        </div>
      
                      </div>
                  </div>
              </div>
          </div>
      </div>
      ) :(
          loader?
          <div className="flex justify-center items-center my-10"><Loader/></div>
          :
            folder.documents.length > 0 ? (
              folder.documents.map((doc,index) => (
                <DisplayFiles
                setCheckedFolders={setCheckedFolders}
                checkedFolders={checkedFolders}
                setFilesOpen={setFilesOpen}
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
            ))}
        </div>
      </div>
    </div>
    </>
  );
};
export default Files;
