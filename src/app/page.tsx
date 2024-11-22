"use client"

import Accueil from "../components/accueil/Accueil";

import DefualtLayout from "@/components/defualtLayout/DefualtLayout";
import {  useLayoutContext } from "@/components/myContext/myContext";

export default function Home() {
  const {
    sidebarOpen,
    setSidebarOpen,
    uploadForm,
    setUploadForm,
    uploadFiles,
    setUploadFiles,
  } = useLayoutContext();

  return (

        <DefualtLayout setSidebarOpen={setSidebarOpen} setUploadFiles={setUploadFiles} setUploadForm={setUploadForm} sidebarOpen={sidebarOpen} uploadFiles={uploadFiles} uploadForm={uploadForm}>
          <Accueil setUploadFiles={setUploadFiles} setUploadForm={setUploadForm} uploadForm={uploadForm} />
        </DefualtLayout>
  );
}
