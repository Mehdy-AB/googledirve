import axiosClient from "@/app/lib/axiosClient";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const DocumentsManagment=()=>{

    const [folders, setFolders] = useState([]);

    const getFolders=()=>{
        axiosClient.get("/backReq/admin/folders")
      .then((response) => setFolders(response.data))
      .catch((error) => console.error(error));
    }

    useEffect(()=>{console.log(folders)},[folders])
    useEffect(()=>{
        getFolders();
    },[]);

    return(
        <div className="h-full w-full py-10 px-60 ">
        <div className="grid items-start grid-cols-2">
            <div className="grid">
            <span className="text-xl font-semibold">File Manager - Folders</span>
            <span className="text-sm text-gray-400">File Manager - Folders</span>
            </div>
            <div className="flex items-end justify-end gap-2">
            <button className="py-1 px-4 border bg-blue-400 text-white rounded-lg hover:opacity-80 font-[450]">create</button>
            <button className="flex items-center py-1 px-4 border bg-gray-200 rounded-lg hover:opacity-80 font-[450]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>

        filter</button>
            </div>
        </div>

        <div className="rounded bg-[#f3f3f7] grid-cols-8 grid shadow-lg ring-1 pt-4 px-8 mx-2 my-6 ring-gray-200">
            <div className=" col-span-6">
            <div className="grid  items-center grid-cols-8">
                <div className=" col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
                </div>
                <div className="grid col-span-7">
                <span className=" text-2xl font-semibold">File Manager</span>
                <span className="pl-1 text-gray-500">option 1 | 50 folders | 2.6GB | 758 items</span>
                </div>
            </div>
            </div>
            <div className=" col-span-2">

            </div>
            <div className="flex gap-3 font-[500] mt-6">
            <span className="text-blue-400 cursor-pointer border-b-2 border-blue-400">Files</span>
            <span className="hover:text-blue-400 text-gray-500 cursor-pointer hover:border-b-2 hover:border-blue-400">Settings</span>
            </div>
        </div>

        <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">
            <div className="grid grid-cols-2 items-center">
            <div className="relative max-w-72">
            <input
                className="appearance-none border pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-[0.25rem] px-3 text-gray-800 leading-tight focus:outline-none focus:bg-gray-100  focus:shadow-outline text-sm "
                id="username"
                type="text"
                placeholder="Search Files & Folders"
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
            <div className=" justify-end flex gap-2">
                    <button className="py-1 flex items-center gap-1 px-4 border bg-blue-400 text-white rounded-lg hover:opacity-80 font-[450]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>
                    New Folder
                    </button>
            <button className="flex items-center gap-1 py-1 px-4 border bg-gray-200 rounded-lg hover:opacity-80 font-[450]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>


        Upload Folder</button>
            </div>
            </div>

            <div className="grid mt-6 items-center grid-cols-2">
            <div className="gap-1 flex w-fit items-center px-2 text-blue-500 font-[500] rounded bg-blue-200">
                <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className="size-5">
                    <g  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Development" transform="translate(-480.000000, -48.000000)" fill-rule="nonzero">
                            <g id="directory_fill" transform="translate(480.000000, 48.000000)">
                                <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="currentColor">

                </path>
                                <path d="M6,3 C4.34315,3 3,4.34315 3,6 C3,7.30622 3.83481,8.41746 5,8.82929 L5,17 C5,18.6569 6.34315,20 8,20 L15.1707,20 C15.5825,21.1652 16.6938,22 18,22 C19.6569,22 21,20.6569 21,19 C21,17.3431 19.6569,16 18,16 C16.6938,16 15.5825,16.8348 15.1707,18 L8,18 C7.44772,18 7,17.5523 7,17 L7,13 L15.1707,13 C15.5825,14.1652 16.6938,15 18,15 C19.6569,15 21,13.6569 21,12 C21,10.3431 19.6569,9 18,9 C16.6938,9 15.5825,9.83481 15.1707,11 L7,11 L7,8.82929 C8.16519,8.41746 9,7.30622 9,6 C9,4.34315 7.65685,3 6,3 Z" id="路径" fill="currentColor">

                </path>
                            </g>
                        </g>
                    </g>
                </svg>
                <span className="gap-1 items-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span className=" cursor-pointer hover:underline">dossier</span></span>
            </div>
            <div className="flex justify-end">
                <span className="text-sm text-white bg-blue-500 px-2 rounded">88 items</span>
            </div>
            </div>
            <div className="mt-2 mb-6 grid">
            <div className="grid grid-cols-6 border-b pb-1 px-2">
                <div className="flex items-center justify-start gap-1">
                <input type="checkbox" className=" text-gray-200"/>
                <span className="">name</span>
                </div>
                <span>size</span>
                <span>files</span>
                <span>subFolders</span>
                <span>createdAt</span>
                <span>lastActive</span>
            </div>
            <div className="max-h-[50rem] overflow-y-auto ">
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>
                <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
                    <div className="flex items-center justify-start gap-2">
                    <input type="checkbox" className=" bg-gray-400"/>
                    <span className="flex hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                        name</span>
                    </div>
                    <span>2.gb</span>
                    <span>80</span>
                    <span>20</span>
                    <span>2024-11-29T17:31</span>
                    <span>2024-11-29T17:31</span>
                </div>

            </div>
            </div>
        </div>

        </div>
    );
}
export default DocumentsManagment;
