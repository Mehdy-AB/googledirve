"use client"

import UsersManagment from "@/components/admin/usersManagment/UsersManagment"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout";
import { useLayoutContext } from "@/components/myContext/myContext";

const Users=()=>{
    const {
            sidebarOpen,
            setSidebarOpen,
            uploadForm,
            setUploadForm,
            uploadFiles,
            setUploadFiles,
          } = useLayoutContext();
    return(
        <DefualtLayout setSidebarOpen={setSidebarOpen} setUploadFiles={setUploadFiles} setUploadForm={setUploadForm} sidebarOpen={sidebarOpen} uploadFiles={uploadFiles} uploadForm={uploadForm}>
            <UsersManagment/>
        </DefualtLayout>)
}
export default Users;