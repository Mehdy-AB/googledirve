"use client"
import Accueil from "../../components/accueil/Accueil";
import {  useLayoutContext } from "@/components/myContext/myContext";

export default function Home() {
  const {
    uploadForm,
    setUploadForm,
    setUploadFiles,
  } = useLayoutContext();

  return(
          <Accueil setUploadFiles={setUploadFiles} setUploadForm={setUploadForm} uploadForm={uploadForm} />
  );
}
