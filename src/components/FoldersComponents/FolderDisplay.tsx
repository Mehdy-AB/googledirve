import axiosClient from "@/app/lib/axiosClient";
import { formatBitSize } from "@/app/lib/valuesConvert";
import { useLayoutContext } from "@/components/myContext/myContext";
import { useEffect, useState } from "react";

const FolderDisplay=({id,getFolder,setCheckedFolders,checkedFolders})=>{
    const [folder,setFolder]=useState<any>();
    const {setAlerts}=useLayoutContext();
    const getFolderContent = () => {
        axiosClient
            .get("/backReq/admin/folders", { params: { type: "folder", folderId:id } })
            .then((response) => {
                setFolder(response.data); // Display subfolders and files of the clicked folder
            })
            .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:'error in getting folder'}]));
        };
    useEffect(getFolderContent,[]);
    
return(
    <div
                className="items-center grid grid-cols-6 py-2 border-b pb-1 hover:bg-gray-200 px-2"
            >
                {/* Folder Details */}
                <div className="flex items-center justify-start gap-2">
                <label className="flex items-center cursor-pointer relative" htmlFor={"check"+folder?.id}>
                    <input type="checkbox" onChange={(e)=>{setCheckedFolders(e.target.checked?checkedFolders.concat(folder.id):checkedFolders.filter((id)=>id!==folder.id))}} checked={checkedFolders.includes(folder?.id)}
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-secondColor checked:border-secondColor"
                    id={"check"+folder?.id} />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                    </span>
                </label>
                    <span onClick={()=>{getFolder(folder?.id,folder?.name)}} className="flex underline hover:text-blue-600 cursor-pointer items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                            />
                        </svg>
                        {folder?.name}
                    </span>
                </div>
                <span>{formatBitSize(folder?.documents.reduce((acc, doc) => acc + doc.size, 0))}</span>
                <span>{folder?.documents.length}</span>
                <span>{folder?.subFolders?.length}</span>
                <span>{new Date(folder?.createdAt).toLocaleString()}</span>
                <span>
                {new Date(folder?.documents[0]?.user.lastActive || folder?.createdAt).toLocaleString()}
                </span>
            </div>
);
}
export default FolderDisplay;