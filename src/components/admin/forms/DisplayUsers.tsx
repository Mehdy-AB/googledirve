import axiosClient from "@/app/lib/axiosClient";
import ConfirmationFrms from "@/app/lib/ConfirmationFrms";
import Loader from "@/app/lib/Loader";
import { useState, useEffect } from "react";

const DisplayUsers = ({createGroupMembers,setShowUsers,includeedUsers}) => {
  const [users, setUsers] = useState<any[]>([]); // To store user data
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  const [showCon, setShowCon] = useState(false);
  const [ selectedId, setSelectedId] = useState<number[]|null>([]); 
  const getusers=()=>{
    axiosClient.get("/backReq/admin/users", {
            params: { type:'all' }, // Add query parameters here
        })
    .then((response) => {setUsers(response.data);setLoading(false)})
    .catch((error) => console.error(error));
    }
    useEffect(getusers,[]);

    if (loading) {

    return (
        <div id="wrapper" onClick={(e:any)=>{if(e.target.id === "wrapper")setShowUsers(false)}} className="fixed inset-0 z-[97] mt-[5rem] ml-[16rem] bg-black bg-opacity-20 flex justify-center items-center">
    <div className="text-center"><Loader/></div> </div>);
  }

  return (
    <>{showCon&&selectedId.length>0&&<ConfirmationFrms type={1} title="Confirmation" text="Are you sure you want to add this user to the group?" action={()=>{createGroupMembers(selectedId)}} onClose={()=>{setShowCon(false);setSelectedId([])}}>
        <div className="overflow-auto max-h-52">{selectedId.map((id,index)=><div key={index} className="border-t-2 px-2">
            <p>username : {users.find(user=>user.id===id)?.username}</p>
            <p>fullName : {users.find(user=>user.id===id)?.fullName}</p>
            <p>email : {users.find(user=>user.id===id)?.email}</p>
            <p>role : {users.find(user=>user.id===id)?.role}</p>
            <p>jop : {users.find(user=>user.id===id)?.jobTitle}</p>
            </div>)}</div>
        </ConfirmationFrms>}
        <div id="wrapper" onClick={(e:any)=>{if(e.target.id === "wrapper")setShowUsers(false)}} className="fixed inset-0 z-[97] mt-[5rem] ml-[16rem] bg-black bg-opacity-20 flex justify-center items-center">
      {users.length > 0 ? (
        <div className="mx-auto relative w-full max-w-[600px] bg-white rounded-lg px-4 ring-1 ring-slate-300 py-16 shadow-lg">
            <div className="text-3xl text-center mb-8">Sélectionnez un utilisateur</div>
            <div className="overflow-y-auto max-h-64">
            <table className="min-w-full bg-white">
                <thead className="border-b-2 whitespace-nowrap">
                <tr>
                    <th className="p-4 flex gap-2 text-left text-sm font-semibold text-black">
                     <label className="flex items-center cursor-pointer relative" htmlFor={"check"}>
                        <input type="checkbox" checked={users.filter(user=>!includeedUsers.includes(user.username)).length===selectedId.length} onChange={(e)=>{e.target.checked?setSelectedId(users.map((user:any)=>user.id)):setSelectedId([])}}
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
                        Name</th>
                    <th className="p-4 text-left text-sm font-semibold text-black">JobTitle</th>
                    <th className="p-4 text-left text-sm font-semibold text-black">Role</th>
                    <th className="p-4 w-8 text-left text-sm font-semibold text-black">Status</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (!includeedUsers.includes(user.username)&&
                    <tr key={index} onClick={()=>{setSelectedId(!selectedId.includes(user.id)?selectedId.concat(user.id):selectedId.filter((id)=>id!==user.id))}} className="odd:bg-blue-50 cursor-pointer ">
                    <td className="p-4 text-sm">                                    
                        <div className="flex items-center w-max">
                        <label className="flex items-center cursor-pointer mr-2 relative" htmlFor={"check"}>
                                <input type="checkbox" onChange={(e)=>{setSelectedId(e.target.checked?selectedId.concat(user.id):selectedId.filter((id)=>id!==user.id))}} checked={selectedId.includes(user?.id)}
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
                        <img
                            src="https://readymadeui.com/profile_2.webp"
                            className="w-9 h-9 rounded-full shrink-0"
                        />
                        <div className="ml-4">
                            <p className="text-sm text-black">{user?.fullName}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{user?.email}</p>
                        </div>
                        </div>
                    </td>
                    <td className="p-4 text-sm text-black">{user?.jobTitle}</td>
                    <td className="p-4 text-sm text-black">{user?.role}</td>
                    <td className="p-4 text-sm items-center justify-center mt-3 flex text-black">
                        <span
                        className={`p-2 rounded-full ${
                            user?.enabled ? "bg-green-500" : "bg-red-500"
                        }`}
                        ></span>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className="w-full flex justify-end mt-4 pr-2"><button onClick={()=>setShowCon(true)} disabled={selectedId.length ===0} className={`${selectedId.length ===0&&'opacity-25'} px-4 py-1 bg-green-400 text-white rounded-md`}>Ajoute</button></div>
            
        </div>
        ) : (
        <div className="text-center text-xl">No users!!</div>
        )}
    </div>
    </>
  );
};

export default DisplayUsers;
