import axiosClient from "@/app/lib/axiosClient";
import { useEffect, useState } from "react";
import { useLayoutContext } from "@/components/myContext/myContext";
import Loader from "@/app/lib/Loader";
import DropDown from "@/components/DropDown";
import Permission from "./Permission";

const Files = ({file}) => {
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


  return (
    <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">   
      <div className="text-start flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight ">file-N0.pdf </h1>
            <p className="mt-3 text-lg ">option 1 | 50 Users | 5 Admin | 758 items</p>
        </div>
        <div className="h-[65vh] overflow-auto grid grid-cols-10 items-start gap-4 mt-4">
            <div className="w-full bg-white border rounded-lg relative justify-center flex col-span-7">
            {file?.data ?
            <iframe
                src={file.data}
                width="100%"
                height="600px"
                style={{ border: 'none' }}
            ></iframe>:<Loader/>}

            </div>
            <div className="border-2 py-8 px-4 bg-white max-h-[100%] overflow-auto rounded-lg w-full col-span-3">
                <span className="text-xl "> Modèle : </span>
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
                    {showModeleDrop&&<DropDown notEff={['modeles-search']} setIsShow={setShowModeleDrop}><div id="modeleDropDown" className="z-10 overflow-y-auto max-h-48 absolute bg-white py-2 border mt-1 w-full rounded-md shadow-md ring-1 ring-gray-300">
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
                <Permission />
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
                <div className="col-span-3 max-h-[50%] items-end flex justify-end">
                    <button  className="py-1 px-4 rounded-md bg-secondColor text-white hover:bg-slate-600">Save</button>
                </div>
            </div>
    </div>
  );
};
export default Files;
