import axiosClient from "@/app/lib/axiosClient";
import { useState } from "react";
import { User } from "../usersManagment/UsersManagment";

const CreateUser=({onClose,sidebarOpen,fetch,EditUser,update})=>{
    const [drop,setDrop]=useState(false)
    const [user,setUser]=useState<User>(
        EditUser
          ? {
              fullName: EditUser.fullName,
              email: EditUser.email,
              jobTitle: EditUser.jobTitle,
              username: EditUser.username,
              password: EditUser.password,
              role: EditUser.role,
              enabled: EditUser.enabled, // Fixed property
            }
          : {
              fullName: '',
              email: '',
              jobTitle: '',
              username: '',
              password: '',
              role: 'USER',
              enabled: true, // Default value
            }
      );

    const createUser=()=>{
        axiosClient.post("/backReq/admin/users", {data:user})
        .then(() => fetch())
        .catch((error) => console.error(error));
        onClose();
    }

    const handleChange = (e: any) => {
        const { name, value} = e.target;
    
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
      };
    return(
    <div id="wrapper" onClick={handleClose} className={`fixed inset-0 z-[97] mt-[2.5rem] ${sidebarOpen ? "ml-[12rem]":"ml-[4rem]"} bg-black bg-opacity-20 flex justify-center items-center`}>
        <div className="mx-auto relative w-full max-w-[550px] bg-white rounded-lg px-20 ring-1 ring-slate-300 py-16 shadow-lg">
        <div onSubmit={createUser}>
          <div className=" text-center text-3xl font-semibold ">Créer un utilisateur</div>
          <div className=" text-center text-sm my-2 mb-3 font-semibold text-gray-500 ">Créez un nouvel utilisateur pour l'ajouter aux groupes et donner des autorisations</div>
          <div className="border rounded-full mb-6"></div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-2">
                        <label htmlFor="fName" className="mb-3 block text-base font-medium">
                            Full Name
                        </label>
                        <input defaultValue={user.fullName} onChange={handleChange} type="text" name="fullName" id="fullName" placeholder="FullName"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secondColor focus:shadow-md" required />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-2">
                        <label htmlFor="lName" className="mb-3 block text-base font-medium">
                            UserName
                        </label>
                        <input defaultValue={user.username} onChange={handleChange} type="text" name="username" id="username" placeholder="userName"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secondColor focus:shadow-md" required />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="mb-3 block text-base font-medium">
                    Email
                </label>
                <input defaultValue={user.email} onChange={handleChange} type="text" name="email" id="email" placeholder="user@example.com"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secondColor focus:shadow-md" required />
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="mb-3 block text-base font-medium">
                    Password
                </label>
                <input onChange={handleChange} type="password"  name="password" id="password" 
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secondColor focus:shadow-md" required />
            </div>

            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="role" className="mb-3 block text-base font-medium">
                            Role
                        </label>
                        <div  onClick={()=>setDrop(!drop)} onBlur={()=>{setTimeout(()=>{setDrop(false)},150)}} className=" border rounded-md w-full py-3 px-6 grid grid-cols-2 cursor-pointer relative">
                            {user.role}
                            <div className="flex justify-end items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                           {drop && <div className=" absolute border w-full left-0 top-14 py-3 bg-white rounded-md">
                                <div onClick={()=>setUser({...user,role:'ADMIN'})} className="pl-6 hover:bg-gray-200 py-1">ADMIN</div>
                                <div onClick={()=>setUser({...user,role:'USER'})} className="pl-6 hover:bg-gray-200 py-1">USER</div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="Job" className="mb-3 block text-base font-medium">
                            Job Tiltle
                        </label>
                        <input defaultValue={user.jobTitle} onChange={handleChange} type="text" name="jobTitle" id="jobTitle"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secondColor focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div className="mb-8 flex">
                <label className="mb-3 mr-3  block text-base font-medium">
                   Voulez-vous activer cet utilisateur ?
                </label>
                <label className="relative cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked={user.enabled} onChange={()=>setUser({...user,enabled:!user.enabled})} />
                                        <div
                                            className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]">
                                        </div>
                </label>
            </div>

            <div className="flex justify-center">
                <button onClick={()=>{EditUser?update(user,EditUser.id):createUser()}}
                    className="hover:shadow-form  rounded-md bg-secondColor py-3 px-32 text-center text-base font-semibold text-white outline-none">
                    {EditUser?'Mise à jour':'Créer'}
                </button>
            </div>
        </div>
        <div className="border rounded-full mt-6"></div>
    </div>
    </div>)
}
export default CreateUser;