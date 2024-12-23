"use client"

import { useEffect, useState } from "react";
import { Rule,data } from "./admin/Modeles/MetaData";
import DropDown from "./DropDown";
import { useLayoutContext } from "./myContext/myContext";
import axiosClient from "@/app/lib/axiosClient";


const CustemSearch=({onClose})=>{
    const{setAlerts}=useLayoutContext();
    const [modeles,setModeles] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 
    const getMedeles = () => {
        axiosClient
            .get("/backReq/admin/metadata", { params: { type: "all" } })
            .then((response) => {
              setModeles(response.data); // Display subfolders and files of the clicked folder
              setFilteredData(response.data);
            })
            .catch(() => setAlerts((prv)=>[...prv,{type:2,message:"error in getting file"}]));
    };

  useEffect(() => {getMedeles();},[]);
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
            modeles.filter((item) => item.name.toLowerCase().includes(query))
        );
    },[query])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, ruleLineId: number) => {
        const { value } = e.target;
        setMetadataValues((prev) =>
          prev.map((item) =>
            item.ruleLineId === ruleLineId ? { ...item, value } : item
          )
        );
      };  
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
      };

    return(
        <div id="wrapper" onClick={handleClose} className={`fixed inset-0 z-[100] bg-secondColor bg-opacity-20 flex pt-[4.2rem] justify-center`}>
        <div className="bg-white h-fit w-[calc(100vw-58rem)] ml-[17%] overflow-auto py-4 max-h-[calc(100vh-7rem)] px-6 rounded-md lg:px-8">
            <form>
            <h1 className="text-4xl md:text-3xl font-bold tracking-tight">Recherche avancée</h1>
            <div className=" border-b my-2"/>
            <div className="py-2 grid-cols-8 items-center grid">
                <label htmlFor="nomFichier" className="mb-3 font-semibold col-span-2 block text-base ">
                    Nom de fichier :
                </label>
                <input autoComplete="off" type="text" name="nomFichier" id="NomFichier" placeholder="nomFichier"
                    className="w-full col-span-6 rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" />
            </div>
            <div className="py-2 grid-cols-8 items-center grid">
                <label htmlFor="content" className="mb-3 font-semibold col-span-2 block text-base ">
                        Content :
                </label>
                <input autoComplete="off" type="text" name="content" id="content" placeholder="e.g. facture de vente"
                    className="w-full col-span-6 rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" />
            </div>
            <div className="grid grid-cols-2 gap-1">
                <div className="py-2 grid-cols-8 items-center grid">
                    <label htmlFor="date" className="mb-3 font-semibold col-span-3 block text-base ">
                            Date :
                    </label>
                    <input autoComplete="off" type="date" name="date" id="date" 
                        className="w-full col-span-5 rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" />
                </div>
                <div className="py-2 grid-cols-8 items-center grid">
                    <label htmlFor="time" className="mb-3 font-semibold col-span-3 block text-base ">
                            Time :
                    </label>
                    <input autoComplete="off" type="time" name="time" id="time" 
                        className="w-full col-span-5 rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md" />
                </div>
            </div>
            <span className="text-xl "> Modèle : </span>
                <div>
                {selectedModele?
                <div className="text-center border-2 py-2 rounded-md relative">{selectedModele.name}
                <svg onClick={()=>setSelectedModele(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" hover:text-red-500 right-1 top-1 absolute size-4 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </div>
                :<div className="relative">
                    <input autoComplete="off"
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
                        <input autoComplete="off"
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
                <div className="grid grid-cols-2 mb-4 mt-20">
                    <div className=" flex justify-start">
                        <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-xl">
                            Annuler
                        </button>
                    </div>
                    <div className=" flex justify-end">
                        <button type="submit" className="bg-foreground hover:bg-secondColor text-white font-bold py-2 px-4 rounded-xl">
                            Rechercher
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </div>);
}
export default CustemSearch;