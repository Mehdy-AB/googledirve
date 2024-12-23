import axiosClient from "@/app/lib/axiosClient";
import { use, useEffect, useRef, useState } from "react";
import { useLayoutContext } from "./myContext/myContext";
import DropDown from "./DropDown";


const  UploadForm=({onClose,folderId,regetFolder,defualtfile})=>{
    
    const [modeles,setModeles] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 
    const [folders,setFolders] = useState([]);
    const [folder,setFolder] = useState(folderId || null);
    const [filteredDataFolders, setFilteredDataFolders] = useState([]); 
    const {setAlerts}=useLayoutContext();
    const [file, setFile] = useState<File>(defualtfile); // To hold the filtered results
    const getMedeles = () => {
        axiosClient
            .get("/backReq/admin/metadata", { params: { type: "all" } })
            .then((response) => {
              setModeles(response.data); // Display subfolders and files of the clicked folder
              setFilteredData(response.data);
            })
            .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:"error in getting modeles"}]));
    };

    const getFolder = () => {
      axiosClient
          .get("/backReq/admin/folders", { params: { type: "all" } })
          .then((response) => {
            setFolders(response.data); // Display subfolders and files of the clicked folder
            setFilteredDataFolders(response.data);
          })
          .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:"error in getting folders"}]));
  };
    useEffect(()=>{
        getFolder();
        getMedeles();
    },[]);
    const [queryFolders, setQueryFolders] = useState(""); // To hold the search query
    const [showModeleDropFolders, setShowModeleDropFolders] = useState(false);
    const [query, setQuery] = useState(""); // To hold the search query
    const [showModeleDrop, setShowModeleDrop] = useState(false);
    const [selectedModele, setSelectedModele] = useState<{"id": number,
            "name": string,
            "activate": boolean,
            "createdAt": string,
            "ruleLine": any[]}>(null);
    const [metadataValues, setMetadataValues] = useState([]);
    useEffect(() => {
        if (!selectedModele) {
          setMetadataValues([]);
          return;
        }
      
        setMetadataValues(
          selectedModele.ruleLine.map((metaData: any) => ({
            ruleLineId: metaData.id, // Assuming `id` is the unique identifier for ruleLine
            value: '', // Initialize each metadata field with an empty value
          }))
        );
      }, [selectedModele]);
    useEffect(()=>{
        setFilteredData(
            modeles?.filter((item) => item?.name?.toLowerCase().includes(query))
        );
    },[query]);

    useEffect(()=>{
      setFilteredDataFolders(
        folders?.filter((item) => item?.name?.toLowerCase().includes(queryFolders))
      );
  },[queryFolders]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, ruleLineId: number) => {
        const { value } = e.target;
        setMetadataValues((prev) =>
          prev.map((item) =>
            item.ruleLineId === ruleLineId ? { ...item, value } : item
          )
        );
      };      

    const [pdfSrc, setPdfSrc] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && file.type === 'application/pdf') {
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setPdfSrc(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload a valid PDF file.');
      }
    };

    if(defualtfile){
      useEffect(()=>{
        if (file && file.type === 'application/pdf') {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              setPdfSrc(e.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please upload a valid PDF file.');
        }
      },[])
    }

      const handleUpload = async () => {
        if (!folder) {
          setAlerts((prev) => [...prev, { type: 3, message: "Please select a folder" }]);
          return;
        }

        if (selectedModele) {          
        const obligatoryIds = selectedModele.ruleLine
          .filter((metaData) => metaData.obligatory)
          .map((metaData) => metaData.id);

        if (!obligatoryIds.every((id) =>
          metadataValues.some((item) => item.ruleLineId === id && item.value.trim() !== "")
        )) {
          setAlerts((prev) => [...prev, { type: 3, message: "Please fill the required metadata" }]);
          return;
        }
        if (!file){setAlerts((prev) => [...prev, { type: 3, message: "Please select a file to upload" }]); return;}
        if(!obligatoryIds.every((id) =>
            metadataValues.some((item) => item.ruleLineId === id && item.value.trim() !== ""))){alert('Please fill the metadata');return}
        }
        const formData = new FormData();
        formData.append("file", file);
        formData.append('folderId', folder); // Add other fields
        formData.append('ruleId', selectedModele.id+'');
        formData.append('metadata', JSON.stringify(metadataValues));
        await axiosClient.post("/backReq/admin/document", formData,{headers:
           { 'Content-Type': 'application/pdf'},
           params:{type:'upload'}
        })
        .then(()=>{onClose();regetFolder();setAlerts((prv)=>[...prv,{type:1,message:"done."}])})
        .catch((error)=>setAlerts((prv)=>[...prv,{type:2,message:"error in upload file"}]));
    
      };
      
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
      };

      useEffect(() => {console.log(folders)}, [folders]);
    return(
    <div id="wrapper" onClick={handleClose} className={`fixed inset-0 z-[97] mt-[5rem] ml-[16rem] bg-black bg-opacity-20 p-10`}>
        
        <div className="bg-white overflow-y-auto w-full h-full justify-start px-6 py-4 sm:py-6 rounded-md lg:px-8 relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={onClose} className="size-6 absolute right-1 top-1 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <div className="text-start flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight ">Upload </h1>
            <p className="mt-3 text-lg ">Please select a PDF file to upload. Once uploaded, the file will be displayed below for preview.</p>
        </div>
        <div  className=" ">
        <div className=" grid grid-cols-10 h-[86%] gap-4 mt-4">
            <div className="w-full bg-white border rounded-lg relative items-center flex col-span-7">
            {pdfSrc&&
            <svg onClick={()=>{setPdfSrc(null);setFile(null)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 p-1 absolute cursor-pointer top-0 rounded-full hover:bg-secondColor hover:text-white duration-300 right-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            }
            {pdfSrc ?
            <iframe
                src={pdfSrc}
                width="100%"
                height="600px"
                style={{ border: 'none' }}
            ></iframe>
            :<label htmlFor="uploadFile1"
                className="bg-white my-14 text-gray-500 font-semibold text-base rounded px-36 h-64 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                    <path
                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    data-original="#000000" />
                    <path
                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    data-original="#000000" />
                </svg>
                <input onChange={handleFileChange} type="file" accept="application/pdf" id='uploadFile1' className="hidden" />
                <h4 className="">Drag & Drop or <label htmlFor="uploadFile1" className="text-blue-600 hover:underline cursor-pointer">Choose file</label> to upload</h4>
                <p className="text-sm font-medium text-gray-500 mt-2"> only pdf is Allowed.</p>
            </label>}

            </div>
            <div className="border-2 py-8 px-4 bg-white rounded-lg w-full col-span-3">
            <span className="text-xl ">Selecte a folder : </span>
                <div>
                {folder?
                <div className="text-center border-2 py-2 rounded-md relative">{folders.find((item)=>item.id===folder)?.name}
                <svg onClick={()=>setFolder(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" hover:text-red-500 right-1 top-1 absolute size-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </div>
                :<div className="relative">
                    <input
                        className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-600 focus:shadow-outline"
                        id="folders-search"
                        autoComplete="off"
                        type="text"
                        onFocus={()=>setShowModeleDropFolders(true)}
                        value={queryFolders}
                        onChange={(e)=>setQueryFolders(e.target.value)}
                        placeholder="Search..."
                    />
                    

                    <div className="absolute right-0 inset-y-0 flex items-center">
                        <svg
                        onClick={()=>setQueryFolders('')}
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 cursor-pointer mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                        
                    </div>

                    <div className="absolute left-0 inset-y-0 flex items-center">
                        
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                    </svg>
                    </div>
                    {showModeleDropFolders&&<DropDown notEff={['folders-search']} setIsShow={setShowModeleDropFolders}><div id="modeleDropDown" className=" overflow-y-auto max-h-48 absolute bg-white py-2 z-30 border mt-1 w-full rounded-md shadow-md ring-1 ring-gray-300">
                        {filteredDataFolders.length >0?filteredDataFolders.map((item)=><button name="modelesbuttons" onClick={()=>setFolder(item.id)} type="button" key={item.id} className="px-4 text-start my-1 py-1 hover:bg-gray-200 w-full">{item.name}</button>):
                        <span className="text-center w-full text-sm">Non folders !</span>}
                    </div></DropDown>}
                    </div>}
                    
                    
                </div>
                <span className="text-xl ">Selecte a modèles : </span>
                <div>
                {selectedModele?
                <div className="text-center border-2 py-2 rounded-md relative">{selectedModele.name}
                <svg onClick={()=>setSelectedModele(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" hover:text-red-500 right-1 top-1 absolute size-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </div>
                :<div className="relative">
                    <input
                        className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-600 focus:shadow-outline"
                        id="modeles-search"
                        type="text"
                        onFocus={()=>setShowModeleDrop(true)}
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        placeholder="Search..."
                    />
                    <div className="absolute right-0 inset-y-0 flex items-center">
                        <svg
                        onClick={()=>setQuery('')}
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 cursor-pointer mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                        
                    </div>

                    <div className="absolute left-0 inset-y-0 flex items-center">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>
                    </div>
                    {showModeleDrop&&<DropDown notEff={['modeles-search']} setIsShow={setShowModeleDrop}><div id="modeleDropDown" className=" overflow-y-auto max-h-48 absolute bg-white py-2 border mt-1 w-full rounded-md shadow-md ring-1 ring-gray-300">
                        {filteredData.length >0?filteredData.map((item)=><button name="modelesbuttons" onClick={()=>setSelectedModele(item)} type="button" key={item.id} className="px-4 text-start my-1 py-1 hover:bg-gray-200 w-full">{item.name}</button>):
                        <span className="text-center w-full text-sm">Non modeles !</span>}
                    </div></DropDown>}
                    </div>}
                    {selectedModele&&
                    <div className="border rounded-md overflow-auto p-6 mt-4 ">
                    {selectedModele.ruleLine.map((metaData: any) => {
                    const field = metadataValues.find((item) => item.ruleLineId === metaData.id) || { value: '' };
                    return (
                        <div key={metaData.id} className="mb-1">
                        <label
                            htmlFor={`field-${metaData.id}`}
                            className="mb-1 ml-1 block text-base font-medium text-gray-700"
                        >
                            {metaData.name}
                            {metaData.obligatory && <span className="text-red-600">*</span>}
                        </label>
                        <input
                            value={field.value}
                            onChange={(e) => handleInputChange(e, metaData.id)}
                            required={metaData.obligatory}
                            type={metaData.type}
                            name={`field-${metaData.id}`}
                            id={`field-${metaData.id}`}
                            placeholder={`Enter ${metaData.name} metaData ...`}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#9ea2db] focus:shadow-md"
                        />
                        </div>
                    );
                    })}
                    </div>}
                    
                </div>
            </div>
            </div>
            <div className="grid my-2 grid-cols-10">
            <div className="col-span-7 flex flex-col">
                    <div className=" items-center flex">
                        <input type="checkbox"/> 
                        <span className="ml-1">fill in metafadata using structured filename. </span>
                    </div>
                    <div className=" items-center flex">
                        <input type="checkbox"/> 
                        <span className="ml-1">fill in metafadata using XML file. </span>
                    </div>
                    <div className=" items-center flex">
                        <input type="checkbox"/> 
                        <span className="ml-1">orename document with metadata.</span>
                    </div>
              </div>
              <div className="col-span-3 items-end flex justify-end">
                  <button onClick={handleUpload} className="py-1 px-4 rounded-md bg-secondColor text-white hover:bg-slate-600">Upload</button>
              </div>
            </div>
        </div>
        
        </div>

    </div>)
}
export default UploadForm;