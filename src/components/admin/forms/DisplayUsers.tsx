import axiosClient from "@/app/lib/axiosClient";
import { useState, useEffect } from "react";

const DisplayUsers = ({createGroupMembers}) => {
  const [users, setUsers] = useState<any[]>([]); // To store user data
  const [loading, setLoading] = useState<boolean>(true); // For loading state

  const getusers=()=>{
    axiosClient.get("/backReq/admin/users", {
            params: { type:'all' }, // Add query parameters here
        })
    .then((response) => {setUsers(response.data);setLoading(false)})
    .catch((error) => console.error(error));
    }
    useEffect(getusers,[]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      {users.length > 0 ? (
        <div className="mx-auto relative w-full max-w-[600px] bg-white rounded-lg px-4 ring-1 ring-slate-300 py-16 shadow-lg">
            <div className="text-3xl text-center mb-8">Sélectionnez un utilisateur</div>
            <div className="overflow-y-auto max-h-64">
            <table className="min-w-full bg-white">
                <thead className="border-b-2 whitespace-nowrap">
                <tr>
                    <th className="p-4 text-left text-sm font-semibold text-black">Name</th>
                    <th className="p-4 text-left text-sm font-semibold text-black">JobTitle</th>
                    <th className="p-4 text-left text-sm font-semibold text-black">Role</th>
                    <th className="p-4 w-8 text-left text-sm font-semibold text-black">Status</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index} onClick={()=>{createGroupMembers(user.id)}} className="odd:bg-blue-50 cursor-pointer ">
                    <td className="p-4 text-sm">
                        <div className="flex items-center w-max">
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
        </div>
        ) : (
        <div className="text-center text-xl">No users!!</div>
        )}

    </>
  );
};

export default DisplayUsers;
