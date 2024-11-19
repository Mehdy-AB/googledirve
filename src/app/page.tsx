"use client"
import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Accueil from "./Accueil";
import UploadProgress from "./UploadProgress";
import UploadForm from "./UploadForm";

export default function Home() {

  const [sidebarOpen,setSidebarOpen] = useState(false);
  const[uploadForm,setUploadForm] = useState(false);
  const [uploadFiles,setUploadFiles] = useState<{name:string,size:number,progress:number,etat:boolean,pause: boolean,cancel: boolean}[]>(
    [{name:"preline-ui.html",size:7*1024,progress:100,etat:true,pause:true,cancel:true},
     {name:"preline-ui.mp4",size:105.5*1024*1024,progress:40,etat:false,pause:true,cancel:true},
     {name:"preline-ui-cover.jpg",size:55*1024,progress:50,etat:true,pause:true,cancel:true}
    ]);
    useEffect(()=>{console.log(uploadFiles)},[uploadFiles])
  return (
    <section className="flex overflow-auto">
      <Header sidebarOpen={false} setUploadForm={setUploadForm}/>
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {uploadFiles.length > 0 && <UploadProgress setFiles={setUploadFiles} files={uploadFiles}/>}
      <div className={`className='z-[0]' mt-[2.5rem] duration-300 ease-linear grid h-full w-full p-6 ${sidebarOpen ? "ml-[12rem]":"ml-[4rem]"} `}>
        <Accueil setUploadForm={setUploadForm} uploadForm={uploadForm} setUploadFiles={setUploadFiles}/>
      </div>
      <div className={`z-[97] duration-300 ease-in ${uploadForm ? "opacity-100 ":"opacity-50"}`}>
            {uploadForm && <UploadForm sidebarOpen={sidebarOpen} onClose={()=> setUploadForm(false)}/>}
      </div>
    </section>
  );
}
