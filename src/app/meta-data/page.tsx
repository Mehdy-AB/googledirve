"use client"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout"
import MetaData from "@/components/metaData/MetaData";
import { useLayoutContext } from "@/components/myContext/myContext";

const metaData=()=>{
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
            <MetaData sidebarOpen={sidebarOpen}/>
        </DefualtLayout>
    );

}
export default metaData;