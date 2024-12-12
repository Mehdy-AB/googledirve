import axiosClient from "@/app/lib/axiosClient";
import { useEffect, useState } from "react";

const FolderInfo=({folder})=>{
useEffect(()=>console.log(folder),[folder])
return(
    <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">
           <div className="grid grid-cols-8">
            <div className="col-span-1 justify-center flex">
            <img src='https://readymadeui.com/profile_2.webp' className="w-28 h-28 rounded-full shrink-0" />
            </div>
            <div className="col-span-6 text-2xl flex mt-4 flex-col">
                <span className=" font-semibold">{folder?.fullName}</span>
                <span className="text-lg">{folder?.email}</span>
            </div>
            <div className="items-center flex flex-col justify-center">
            Active
            <label className="relative flex  cursor-pointer">
                                
                                        <input type="checkbox" className="sr-only peer"  />
                                        <div
                                            className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]">
                                        </div>
            </label></div>
            </div> 
        <div className="border my-6 mx-8"></div> 
        <div className="grid grid-cols-3 px-16">
            <div className="flex flex-col font-semibold">
                <label className="text-lg">folderName</label>
                <span className="flex text-gray-800 items-center">{folder?.foldername}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </span>
            </div>
            <div className="flex flex-col font-semibold">
                <label className="text-lg">jobTitle</label>
                <span className="flex text-gray-800 items-center">{folder?.jobTitle}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </span>
            </div>
            <div className="flex flex-col font-semibold">
                <label className="text-lg">role</label>
                <span className="flex text-gray-800 items-center">{folder?.role}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </span>
            </div>
        </div>   
        <div className="my-8  "></div> 
        <div className="grid grid-cols-3 px-16">
            <div className="flex flex-col font-semibold">
                <label className="text-lg">password</label>
                <span className="flex text-gray-800 items-center">.......
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </span>
            </div>
            <div className="flex flex-col font-semibold">
                <label className="text-lg">createdAt</label>
                <span className="flex text-gray-800 items-center">{new Date(folder?.createdAt).toLocaleString()}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </span>
            </div>
            <div className="flex flex-col font-semibold">
                <label className="text-lg">lastActive</label>
                <span className="flex text-gray-800 items-center">{new Date(folder?.lastActive).toLocaleString()}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </span>
            </div>
            
        </div> 
        <div className="flex mt-14 mx-8 justify-end">
                <button
                    className="hover:shadow-form  rounded-md bg-blue-400 py-3 px-6 text-center text-base font-semibold text-white outline-none">
                    Mise à jour
                </button>
        </div>
        <div className="border mb-6 mt-2 mx-8"></div>         
    </div>
);

}
export default FolderInfo;