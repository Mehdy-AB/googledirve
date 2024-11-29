"use client"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout"
import { useLayoutContext } from "@/components/myContext/myContext";

const recents=()=>{
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
            <div>recents</div>
        </DefualtLayout>
    );

}
export default recents;