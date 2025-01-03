"use client"

import { useEffect, useState } from "react";
import axiosClient from "@/app/lib/axiosClient";
import { useLayoutContext } from "@/components/myContext/myContext";
//import CreateRolesForm from "@/components/CreateRolesForm";
import DropDown from "@/components/DropDown";


const Page=()=>{
  const [modeles,setModeles] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 
    const {setAlerts}=useLayoutContext();
    const getMedeles = () => {
        axiosClient
            .get("/backReq/admin/metadata", { params: { type: "all" } })
            .then((response) => {
              setModeles(response.data); // Display subfolders and files of the clicked folder
              setFilteredData(response.data);
            })
            .catch((error) => setAlerts((prv)=>[...prv,{type:2,message:"error in getting modeles"}]));
    };

    useEffect(()=>{
        getMedeles();
    },[]);

    const [query, setQuery] = useState(""); // To hold the search query
    const [showModeleDrop, setShowModeleDrop] = useState(false);
    const [showMetaDrop, setShowMetaDrop] = useState(null);
    const [selectedModele, setSelectedModele] = useState<{"id": number,
            "name": string,
            "activate": boolean,
            "createdAt": string,
            "ruleLine": any[]}[]>([]);

    const [metadataValues, setMetadataValues] = useState<{type:string, value:string|any,selectedRule:{idModele,idMetadata,name}[]}[]>([{type:null, value:null,selectedRule:[{ idModele: null, idMetadata: null, name: null }]}]);

    useEffect(()=>{
        setFilteredData(
            modeles?.filter((item) => item?.name?.toLowerCase().includes(query)&&!selectedModele.find((modele)=>modele.id===item.id))
        );
    },[query]);

    const handleSelectModele=(item)=>{
      if(item.ruleLine.length===0){
        setAlerts((prv)=>[...prv,{type:3,message:"no metadata for this modele"}]);
        return;
      }
      setFilteredData(filteredData.filter(items=>items.id!==item.id));
      setSelectedModele((prv)=>[...prv,item])
      setMetadataValues((prevValues) =>
        prevValues.map((modele) => ({
          ...modele,
          selectedRule: [
            ...modele.selectedRule,
            { idModele: item?.id, idMetadata: null, name: null }, // Add the element with null values
          ],
        }))
      );
    }

    const onRemoveModele=(item)=>{
      setSelectedModele(selectedModele.filter((modele)=>modele.id!==item.id));
      setFilteredData([...filteredData,item]);
      setMetadataValues((prevValues) =>
        prevValues.map((modele) => ({
          ...modele,
          selectedRule:modele.selectedRule.filter((rule) => rule.idModele !== item.id), 
        }))
      );
    }

    const handleSelectMetadata=(item,modeleIndex,metaIndex)=>{
      setMetadataValues((prevValues) =>
        prevValues.map((modele, index) => {
          if (index === metaIndex) {
            if(modele.type === item.type||modele.type === null){
            return {
              ...modele,
              type: item.type,
              selectedRule: modele.selectedRule.map((rule, index) => {
                if (index === modeleIndex) {
                  return {
                    idModele: rule.idModele,
                    idMetadata: item.id,
                    name: item.name,
                  };
                }
                return rule;
              }),
            };
          }else{
            setAlerts((prv)=>[...prv,{type:3,message:"type of metadata not compatible with the type "+modele.type}]);
            return modele;
          }
          }
          return modele;
        })
      );
      setShowMetaDrop(null);
    }
    return(
    
             <div className="p-10 mt-10">
                <div className="grid grid-cols-2">
                    <span className="text-xl font-bold"> Links : </span>
                    <div className="relative justify-end flex "> 

                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded-full mr-2 bg-white cursor-pointer size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg></button>

                    <button className=" shadow-lg border text-white bg-secondColor py-1 rounded-md px-2">abutton optional </button>
                    </div>
                    <p className="p-2 text-sm text-gray-400">Les rôles sont utilisés pour définir différentes typologies d'utilisateurs et limiter l'accès à certaines fonctionnalités de l'application.</p>
                </div>
              <div className="mt-4 bg-white shadow-lg rounded-md p-4">
              <span className="font-bold"> links bar : </span>
              <div className="grid grid-cols-12 py-3">
                <div className="text-sm pt-1 font-semibold">selecte modeles:</div>
                <div className="flex gap-2 col-span-11 items-start w-full ">
                  {selectedModele?.map((modele,index)=>(
                    <div key={index} className="flex flex-col w-[16%] justify-center ">
                    <div className="text-center border-2 py-[0.1rem] px-6 rounded-md relative">{modele.name}
                    <svg onClick={()=>onRemoveModele(modele)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" hover:text-red-500 right-1 top-1 absolute size-4 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    </div>
                    {metadataValues.map((meta,index2)=><div key={index2} onClick={()=>setShowMetaDrop(index+''+index2)} className={`${index2===0?'mt-3':'mt-[0.87rem]'} cursor-pointer border flex relative justify-center rounded-md bg-white`}>{meta?.selectedRule[index]?.name||'selecte'}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      {showMetaDrop===index+''+index2&&<DropDown setIsShow={setShowMetaDrop}><div id="modeleDropDown" className="z-[99] top-6 left-0 overflow-y-auto max-h-48 absolute bg-white py-2 border mt-1 w-full rounded-md shadow-md ring-1 ring-gray-300">
                            {modele.ruleLine.length?modele.ruleLine.map((item)=><button onClick={()=>handleSelectMetadata(item,index,index2)} name="modelesbuttons" type="button" key={item.id} className="px-4 text-start my-1 py-1 hover:bg-gray-200 w-full">{item.name}</button>):
                            <span className="text-center w-full text-sm">Non metadata !</span>}
                        </div></DropDown>}
                      </div>)}
                    </div>
                  ))}
                  <div className="flex flex-col w-[16%] justify-center ">
                  <div className="relative ">
                        <input
                            
                            className="appearance-none border-2 pl-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md  py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-600 focus:shadow-outline"
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
                            className="-ml-1 cursor-pointer h-5 w-5 text-gray-400 hover:text-gray-500"
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
                        {showModeleDrop&&<DropDown notEff={['modeles-search']} setIsShow={setShowModeleDrop}><div id="modeleDropDown" className="z-50 overflow-y-auto max-h-48 absolute bg-white py-2 border mt-1 w-full rounded-md shadow-md ring-1 ring-gray-300">
                            {filteredData.length >0?filteredData.map((item)=><button name="modelesbuttons" onClick={()=>handleSelectModele(item)} type="button" key={item.id} className="px-4 text-start my-1 py-1 hover:bg-gray-200 w-full">{item.name}</button>):
                            <span className="text-center w-full text-sm">Non modeles !</span>}
                        </div></DropDown>}
                      </div>
                      {metadataValues.map((meta,index)=>(
                        <div key={index} className=" relative w-full">
                        <input type={meta.type||"text"} disabled={!meta.type} className={`${!meta.type&&' opacity-50'} border-2 pl-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md mt-2 py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-600 focus:shadow-outline`} placeholder="MetaData value" />
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setMetadataValues(metadataValues.filter((_,ind)=>index!==ind))} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" bg-white size-5 top-0 left-52 cursor-pointer hover:text-red-400 absolute">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </div>))
                      }
                      <div className="flex justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setMetadataValues((prv)=>[...prv,{type:null,value:null,selectedRule:selectedModele.map((modele)=>({ idModele: modele.id, idMetadata: null, name: null }))}])} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" cursor-pointer opacity-80 hover:opacity-100 size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-6">
                <button className="bg-secondColor text-white rounded-md px-4 py-1 mt-4">Search</button>
              </div>
              </div>
             </div>
        
    )
}
export default Page;