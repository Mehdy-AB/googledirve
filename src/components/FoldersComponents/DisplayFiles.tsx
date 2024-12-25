import axiosClient from "@/app/lib/axiosClient";
import { formatBitSize } from "@/app/lib/valuesConvert";
import DropDown from "@/components/DropDown";
import { useLayoutContext } from "@/components/myContext/myContext";
import {  useState } from "react";


const DisplayFiles=({file,folders,setCheckedFolders,checkedFolders,setFilesOpen})=>{
const [dropDown,setDropDown]=useState(false);
const [dropDownMove,setDropDownMove]=useState(false);
const [dropDownMove2,setDropDownMove2]=useState(false);
const [moveTo,setMoveTo]=useState<{name:string,id:number}>(null);
const [edit,setEdit]=useState<string>(null);
const {
    setAlerts
  } = useLayoutContext();

const renameFile=()=>{
    if(edit.trim().length === 0){setAlerts((prv)=>[...prv,{type:3,message:'cant set empty name',duration:3000}]); return;}
    axiosClient
    .put("/backReq/admin/document?type=rename",{data:{
        folderId: file.id,
        newName: edit
      }})
    .then(() => {
        setAlerts((prv)=>[...prv,{type:1,message:'done .',duration:3000}]);
        file.name =edit;
    })
    .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in rename file.',duration:3000}]));
}
const moveFile=(id)=>{
    axiosClient
    .put("/backReq/admin/document?type=move",{data:{
        folderId: file.id,
        newParentId: id
      }})
    .then(() => {
        setAlerts((prv)=>[...prv,{type:1,message:'done .',duration:3000}]);
    })
    .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in move file.',duration:3000}]));
}
const makeFavorite=()=>{
    axiosClient
    .post(`/backReq/admin/document?fileId=${file.id}&type=favorite`)
    .then(() => {
        setAlerts((prv)=>[...prv,{type:1,message:'done .',duration:3000}]);
    })
    .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in fav the file.',duration:3000}]));
}

return(
    <div
                className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2"
            >
                {/* Folder Details */}
                <div className="flex items-center justify-start gap-2">
                <label className="flex items-center cursor-pointer relative" htmlFor={"check"+file?.id}>
                        <input type="checkbox" onChange={(e)=>{setCheckedFolders(e.target.checked?checkedFolders.concat(file.id):checkedFolders.filter((id)=>id!==file.id))}} checked={checkedFolders.includes(file?.id)}
                        className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-secondColor checked:border-secondColor"
                        id={"check"+file?.id} />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                            stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                        </span>
                </label>
                    <span onClick={()=>{setFilesOpen({id:file.id,name:file.name})}} className="flex underline hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                                            width="20px" height="20px" viewBox="0 0 56 64" enableBackground="new 0 0 56 64" >
                                        <g>
                                            <path fill="#e95e60" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                                            <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                                            <path opacity="0.5" fill="#FFFFFF" enableBackground="new    " d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                                        </g>
                                        <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                                            c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                                            M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                                            h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                                            s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                                            C42.2,42.8,41.9,43.1,41.5,43.1z"/>
                                        </svg>
                    {edit!=null?(<span className="p-2 items-center flex">
                    <input value={edit} onChange={(e)=>{setEdit(e.target.value)}} onKeyDown={(e)=>{if (e.key === 'Enter'){renameFile();setEdit(null)}}} className="ml-2 shadow-lg px-2 p-1 mr-2 rounded-md w-40 focus:outline-secondColor"/>
                    <svg onClick={()=>{renameFile();setEdit(null)}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 cursor-pointer">
                                        <path d="M17 20.75H7C6.27065 20.75 5.57118 20.4603 5.05546 19.9445C4.53973 19.4288 4.25 18.7293 4.25 18V6C4.25 5.27065 4.53973 4.57118 5.05546 4.05546C5.57118 3.53973 6.27065 3.25 7 3.25H14.5C14.6988 3.25018 14.8895 3.32931 15.03 3.47L19.53 8C19.6707 8.14052 19.7498 8.33115 19.75 8.53V18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75ZM7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H17C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18V8.81L14.19 4.75H7Z" fill="currentColor"/>
                                        <path d="M16.75 20H15.25V13.75H8.75V20H7.25V13.5C7.25 13.1685 7.3817 12.8505 7.61612 12.6161C7.85054 12.3817 8.16848 12.25 8.5 12.25H15.5C15.8315 12.25 16.1495 12.3817 16.3839 12.6161C16.6183 12.8505 16.75 13.1685 16.75 13.5V20Z" fill="currentColor"/>
                                        <path d="M12.47 8.75H8.53001C8.3606 8.74869 8.19311 8.71403 8.0371 8.64799C7.88109 8.58195 7.73962 8.48582 7.62076 8.36511C7.5019 8.24439 7.40798 8.10144 7.34437 7.94443C7.28075 7.78741 7.24869 7.61941 7.25001 7.45V4H8.75001V7.25H12.25V4H13.75V7.45C13.7513 7.61941 13.7193 7.78741 13.6557 7.94443C13.592 8.10144 13.4981 8.24439 13.3793 8.36511C13.2604 8.48582 13.1189 8.58195 12.9629 8.64799C12.8069 8.71403 12.6394 8.74869 12.47 8.75Z" fill="currentColor"/>
                                        </svg>
                    <svg onClick={()=>{setEdit(null)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    </span>):
                    (file?.name.length>23)?file.name.slice(0, 23)+'...':file.name
                    }
                        
                    </span>
                </div>
                <span>{formatBitSize(file.size)}</span>
                <span>{file?.rule.name}</span>
                <div className="flex cursor-pointer w-max">
                                        <div>
                                            <p className="text-sm items-center flex">
                                            <img src='https://readymadeui.com/profile_2.webp' className="w-6 mr-2 h-6 rounded-full shrink-0" />
                                            {file.user?.fullName}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5">{file.user?.email}</p>
                                        </div>
                                    </div>
                <span>{new Date(file?.createdAt).toLocaleString()}</span>                
                <span className="grid grid-cols-10">
                <span className="col-span-9">{new Date(file?.modifiedAt).toLocaleString()}</span>
                
                <div className='flex relative col-span-1 justify-end'>
                    
                    <button onClick={()=>{dropDown? setTimeout(() => {setDropDown(false)}, 150):setTimeout(() => {setDropDown(true)}, 150)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded-full bg-gray-100 cursor-pointer size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg></button>
                    {dropDownMove&&<DropDown setIsShow={setDropDownMove}><div className=" absolute z-10 w-40 py-4 bg-white border border-gray-200 shadow-lg rounded-[0.3rem] grid top-5 right-4">
                        <button onClick={()=>setDropDownMove2(true)} className=" items-center justify-center flex border mx-2 py-1 rounded-md">{moveTo?.name||'Select folder'}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg></button>
                        {dropDownMove2&&<DropDown setIsShow={setDropDownMove2}><div className=" absolute max-h-32 bg-white ring-1 shadow-md ring-gray-300 w-[90%] ml-2 rounded-md overflow-auto top-12 py-1 flex flex-col">
                            {folders?.map((folder,index)=><button key={index} onClick={()=>{setMoveTo({name:folder.name,id:folder.id})}} className=" justify-start flex pl-2 hover:bg-gray-300">{folder.name+'#'+folder.id}</button>)}
                        </div></DropDown>}
                        <div className="flex justify-end">
                            <button onClick={()=>{setDropDownMove(false);setDropDownMove2(false);moveFile(moveTo.id);setMoveTo(null);}} className="bg-blue-400 text-white px-4 rounded-md mr-2 mt-2">Move</button>
                        </div>
                    </div></DropDown>}

                    {dropDown&&<DropDown setIsShow={setDropDown}>
                    <div className=" absolute z-10 bg-white border border-gray-200 shadow-lg rounded-[0.3rem] py-2 grid top-5 right-4">
                                        <button className=" pl-4 p-1 flex justify-start mt-2 items-center hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                            Open</button>
                                            <button onClick={()=>{setEdit(file.name);setDropDown(false)}} className="w-40 pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            Rename</button>
                                        <button onClick={()=>{setDropDown(false);setDropDownMove(true);}} className="w-40 pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5 mr-1">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M6 16H5a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v1M9 20h10a1 1 0 001-1V9a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1z"/>
                                        </svg>
                                            Move</button>
                                        <button className="pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                            Delete</button>
                                            <div className="border my-1"></div>
                                        <div className="flex pl-4 p-1 cursor-pointer items-center mt-2 hover:bg-gray-200">
                                        <div><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="size-5 mr-1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5L11.6464 4.64645L12 4.29289L12.3536 4.64645L12 5ZM12.5 14C12.5 14.2761 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.2761 11.5 14L12.5 14ZM6.64645 9.64645L11.6464 4.64645L12.3536 5.35355L7.35355 10.3536L6.64645 9.64645ZM12.3536 4.64645L17.3536 9.64645L16.6464 10.3536L11.6464 5.35355L12.3536 4.64645ZM12.5 5L12.5 14L11.5 14L11.5 5L12.5 5Z" fill="currentColor"/>
                                        <path d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16" stroke="currentColor"/>
                                        </svg></div>
                                        <div>Download</div>
                                            
                                        </div>
                                        <div className="group relative pl-4 p-1 grid grid-cols-2 items-center hover:bg-gray-200">
                                        <div className="flex"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg></div>

                                        <div>Paretager</div></div>
                                            <div className="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg></div>

                                            <div className=" group-hover:grid hidden absolute right-[10rem] shadow-lg w-32 justify-start bg-white rounded-md py-4 top-0">
                                                
                                                <button className="hover:bg-gray-200 w-32 items-center grid grid-cols-2 pl-2 py-2">
                                                     
                                                 <span className="flex justify-start">User</span>
                                                 <span className="flex justify-end pr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                    </svg>
                                                </span>
                                                </button>
                                                <button className="hover:bg-gray-200 w-32 items-center grid grid-cols-2 pl-2 py-2">
                                                     
                                                 <span className="flex justify-start">Lien</span>
                                                 <span className="flex justify-end pr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                                </svg>
                                                </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="border my-1"></div>
                                        <button className="pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" className="size-5 mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="15" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 12.5858L17.0858 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="16.9142" y1="7" x2="18" y2="8.08579" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="14.4142" y1="9.5" x2="15.5" y2="10.5858" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                            Droit d'accès</button>
                                        <button onClick={()=>{setDropDown(false);makeFavorite();}} className="pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                            Add favorite</button>
                                        </div>
                    </DropDown>}
                    </div>
                </span>
            </div>
);
}
export default DisplayFiles;