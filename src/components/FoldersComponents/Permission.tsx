import axiosClient from "@/app/lib/axiosClient";
import DropDown from "@/components/DropDown";
import { useLayoutContext } from "@/components/myContext/myContext";
import { useEffect, useState } from "react";

const Permission=()=>{
    const [groups, setGroups] = useState<any>([]);
    const [query, setQuery] = useState(""); 
    const [showModeleDrop, setShowModeleDrop] = useState(false);
    const {setAlerts}=useLayoutContext();
    const [panel,setPanel]=useState<'user'|'group'|'role'>('user');
    const [users,setUsers]=useState([]);
    const [selected,setSelected]=useState(null);
    const [filteredData, setFilteredData] = useState([]); 
    const [usersIn,setUsersIn] = useState<{id:number,name:string,privileges:{view:boolean,download:boolean,add:boolean,edit:boolean,delete:boolean}}[]>([])
    useEffect(()=>{
        setFilteredData(
            users.filter((item) => item.fullName.toLowerCase().includes(query)&&!usersIn.some(user=>user.id===item.id))
        );
    },[query,users,usersIn])

    const getGroups=()=>{
        axiosClient.get("/backReq/admin/groups", {
            params: { type:'all' }, // Add query parameters here
          })
      .then((response) => setGroups(response.data))
      .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:'error in getting groups'}]));

    }
    const getusers=()=>{
        axiosClient.get("/backReq/admin/users", {
            params: { type:'all' }, // Add query parameters here
          })
      .then((response) => setUsers(response.data))
      .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in getting users'}]));
    }
      
    useEffect(()=>{getGroups();getusers();},[]);

    return(
    <div className="mt-2">
        <span className="text-xl "> Permission : </span>
                <div className="border-2 pb-8 px-4 mt-2 bg-white rounded-lg w-full">
                    <div className="grid grid-cols-3">
                        <span onClick={()=>setPanel('user')} className={`${panel==='user'&&'bg-background'} items-center flex justify-center border-l-2 cursor-pointer hover:bg-background border-r-2 border-b-2 rounded-b-md`}>Users</span>
                        <span onClick={()=>setPanel('group')} className={`${panel==='group'&&'bg-background'} items-center flex justify-center border-l-2 cursor-pointer hover:bg-background border-r-2 border-b-2 rounded-b-md`}>Groups</span>
                        <span onClick={()=>setPanel('role')} className={`${panel==='role'&&'bg-background'} items-center flex justify-center border-l-2 cursor-pointer hover:bg-background border-r-2 border-b-2 rounded-b-md`}>Roles</span>
                    </div>
                    <div className=" grid grid-cols-2 rounded-md border mt-2 py-4">
                    <div className="border-r">
                        <div className="relative z-0 px-2">
                        <input
                            className=" border border-gray-300 hover:border-gray-400 transition-colors rounded-sm w-full py-[0.1rem] px-2 text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-600 focus:shadow-outline"
                            id="users-search"
                            type="text"
                            onFocus={()=>setShowModeleDrop(true)}
                            value={query}
                            onChange={(e)=>setQuery(e.target.value)}
                            placeholder="Search..."
                        />
                        <div className="absolute right-0 inset-y-0 flex items-center">
                            <svg
                            onClick={()=>setQuery('')}
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 cursor-pointer mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                            
                        </div>
                        {showModeleDrop&&<DropDown notEff={['users-search']} setIsShow={setShowModeleDrop}><div id="modeleDropDown" className=" overflow-y-auto max-h-48 absolute bg-white py-2 border mt-1 w-full rounded-md shadow-md ring-1 ring-gray-300">
                            {filteredData.length >0?filteredData.map((item)=><button name="modelesbuttons" type="button" onClick={()=>{setQuery('');setShowModeleDrop(false);setUsersIn((prv)=>[...prv,{id:item.id,name:item.fullName,privileges:{view:false,delete:false,download:false,edit:false,add:false}}])}} key={item.id} className="px-4 text-start my-1 py-1 hover:bg-gray-200 w-full">{item.fullName}</button>):
                            <span className="text-center w-full text-sm">Non Users !</span>}

                        </div></DropDown>}
                        </div>
                        <div className="grid px-3 py-2 text-sm ">
                        {usersIn.length >0?usersIn.map((item,index)=><span key={index} onClick={()=>setSelected(item.id)} className={`${selected ===item.id?'text-blue-400':''} cursor-pointer underline hover:text-blue-400`}>{item.name}</span>):
                            <span className="text-center w-full text-sm">Non Users !</span>}
                        </div>
                    </div>
                    <div className=" border-l px-2">
                        <span >Privilèges :</span>
                        <div className="mt-2">
                        {selected ? (
                            <>
                                {usersIn.some(user => user.id === selected) ? (
                                usersIn
                                    .filter(user => user.id === selected)
                                    .map(user => (
                                    <div key={user.id}>
                                        <div className="flex">
                                        <input
                                            checked={user.privileges.view}
                                            type="checkbox"
                                            onChange={() =>
                                            setUsersIn(prev =>
                                                prev.map(u =>
                                                u.id === user.id
                                                    ? { ...u, privileges: { ...u.privileges, view: !u.privileges.view } }
                                                    : u
                                                )
                                            )
                                            }
                                        />
                                        <span className="text-sm ml-2">Can View</span>
                                        </div>
                                        <div className="flex">
                                        <input
                                            checked={user.privileges.download}
                                            type="checkbox"
                                            onChange={() =>
                                            setUsersIn(prev =>
                                                prev.map(u =>
                                                u.id === user.id
                                                    ? { ...u, privileges: { ...u.privileges, download: !u.privileges.download } }
                                                    : u
                                                )
                                            )
                                            }
                                        />
                                        <span className="text-sm ml-2">Can Download</span>
                                        </div>
                                        <div className="flex">
                                        <input
                                            checked={user.privileges.add}
                                            type="checkbox"
                                            onChange={() =>
                                            setUsersIn(prev =>
                                                prev.map(u =>
                                                u.id === user.id
                                                    ? { ...u, privileges: { ...u.privileges, add: !u.privileges.add } }
                                                    : u
                                                )
                                            )
                                            }
                                        />
                                        <span className="text-sm ml-2">Can Add</span>
                                        </div>
                                        <div className="flex">
                                        <input
                                            checked={user.privileges.edit}
                                            type="checkbox"
                                            onChange={() =>
                                            setUsersIn(prev =>
                                                prev.map(u =>
                                                u.id === user.id
                                                    ? { ...u, privileges: { ...u.privileges, edit: !u.privileges.edit } }
                                                    : u
                                                )
                                            )
                                            }
                                        />
                                        <span className="text-sm ml-2">Can Edit</span>
                                        </div>
                                        <div className="flex">
                                        <input
                                            checked={user.privileges.delete}
                                            type="checkbox"
                                            onChange={() =>
                                            setUsersIn(prev =>
                                                prev.map(u =>
                                                u.id === user.id
                                                    ? { ...u, privileges: { ...u.privileges, delete: !u.privileges.delete } }
                                                    : u
                                                )
                                            )
                                            }
                                        />
                                        <span className="text-sm ml-2">Can Delete</span>
                                        </div>
                                        <button onClick={()=>setUsersIn(prev =>prev.filter(u=>u.id!==selected))} className="bg-red-400 text-white px-2 rounded-md text-sm mt-2">remove</button>
                                    </div>
                                    ))
                                ) : (
                                <p className="text-xs">No user found with the selected ID.</p>
                                )}
                            </>
                            ) : (
                            <p className="text-xs">Please select a user to view or edit their privileges.</p>
                            )}

                        </div>
                    </div>
                    </div>
                </div>
    </div>
    );
}
export default Permission;