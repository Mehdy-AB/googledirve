import axiosClient from "@/app/lib/axiosClient";
import { useState, useEffect } from "react";
import CreateUser from "../forms/CreateUser";
import UsersTable from "./users/UsersTable";
import UserInfo from "./users/UserInfo";
import { useLayoutContext } from "@/components/myContext/myContext";
export interface User {
    fullName: string,
    email: string,
    jobTitle: string,
    username: string,
    password: string,
    role: "ADMIN" | 'USER',
    enabled: boolean
};
const UsersManagment=()=>{
    const [users, setUsers] = useState<any>([]);
    const [searsh,setSearsh] =useState('');
    const [editUser, setEditUser] = useState<any|null>(null);
    const [showCreate,setShowCreate] = useState(false);
    const [userInfo,setUserInfo] = useState<number | null>(null);
    const {setAlerts}=useLayoutContext();
    const getusers=()=>{
        if(searsh.length===0)
        axiosClient.get("/backReq/admin/users", {
            params: { type:'all' }, // Add query parameters here
          })
      .then((response) => setUsers(response.data))
      .catch(() => setAlerts((prv)=>[...prv,{type:2,message:'error in getting users'}]));
      else
      axiosClient.get("/backReq/admin/users", {
        params: { type:'search',username:searsh }, // Add query parameters here
      })
    .then((response) => setUsers(response.data))
    .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:'error in getting users'}]));

    }
     const validateUser = (user) => {
        // Check if the user object exists
        if (!user) return;
      
        // Validation rules
        const validations = [
          { key: "fullName", message: "Full Name should not be empty and must be at least 3 characters long" },
          { key: "email", message: "Email is invalid or empty" },
          { key: "jobTitle", message: "Job Title should not be empty and must be at least 3 characters long" },
          { key: "username", message: "Username should not be empty and must be at least 3 characters long" },
          { key: "password", message: "Password should not be empty and must be at least 3 characters long" },
        ];
      
        // Iterate over each validation rule
        for (let validation of validations) {
          const value = user[validation.key];
      
          // Check for empty field
          if (!value || value.trim() === "") {
            setAlerts((prev) => [
              ...prev,
              { type: 3, message: `${validation.key} should not be empty` },
            ]);
            return false; // Stop further validation
          }
      
          // Check for specific rules
          if (validation.key === "email" && !isValidEmail(value)) {
            setAlerts((prev) => [
              ...prev,
              { type: 3, message: "Invalid email format" },
            ]);
            return false; // Stop further validation
          }
      
          if (value.length < 3) {
            setAlerts((prev) => [
              ...prev,
              { type: 3, message: `${validation.key} must be at least 3 characters long` },
            ]);
            return false; // Stop further validation
          }
        }
      
        return true; // All validations passed
    };      
    const updateUser=(user:Partial<User>,id:number)=>{
        if(!validateUser(user))return;
        axiosClient.put("/backReq/admin/users",{data:user}, {
            params: { userId:id }, // Add query parameters here
          })
      .then(() => {getusers();setAlerts((prv)=>[...prv,{type:1,message:'done.'}])})
      .catch(() => {setAlerts((prv)=>[...prv,{type:2,message:'error in update user'}]);getusers();});
      getusers()
      setShowCreate(false);
      setEditUser(null);
    }

    const deleteUser=(id:number[])=>{
        if(id.length===0)return;
        id.map((id)=>{
            axiosClient.delete("/backReq/admin/users",{
                params: { userId:id }, // Add query parameters here
              }).then(()=>setAlerts((prv)=>[...prv,{type:1,message:'done.'}]))
          .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:'error in delete user'}]));
        })
      getusers()
      setShowCreate(false);
      setEditUser(null);
    }
    useEffect(()=>{
        getusers();
    },[]);

return(
    <>
    {showCreate &&<CreateUser sidebarOpen={false} fetch={getusers} update={updateUser} EditUser={editUser} onClose={()=>{setShowCreate(false),setEditUser(null)}}/>}
    <div className="h-full w-full py-4 px-8 ">
        <div className="grid items-start grid-cols-2">
            <div className="grid">
                <span className="text-xl font-semibold">User Manager - Users</span>
                <span className="text-sm text-gray-400">User Manager - Users</span>
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
                        <span className=" text-2xl font-semibold">User Manager</span>
                        <span className="pl-1 text-gray-500">option 1 | 50 Users | 5 Admin | 758 items</span>
                    </div>
                </div>
            </div>
            <div className=" col-span-2">

            </div>
            <div className="flex gap-3 font-[500] mt-6">
                <span onClick={()=>setUserInfo(null)} className={`${userInfo?'text-gray-500 hover:border-b-2':'border-b-2 text-blue-400'} cursor-pointer hover:text-blue-400 hover:border-blue-400 border-blue-400`}>users</span>
                {userInfo&&<span className="  cursor-pointer border-b-2 text-blue-400 border-blue-400">Settings</span>}
            </div>
        </div>

    {!userInfo?
    <UsersTable setUserInfo={setUserInfo} deleteUser={deleteUser} setEditUser={setEditUser} setShowCreate={setShowCreate} users={users} setSearsh={setSearsh} getusers={getusers} />
    :
    <UserInfo userId={userInfo} setUserInfo={setUserInfo}/>
    }

    </div></>
);
}
export default UsersManagment;