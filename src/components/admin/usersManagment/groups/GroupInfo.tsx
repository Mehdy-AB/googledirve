import axiosClient from "@/app/lib/axiosClient";
import { useEffect, useState } from "react";
import UserInTable from "./UserInTable";
import DisplayUsers from "../../forms/DisplayUsers";

const GroupInfo=({groupId,setGroupInfo,deleteGroup})=>{
    const [group,setgroup]=useState(null);
    const [users,setUsers]=useState<[]>([])
    const [groupEdit,setgroupEdit]=useState(null)
    const [edit,setEdit]=useState<number[]>([])
    const [deleteConf,setDeleteConf]=useState(false)
    const [showUsers,setShowUsers]=useState(false)
    const [selected,setSelected]=useState<number[]>([])

    const getgroup=()=>{
        axiosClient.get("/backReq/admin/groups", {
            params: { type:'group' ,groupId:groupId},
          })
      .then((response) => {setgroup(response.data);setgroupEdit(response.data)})
      .catch(() => setGroupInfo(null));
    }

    const getGroupMembers=()=>{
        axiosClient.get("/backReq/admin/groups/users", {
            params: {groupId:groupId},
          })
      .then((response) => {setUsers(response.data)})
      .catch(() => setGroupInfo(null));
    }

    const createGroupMembers=(userId)=>{
        axiosClient.post("/backReq/admin/groups/users", {data:{
                canUpload: false,
                canDownload: false,
                canView: false,
                canAdd: false,
                canEdit: false,
                canDelete: false
              }
        },{
            params: {groupId:groupId,userId:userId},
          })
      .then((response) => {getGroupMembers()})
      .catch(() => setGroupInfo(groupId));
    }

    const deleteUser=()=>{
        if(selected.length===0)return;
        selected.map((id)=>{
            axiosClient.delete("/backReq/admin/groups/users",{
                params: {groupId:groupId, userId:id }, // Add query parameters here
              })
          .catch((error) => console.error(error));
        })
      getGroupMembers()
      setSelected([]);
    }

    const updateGroup=()=>{
        axiosClient.put("/backReq/admin/groups", {
            
            data:groupEdit
          },{params: {groupId:groupId}})
      .then(() => {getgroup();setEdit([])})
      .catch(() => setGroupInfo(null));
    }
    useEffect(()=>{getgroup();getGroupMembers()},[]);
    
return(
    <>
    {showUsers&&
    <div id="wrapper" onClick={(e:any)=>{if(e.target.id === "wrapper")setShowUsers(false)}} className="fixed inset-0 z-[97] mt-[2.5rem] bg-black bg-opacity-20 flex justify-center items-center">
        <DisplayUsers createGroupMembers={createGroupMembers} />
    </div>}
    {deleteConf&&<div id="wrapper" onClick={(e:any)=>{if(e.target.id === "wrapper")setDeleteConf(false)}} className="fixed inset-0 z-[97] mt-[2.5rem] bg-black bg-opacity-20 flex justify-center items-center">
        <div className="border z-[100] rounded-lg bg-white shadow relative max-w-sm">
            <div className="flex justify-end p-2">
                <button  onClick={()=>setDeleteConf(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>

            <div className="p-6 pt-0 text-center">
                <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Êtes-vous sûr de vouloir supprimer ce groupe ?</h3>
                <a  onClick={()=>{deleteGroup([group.id]);setDeleteConf(false)}} 
                    className="cursor-pointer text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                    Oui, je suis sûr
                </a>
                <a onClick={()=>setDeleteConf(false)}
                    className=" cursor-pointer text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                    Non, annule
                </a>
            </div>
        </div>
    </div>}
    <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">
            <div className="grid grid-cols-8">
                <div className="col-span-1 justify-center flex">
                    <img src='https://readymadeui.com/profile_2.webp' className="w-28 h-28 rounded-full shrink-0" />
                </div>
                <div className="col-span-6 text-3xl flex mt-4 flex-col">
                    <span className="flex font-semibold items-center">
                        {edit.includes(1) ? (<input type="text" onChange={(e) => { setgroupEdit({ ...groupEdit, name: e.target.value }); } } defaultValue={group?.name} className="px-2 rounded-sm mb-2 ring-gray-200 ring-1 focus:outline-secondColor" />) :
                            (<>{groupEdit?.name}
                                <svg onClick={() => { setEdit([...edit, 1]); } } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg></>
                            )}
                    </span>
                    <span className="text-lg flex items-center">
                        {edit.includes(2) ? (<input type="text" onChange={(e) => { setgroupEdit({ ...groupEdit, description: e.target.value }); } } defaultValue={group?.description} className="px-2 rounded-sm ring-gray-200 ring-1 focus:outline-secondColor" />) :
                            (<>{groupEdit?.description}
                                <svg onClick={() => { setEdit([...edit, 2]); } } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondColor cursor-pointer ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg></>
                            )}
                    </span>
                    <span className="text-sm">{new Date(groupEdit?.createdAt).toLocaleString()}</span>
                </div>
                <div className="items-center flex flex-col justify-center">
                    Active
                    <label className="relative flex  cursor-pointer">

                        <input type="checkbox" className="sr-only peer" />
                        <div
                            className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]">
                        </div>
                    </label></div>
            </div>
            <div className="flex gap-2 mr-8 justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setShowUsers(true)}} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cursor-pointer text-white bg-blue-400 rounded-lg size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <button disabled={selected.length===0} onClick={deleteUser}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${selected.length===0?' text-red-200':'cursor-pointer hover:text-red-500 text-red-400'} `}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg></button>
            </div>
            {edit.length > 0 && <div className="flex justify-end gap-2 mr-8">
                <button onClick={() => { setEdit([]); setgroupEdit(group); } } className="hover:shadow-form  rounded-md bg-gray-400 py-2 hover:bg-gray-500 transition-all px-3 text-center text-base font-semibold text-white outline-none"> Annule</button>
                <button onClick={updateGroup} className="hover:shadow-form  rounded-md bg-blue-400 py-2 hover:bg-blue-500 transition-all px-3 text-center text-base font-semibold text-white outline-none"> Mise à jour</button>
            </div>}
            <div className="border my-6 mx-8"></div>
            <table className="min-w-full rounded-lg shadow-lg bg-white">
                    <thead className="whitespace-nowrap">
                        <tr>
                            <th className="pl-4 w-8">
                                <input id="checkbox" type="checkbox" checked={users.some((user:any) => selected.includes(user.permissions.id))} className="hidden peer" onChange={(e)=>{e.target.checked?setSelected(users.map((user:any)=>user.permissions.id)):setSelected([])}}/>
                                <label htmlFor="checkbox"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                            </th>
                            <th className="p-4 text-left text-sm font-semibold ">
                                Nom
                            </th>
                            <th className="p-4 text-left text-sm font-semibold ">
                                Upload
                            </th>
                            <th className="p-4 text-left text-sm font-semibold ">
                                Download
                            </th>
                            <th className="p-4 text-left text-sm font-semibold ">
                                View
                            </th>
                            <th className="p-4 text-left text-sm font-semibold ">
                                Add
                            </th>
                            <th className="p-4 text-left text-sm font-semibold ">
                                Edit
                            </th>
                            <th className="p-4 text-left text-sm font-semibold ">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" whitespace-nowrap">
                        {users.length > 0 ? users.map((user, index) => <UserInTable key={index} user={user} selected={selected} setSelected={setSelected} />) :
                            <><tr>
                            <td colSpan={8} className="text-xl text-center">
                                Non users !!
                            </td>
                        </tr><tr>
                                <td colSpan={8} onClick={()=>setShowUsers(true)} className="cursor-pointer underline font-semibold text-sm text-center">
                                Ajouter maintenant
                                </td>
                            </tr></>
                          }
                    </tbody>
            </table>
           
                
                <div className="grid mt-10 mx-8 justify-end">
                <button onClick={() => setDeleteConf(true)}
                        className="hover:shadow-form  rounded-md bg-red-300 py-2 hover:bg-red-400 transition-all px-3 text-center text-base font-semibold text-white outline-none">
                        Supprimer
                    </button>
                </div>
          
            <div className="border mb-6 mt-2 mx-8"></div>
        </div></>
);

}
export default GroupInfo;