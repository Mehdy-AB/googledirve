"use client"

import axiosClient from "@/app/lib/axiosClient";
import Files from "@/components/FoldersComponents/Files";
import FilesSearch from "@/components/FoldersComponents/FilesSearch";
import Folder from "@/components/FoldersComponents/Folder";
import OpenPdf from "@/components/FoldersComponents/OpenPdf";
import MetaData from "@/components/admin/Modeles/MetaData";
import { useLayoutContext } from "@/components/myContext/myContext";
import { useEffect, useState } from "react";


const documentsManagment=()=>{
    return(
        <MetaData/>
    );
}
export default documentsManagment;
