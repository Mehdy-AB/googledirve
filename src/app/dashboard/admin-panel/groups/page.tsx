"use client"
import GroupsMangment from "@/components/admin/usersManagment/GroupsMangment";
import UsersManagment from "@/components/admin/usersManagment/UsersManagment"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout";
import { useLayoutContext } from "@/components/myContext/myContext";

const Page=()=>{
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
            <GroupsMangment/>
        </DefualtLayout>)
}
export default Page;