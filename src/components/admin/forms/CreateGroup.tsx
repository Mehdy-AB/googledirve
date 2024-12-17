import axiosClient from "@/app/lib/axiosClient";
import { useLayoutContext } from "@/components/myContext/myContext";
import { useState } from "react";

const CreateUser=({onClose,sidebarOpen,fetch})=>{
    const [drop,setDrop]=useState(false)
    const [user,setUser]=useState({
              name: '',
              description: '',
            }
      );
    const {setAlerts}=useLayoutContext();

    const createUser=()=>{
      if(user.name.trim() === ""){
        setAlerts((prev) => [
          ...prev,
          { type: 3, message: `name should not be empty` },
        ]);
        return;
      }
      if(user.name.length < 3){
        setAlerts((prev) => [
          ...prev,
          { type: 3, message: `name should not be less then 3` },
        ]);
        return;
      }
      if(user.description.trim() === ""){
        setAlerts((prev) => [
          ...prev,
          { type: 3, message: `description should not be empty` },
        ]);
        return;
      }
      if(user.description.length <3){
        setAlerts((prev) => [
          ...prev,
          { type: 3, message: `description should not be less then 3` },
        ]);
        return;
      }
        axiosClient.post("/backReq/admin/groups", {data:user})
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

            <div className="mb-2">
                <label htmlFor="group-Name" className="mb-3 block text-base font-medium">
                    Name
                </label>
                <input defaultValue={user.name} onChange={handleChange} type="text" name="name" id="group-Name" placeholder="Groups name"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secondColor focus:shadow-md" required />
            </div>
            <div className="mb-2">
                <label htmlFor="group-description" className="mb-3 block text-base font-medium">
                Description
                </label>
                <textarea defaultValue={user.description} onChange={handleChange} name="description" id="group-description" placeholder="Groups description ..."
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secondColor focus:shadow-md" required />
            </div>


            <div className="flex justify-center">
                <button onClick={createUser}
                    className="hover:shadow-form rounded-md bg-secondColor py-3 px-32 text-center text-base font-semibold text-white outline-none">
                    Créer
                </button>
            </div>
        </div>
        <div className="border rounded-full mt-6"></div>
    </div>
    </div>)
}
export default CreateUser;