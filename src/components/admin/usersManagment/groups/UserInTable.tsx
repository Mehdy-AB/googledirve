import { useEffect, useState } from "react";

const UserInTable=({user,selected,setSelected}:{user,selected:number[],setSelected})=>{
    const [permissions,setPermissions] = useState(user.permissions);
    useEffect(()=>{console.log(permissions,user.permissions)},[permissions])
return(
<tr  className="odd:bg-blue-50">
                                <td className="pl-4 w-8">
                                    <input id={"checkbox"+user.permissions.id} type="checkbox" checked={selected.includes(user.permissions.id)} onChange={(e)=>{e.target.checked?setSelected([...selected,user.permissions.id]):setSelected(selected.filter(id=>id!=user.permissions.id))}} className="hidden peer" />
                                    <label htmlFor="checkbox1"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-400 border  rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                </td>
                                <td className="p-4 text-sm">
                                    <div className="flex items-center w-max">
                                        <img src='https://readymadeui.com/profile_2.webp' className="w-9 h-9 rounded-full shrink-0" />
                                        <div className="ml-4">
                                            <p className="text-sm text-black">{user.username}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">wwwww</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-4 ">
                                    <input id={"canUpload"} defaultValue={user.permissions.canUpload} onChange={(e)=>setPermissions({...permissions,canUpload:e.target.checked})} type="checkbox" className="hidden peer" />
                                    <label htmlFor="canUpload"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-400 border  rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                </td>
                                <td className="pl-4 ">
                                    <input id={"canDownload"} type="checkbox" defaultValue={user.permissions.canDownload} onChange={(e)=>setPermissions({...permissions,canDownload:e.target.checked})} className="hidden peer" />
                                    <label htmlFor="canDownload"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-400 border  rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                </td>
                                <td className="pl-4 ">
                                    <input id={"canView"} type="checkbox" defaultValue={user.permissions.canView} onChange={(e)=>setPermissions({...permissions,canView:e.target.checked})} className="hidden peer" />
                                    <label htmlFor="canView"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-400 border  rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                </td>
                                <td className="pl-4 ">
                                    <input id={"canAdd"} type="checkbox" defaultValue={user.permissions.canAdd} onChange={(e)=>setPermissions({...permissions,canAdd:e.target.checked})} className="hidden peer" />
                                    <label htmlFor="canAdd"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-400 border  rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                </td>
                                <td className="pl-4 ">
                                    <input id={"canEdit"} type="checkbox" defaultValue={user.permissions.canEdit} onChange={(e)=>setPermissions({...permissions,canEdit:e.target.checked})} className="hidden peer" />
                                    <label htmlFor="canEdit"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-400 border  rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                </td>
                                <td className="pl-4 ">
                                    <input id={"canDelete"} type="checkbox" defaultValue={user.permissions.canDelete} onChange={(e)=>setPermissions({...permissions,canDelete:e.target.checked})} className="hidden peer" />
                                    <label htmlFor="canDelete"
                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-400 border  rounded overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                            <path
                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                data-name="7-Check" data-original="#000000" />
                                        </svg>
                                    </label>
                                    
                                </td>
                                <td className="pl-4 ">
                                {(permissions != user.permissions)&&<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 cursor-pointer">
                                <path d="M17 20.75H7C6.27065 20.75 5.57118 20.4603 5.05546 19.9445C4.53973 19.4288 4.25 18.7293 4.25 18V6C4.25 5.27065 4.53973 4.57118 5.05546 4.05546C5.57118 3.53973 6.27065 3.25 7 3.25H14.5C14.6988 3.25018 14.8895 3.32931 15.03 3.47L19.53 8C19.6707 8.14052 19.7498 8.33115 19.75 8.53V18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75ZM7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H17C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18V8.81L14.19 4.75H7Z" fill="currentColor"/>
                                <path d="M16.75 20H15.25V13.75H8.75V20H7.25V13.5C7.25 13.1685 7.3817 12.8505 7.61612 12.6161C7.85054 12.3817 8.16848 12.25 8.5 12.25H15.5C15.8315 12.25 16.1495 12.3817 16.3839 12.6161C16.6183 12.8505 16.75 13.1685 16.75 13.5V20Z" fill="currentColor"/>
                                <path d="M12.47 8.75H8.53001C8.3606 8.74869 8.19311 8.71403 8.0371 8.64799C7.88109 8.58195 7.73962 8.48582 7.62076 8.36511C7.5019 8.24439 7.40798 8.10144 7.34437 7.94443C7.28075 7.78741 7.24869 7.61941 7.25001 7.45V4H8.75001V7.25H12.25V4H13.75V7.45C13.7513 7.61941 13.7193 7.78741 13.6557 7.94443C13.592 8.10144 13.4981 8.24439 13.3793 8.36511C13.2604 8.48582 13.1189 8.58195 12.9629 8.64799C12.8069 8.71403 12.6394 8.74869 12.47 8.75Z" fill="currentColor"/>
                                </svg>}
                                    
                                </td>
                            </tr>
);
}
export default UserInTable;