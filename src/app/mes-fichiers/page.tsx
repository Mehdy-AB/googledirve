"use client"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout"
import { useLayoutContext } from "@/components/myContext/myContext";

const mesFichiers=()=>{
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
            <div>mes-fichiers</div>
        </DefualtLayout>
    );

}
export default mesFichiers;