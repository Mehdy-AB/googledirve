"use client"
import DefualtLayout from "@/components/defualtLayout/DefualtLayout"
import MetaData from "@/components/metaData/MetaData";
import { useLayoutContext } from "@/components/myContext/myContext";

const metaData=()=>{
    const {
        sidebarOpen,
      } = useLayoutContext();
    return(
            <MetaData sidebarOpen={sidebarOpen}/>
    );

}
export default metaData;