"use client"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout"
import { useLayoutContext } from "@/components/myContext/myContext";

const fichiersPartages=()=>{
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
            <div>fichiers-partages</div>
        </DefualtLayout>
    );

}
export default fichiersPartages;