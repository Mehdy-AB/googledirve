"use client"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout"
import { useLayoutContext } from "@/components/myContext/myContext";

const suivis=()=>{
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
            <div>suivis</div>
        </DefualtLayout>
    );

}
export default suivis;