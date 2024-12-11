import axiosClient from "@/app/lib/axiosClient";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Document, pdfjs, Page } from "react-pdf";
import { useEffect, useRef, useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js`;

const  UploadForm=({onClose,sidebarOpen})=>{
    
    const [modeles,setModeles] = useState([
        {
            "id": 1,
            "name": "File",
            "activate": false,
            "createdAt": "2024-11-22T21:48:41.707651",
            "ruleLine": [
                {
                    "id": 1,
                    "name": "Filename",
                    "type": "Text",
                    "obligatory": true,
                    "position": 1
                }
            ]
        },
        {
            "id": 2,
            "name": "Facture de vente",
            "activate": false,
            "createdAt": "2024-11-25T14:40:02.503965",
            "ruleLine": [
                {
                    "id": 2,
                    "name": "Numero",
                    "type": "Number",
                    "obligatory": false,
                    "position": null
                },
                {
                    "id": 3,
                    "name": "Fournisseur",
                    "type": "Text",
                    "obligatory": false,
                    "position": null
                },
                {
                    "id": 4,
                    "name": "Date",
                    "type": "Date",
                    "obligatory": false,
                    "position": null
                }
            ]
        },
        {
            "id": 3,
            "name": "hh",
            "activate": false,
            "createdAt": "2024-12-07T01:29:28.264897",
            "ruleLine": []
        },
        {
            "id": 4,
            "name": "factor",
            "activate": false,
            "createdAt": "2024-12-07T01:30:18.541127",
            "ruleLine": []
        },
        {
            "id": 5,
            "name": "metafopdf",
            "activate": false,
            "createdAt": "2024-12-07T01:38:34.799484",
            "ruleLine": []
        }
    ]);
    const [query, setQuery] = useState(""); // To hold the search query
    const [filteredData, setFilteredData] = useState(modeles); // To hold the filtered results
    const [showModeleDrop, setShowModeleDrop] = useState(false);
    const [selectedModele, setSelectedModele] = useState<{"id": number,
            "name": string,
            "activate": boolean,
            "createdAt": string,
            "ruleLine": any[]}>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        setFilteredData(
            modeles.filter((item) => item.name.toLowerCase().includes(query))
        );
    },[query])

      // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowModeleDrop(false);
        }
    };

    useEffect(() => {
        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [pdfFile, setPdfFile] = useState<string | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = reader.result as string;
            if (!base64String.startsWith("data:application/pdf;base64,")) {
              setPdfFile(`data:application/pdf;base64,${base64String.split(",")[1]}`);
            } else {
              setPdfFile(base64String);
            }
          };
          reader.readAsDataURL(selectedFile);
        } else {
          alert("Please select a valid PDF file.");
          setPdfFile(null);
        }
      };
  
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
      setNumPages(numPages); // Set the total number of pages
    };

    const onDocumentLoadError = (error: any) => {
        console.error("Failed to load PDF:", error);
      };
    //   const handleUpload = async () => {
    //     if (!file) return alert("Please select a file to upload");
    
    //     const formData = new FormData();
    //     formData.append("file", file);
    
    //     try {
    //       const response = await axiosClient.post("/api/upload", formData, {
    //         onUploadProgress: (progressEvent) => {
    //           const percentage = Math.round(
    //             (progressEvent.loaded * 100) / progressEvent.total
    //           );
    //         },
    //       });
    
    //       alert("File uploaded successfully");
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error("Upload failed:", error);
    //       alert("Failed to upload the file");
    //     }
    //   };
      
    useEffect(()=>console.log(pdfFile),[pdfFile])
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
      };
    return(
    <div id="wrapper" onClick={handleClose} className={`fixed inset-0 z-[97] mt-[2.5rem] ${sidebarOpen ? "ml-[12rem]":"ml-[4rem]"} bg-black bg-opacity-20 p-10`}>
        
        <div className="bg-white w-full h-full justify-start px-6 py-4 sm:py-6 rounded-md lg:px-8">
        <div className="text-start flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Upload</h1>
            <p className="mt-3 text-lg text-gray-600">Feature request? Suggestion? or maybe you'd like to be our critic! daw wea</p>
        </div>
        <form className=" grid grid-cols-10 gap-4 h-[100%] mt-4">
            <div className="w-full border rounded-lg  items-center flex col-span-7">

            {pdfFile ? 
             <div className="">
             <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<p>Loading PDF...</p>}
            >
            <div>
                {Array.from(new Array(numPages), (_, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderTextLayer={false} // Optional: Disable text layer for better performance
                    renderAnnotationLayer={false} // Optional: Disable annotation layer
                />
                ))}
            </div>
            </Document>
           </div>
            :<label htmlFor="uploadFile1"
                className="bg-white text-gray-500 font-semibold text-base rounded px-36 h-64 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
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
            <div className="border-2 py-8 px-4 rounded-lg w-full col-span-3">
                <span className="text-xl ">Selecte a modèles : </span>
                <div>
                {selectedModele?
                <div className="text-center border-2 py-2 rounded-md relative">{selectedModele.name}
                <svg onClick={()=>setSelectedModele(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" hover:text-red-500 right-1 top-1 absolute size-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </div>
                :<div ref={dropdownRef} className="relative">
                    <input
                        className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-600 focus:shadow-outline"
                        id="modèles-search"
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
                    {showModeleDrop&&<div id="modeleDropDown" className=" overflow-y-auto max-h-48 absolute bg-white py-2 border mt-1 w-full rounded-md shadow-md ring-1 ring-gray-300">
                        {filteredData.map((item)=><button name="modelesbuttons" onClick={()=>setSelectedModele(item)} type="button" key={item.id} className="px-4 text-start my-1 py-1 hover:bg-gray-200 w-full">{item.name}</button>)}

                    </div>}
                    </div>}
                    {selectedModele&&
                    <div className="border rounded-md overflow-auto max-h-[50%] p-6 mt-4 ">
                    {selectedModele.ruleLine.map((metaData,index)=><div key={index} className="mb-1">
                    <label htmlFor="phone" className="mb-1 ml-1 block text-base font-medium text-gray-700">
                        {metaData.name}
                        {metaData.obligatory&&<span className="text-red-600">*</span>}
                    </label>
                    <input required={metaData.obligatory} type={metaData.type} name="phone" id="phone" placeholder={`Enter ${metaData.name} metaData ...`}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#9ea2db] focus:shadow-md" />
                    </div>)}
                    </div>}
                    
                </div>
            </div>
            <div className="col-span-7 flex flex-col">
                <div className="h-4 items-center flex">
                    <input type="checkbox"/> 
                    <span className="ml-1">oooooooo oooo ooo oo </span>
                </div>
                <div className="h-4 items-center flex">
                    <input type="checkbox"/> 
                    <span className="ml-1">oooooooo oooo ooo oo </span>
                </div>
                <div className="h-4 items-center flex">
                    <input type="checkbox"/> 
                    <span className="ml-1">oooooooo oooo ooo oo </span>
                </div>
            </div>
            <div className="col-span-3 items-end flex justify-end">
                <button className="py-1 px-4 rounded-md bg-secondColor text-white hover:bg-slate-600">Upload</button>
            </div>
        </form>
        </div>

    </div>)
}
export default UploadForm;