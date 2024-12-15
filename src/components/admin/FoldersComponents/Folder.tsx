import axiosClient from "@/app/lib/axiosClient";
import FolderDisplay from "./FolderDisplay";
import FolderDisplayTow from "./FolderDisplayTow";
import { useEffect, useState } from "react";
import { useLayoutContext } from "@/components/myContext/myContext";
import Loader from "@/app/lib/Loader";

const Folder = ({
  currentView,
  folders,
  getFolder,
  goFile,
  breadcrumb,
  createFolder,
  setBreadcrumb,
  setSearchContent,
  goSearch,
  loader,
}: {
  currentView;
  folders;
  getFolder;
  goFile;
  createFolder;
  breadcrumb: { folder: string; id: number }[];
  setBreadcrumb;
  setSearchContent;
  goSearch;
  loader;
}) => {
    const [edit,setEdit]=useState<string>(null);
  return (
    <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">
      <div className="grid grid-cols-2 items-center">
        <div className="relative max-w-72">
          <input onChange={(e)=>setSearchContent(e.target.value)} onKeyUp={(e)=>{if(e.key==="Enter"){goSearch()}}}
            className="appearance-none border pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-[0.25rem] px-3 text-gray-800 leading-tight focus:outline-none focus:bg-gray-100  focus:shadow-outline text-sm "
            id="searchFileContent"
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

          <div onClick={goSearch} className="absolute left-0 inset-y-0 flex items-center">
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
          <button onClick={()=>setEdit(' ')} className="py-1 flex items-center gap-1 px-4 border bg-blue-400 text-white rounded-lg hover:opacity-80 font-[450]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            New Folder
          </button>
        </div>
      </div>

      <div className="grid mt-6 items-center grid-cols-2">
        <div className="gap-1 flex w-fit items-center px-2 text-blue-500 font-[500] rounded bg-blue-200">
          <svg 
            onClick={() => {
              getFolder(-1);
            }}
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 underline cursor-pointer"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="Development"
                transform="translate(-480.000000, -48.000000)"
                fill-rule="nonzero"
              >
                <g
                  id="directory_fill"
                  transform="translate(480.000000, 48.000000)"
                >
                  <path
                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                    id="MingCute"
                    fill-rule="currentColor"
                  ></path>
                  <path
                    d="M6,3 C4.34315,3 3,4.34315 3,6 C3,7.30622 3.83481,8.41746 5,8.82929 L5,17 C5,18.6569 6.34315,20 8,20 L15.1707,20 C15.5825,21.1652 16.6938,22 18,22 C19.6569,22 21,20.6569 21,19 C21,17.3431 19.6569,16 18,16 C16.6938,16 15.5825,16.8348 15.1707,18 L8,18 C7.44772,18 7,17.5523 7,17 L7,13 L15.1707,13 C15.5825,14.1652 16.6938,15 18,15 C19.6569,15 21,13.6569 21,12 C21,10.3431 19.6569,9 18,9 C16.6938,9 15.5825,9.83481 15.1707,11 L7,11 L7,8.82929 C8.16519,8.41746 9,7.30622 9,6 C9,4.34315 7.65685,3 6,3 Z"
                    id=""
                    fill="currentColor"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span className="gap-1 items-center flex">
            {breadcrumb.map((folder,index) => (
              <div className="flex" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <span
                  onClick={() => {
                    getFolder(folder.id);
                    setBreadcrumb(
                      breadcrumb.slice(0, breadcrumb.indexOf(folder) + 1)
                    );
                  }}
                  className=" cursor-pointer hover:underline"
                >
                  {folder.folder}
                </span>
              </div>
            ))}
          </span>
        </div>
        <div className="flex justify-end">
          <span className="text-sm text-white bg-blue-500 px-2 rounded">
            {folders.length} folders
          </span>
        </div>
      </div>
      <div className="mt-2 mb-6 grid">
        <div className="grid grid-cols-6 border-b pb-1 px-2">
          <div className="flex items-center justify-start gap-1">
            <span className="ml-4">name</span>
          </div>
          <span>size</span>
          <span>files</span>
          <span>subFolders</span>
          <span>createdAt</span>
          <span>lastActive</span>
        </div>
        <div className="max-h-[50rem]  ">
            {
            edit?.length>0&&<div className="p-2 items-center flex">
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
            <input onChange={(e)=>{setEdit(e.target.value)}} onKeyDown={(e)=>{if (e.key === 'Enter'){createFolder(edit);setEdit(null)}}} className="ml-2 px-2 p-1 mr-2 rounded-md shadow-sm focus:outline-secondColor"/>
            <svg onClick={()=>{createFolder(edit);setEdit(null)}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 cursor-pointer">
                                <path d="M17 20.75H7C6.27065 20.75 5.57118 20.4603 5.05546 19.9445C4.53973 19.4288 4.25 18.7293 4.25 18V6C4.25 5.27065 4.53973 4.57118 5.05546 4.05546C5.57118 3.53973 6.27065 3.25 7 3.25H14.5C14.6988 3.25018 14.8895 3.32931 15.03 3.47L19.53 8C19.6707 8.14052 19.7498 8.33115 19.75 8.53V18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75ZM7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H17C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18V8.81L14.19 4.75H7Z" fill="currentColor"/>
                                <path d="M16.75 20H15.25V13.75H8.75V20H7.25V13.5C7.25 13.1685 7.3817 12.8505 7.61612 12.6161C7.85054 12.3817 8.16848 12.25 8.5 12.25H15.5C15.8315 12.25 16.1495 12.3817 16.3839 12.6161C16.6183 12.8505 16.75 13.1685 16.75 13.5V20Z" fill="currentColor"/>
                                <path d="M12.47 8.75H8.53001C8.3606 8.74869 8.19311 8.71403 8.0371 8.64799C7.88109 8.58195 7.73962 8.48582 7.62076 8.36511C7.5019 8.24439 7.40798 8.10144 7.34437 7.94443C7.28075 7.78741 7.24869 7.61941 7.25001 7.45V4H8.75001V7.25H12.25V4H13.75V7.45C13.7513 7.61941 13.7193 7.78741 13.6557 7.94443C13.592 8.10144 13.4981 8.24439 13.3793 8.36511C13.2604 8.48582 13.1189 8.58195 12.9629 8.64799C12.8069 8.71403 12.6394 8.74869 12.47 8.75Z" fill="currentColor"/>
                                </svg>
            <svg onClick={()=>{setEdit(null)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>}
          {loader?
          <div className="flex justify-center items-center my-10"><Loader/></div>
          :currentView ? (
            currentView.subFolders.length > 0 ? (
              currentView.subFolders.map((folder) => (
                <FolderDisplay
                  key={folder.id}
                  id={folder.id}
                  getFolder={getFolder}
                />
              ))
            ) : (
              <div className="text-center my-8 flex flex-col">
                <span className="font-semibold">Non Folders !!</span>
                <span
                  onClick={goFile}
                  className="text-sm underline cursor-pointer"
                >
                  See files
                </span>
              </div>
            )
          ) : folders.length > 0 ? (
           folders.map((folder) => (
              <FolderDisplayTow
                key={folder.id}
                folder={folder}
                getFolder={getFolder}
              />
            ))
          ) : (
            <div className="text-center my-8 flex flex-col">
              <span className="font-semibold">Non Folders !!</span>
              <span
                onClick={goFile}
                className="text-sm underline cursor-pointer"
              >
                See files
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Folder;
