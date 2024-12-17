import { useState } from "react";
import DropDown from "../DropDown";

const MetaDataInTable=({setSelectedMetaData,selectedMetaData,index,meta,duplicateItems,deleteItems,setShowForm,setEdit,metaData,exportToCsv,exportToExcel})=>{
    const [dropDownMetaData,setDropDownMetaData] = useState(false);
    return(
        <tr className={`border-b-2 hover:bg-slate-100 items-center `}>
                                    <td className=" px-6 flex text-sm items-center">
                                    <input onClick={()=>setSelectedMetaData(selectedMetaData.includes(index)?selectedMetaData.filter(elm => elm !== index):[...selectedMetaData,index])} defaultChecked={selectedMetaData.includes(index)} type="checkBox" className="mr-2" />
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 6H2a1.001 1.001 0 0 0-1 1v3a1.001 1.001 0 0 0 1 1h20a1.001 1.001 0 0 0 1-1V7a1.001 1.001 0 0 0-1-1zm0 4H2V7h20v3h.001M22 17H2a1.001 1.001 0 0 0-1 1v3a1.001 1.001 0 0 0 1 1h20a1.001 1.001 0 0 0 1-1v-3a1.001 1.001 0 0 0-1-1zm0 4H2v-3h20v3h.001M10 14v1H2v-1zM2 3h8v1H2z" fill="currentColor"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                                            <span className='ml-2  text-gray-500 text-base'>{meta.name}</span>
                                           
                                    </td>
                                    <td className=" px-6 border-gray-200 text-gray-500 text-12px">Créer par vous • 4 nov. 2024</td>
                                    <td className=" px-6 border-gray-200 text-gray-500 text-12px">
                                    <span className="flex">
                                        <svg width="22px" className=" size-5" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 7H8.2C7.0799 7 6.51984 7 6.09202 7.21799C5.71569 7.40973 5.40973 7.71569 5.21799 8.09202C5 8.51984 5 9.0799 5 10.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.8C12.9201 21 13.4802 21 13.908 20.782C14.2843 20.5903 14.5903 20.2843 14.782 19.908C15 19.4802 15 18.9201 15 17.8V17M19 8V13.8C19 14.9201 19 15.4802 18.782 15.908C18.5903 16.2843 18.2843 16.5903 17.908 16.782C17.4802 17 16.9201 17 15.8 17H12.2C11.0799 17 10.5198 17 10.092 16.782C9.71569 16.5903 9.40973 16.2843 9.21799 15.908C9 15.4802 9 14.9201 9 13.8V6.2C9 5.0799 9 4.51984 9.21799 4.09202C9.40973 3.71569 9.71569 3.40973 10.092 3.21799C10.5198 3 11.0799 3 12.2 3H14M19 8L14 3M19 8H15.6C15.0399 8 14.7599 8 14.546 7.89101C14.3578 7.79513 14.2049 7.64215 14.109 7.45399C14 7.24008 14 6.96005 14 6.4V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span className=" underline cursor-pointer">4 Fichiers</span>
                                    </span>
                                    </td>
                                    <td className="py-1 px-6 grid grid-cols-2">
                                    <div className='relative items-center flex group'>
                                            
                                                <span className="text-gray-500 ml-1 text-12px">{meta.ruleLine.length}</span>
                                            
                                            <div className="absolute group-hover:flex max-h-32 top-5 z-20 hidden w-fit p-1 bg-white border rounded shadow">
                                                <div className='grid w-fit'>
                                                    {meta.ruleLine.length === 0 ?
                                                    <span className=' p-1 w-fit bg-white rounded-lg'> 
                                                        no rule yet
                                                    </span>:
                                                    meta.ruleLine.map((ruel,index)=>{
                                                        return(
                                                            <span key={index} className='max-h-28 text-xs grid p-1 w-fit bg-white rounded-lg'> 
                                                               {ruel.name} : {ruel.type}
                                                            </span>
                                                        )
                                                    })
                                                    }
                                                    
                                                    
                                                </div>
                                            
                                            </div>
                                        
                                    </div>
                                    <div className='flex relative justify-end'>
                                        <button onClick={()=>{setDropDownMetaData(!dropDownMetaData)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded-full bg-gray-100 cursor-pointer size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                        </svg></button>
                                        {dropDownMetaData&&
                                        <DropDown setIsShow={setDropDownMetaData}>
                                        <div className=" absolute z-10 bg-white border  border-gray-200 shadow-lg rounded-[0.3rem] py-2 grid top-5 right-4">
                                        
                                        <button onClick={()=>{setEdit({data:metaData[index],index}),setShowForm(true)}} className=" pl-4 p-1 flex justify-start mt-2 items-center hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                            Edit</button>
                                        <button onClick={()=>duplicateItems([index])} className="w-40 pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5 mr-1">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M6 16H5a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v1M9 20h10a1 1 0 001-1V9a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1z"/>
                                        </svg>
                                            Créer une copie</button>
                                        <button onClick={()=>deleteItems([index])} className="pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                            Delete</button>
                                            <div className="border my-1"></div>
                                        <div className="group pl-4 p-1 grid grid-cols-2 relative items-center mt-2 hover:bg-gray-200">
                                        <div className="flex"><div><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="size-5 mr-1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5L11.6464 4.64645L12 4.29289L12.3536 4.64645L12 5ZM12.5 14C12.5 14.2761 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.2761 11.5 14L12.5 14ZM6.64645 9.64645L11.6464 4.64645L12.3536 5.35355L7.35355 10.3536L6.64645 9.64645ZM12.3536 4.64645L17.3536 9.64645L16.6464 10.3536L11.6464 5.35355L12.3536 4.64645ZM12.5 5L12.5 14L11.5 14L11.5 5L12.5 5Z" fill="currentColor"/>
                                        <path d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16" stroke="currentColor"/>
                                        </svg></div>
                                        <div>Exporter</div></div>
                                            <div className="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg></div>
                                            <div className=" group-hover:grid hidden absolute right-[10rem] shadow-lg w-32 justify-start bg-white rounded-md py-4 top-0">
                                                
                                                <button onClick={()=>exportToExcel([index])} className="hover:bg-gray-200 w-32 items-center grid grid-cols-2 pl-2 py-2">
                                                     
                                                 <span className="flex justify-start"> To excel</span>
                                                 <span className="flex justify-end pr-4"><svg fill="currentColor" className="size-4 mr-1 " width="22px" height="22px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m0 1016.081 409.186 409.073 79.85-79.736-272.867-272.979h1136.415V959.611H216.169l272.866-272.866-79.85-79.85L0 1016.082ZM1465.592 305.32l315.445 315.445h-315.445V305.32Zm402.184 242.372-329.224-329.11C1507.042 187.07 1463.334 169 1418.835 169h-743.83v677.647h112.94V281.941h564.706v451.765h451.765v903.53H787.946V1185.47H675.003v564.705h1242.353V667.522c0-44.498-18.07-88.207-49.581-119.83Z" fill-rule="evenodd"/>
                                                </svg> </span>
                                                </button>
                                                <button onClick={()=>exportToCsv([index])} className="hover:bg-gray-200 w-32 items-center grid grid-cols-2 pl-2 py-2">
                                                     
                                                 <span className="flex justify-start">To csv</span>
                                                 <span className="flex justify-end pr-4"><svg fill="currentColor" className="size-4 mr-1 " width="22px" height="22px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m0 1016.081 409.186 409.073 79.85-79.736-272.867-272.979h1136.415V959.611H216.169l272.866-272.866-79.85-79.85L0 1016.082ZM1465.592 305.32l315.445 315.445h-315.445V305.32Zm402.184 242.372-329.224-329.11C1507.042 187.07 1463.334 169 1418.835 169h-743.83v677.647h112.94V281.941h564.706v451.765h451.765v903.53H787.946V1185.47H675.003v564.705h1242.353V667.522c0-44.498-18.07-88.207-49.581-119.83Z" fill-rule="evenodd"/>
                                                </svg> </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="group relative pl-4 p-1 grid grid-cols-2 items-center hover:bg-gray-200">
                                        <div className="flex"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg></div>

                                        <div>Paretager</div></div>
                                            <div className="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg></div>

                                            <div className=" group-hover:grid hidden absolute right-[10rem] shadow-lg w-32 justify-start bg-white rounded-md py-4 top-0">
                                                
                                                <button className="hover:bg-gray-200 w-32 items-center grid grid-cols-2 pl-2 py-2">
                                                     
                                                 <span className="flex justify-start">User</span>
                                                 <span className="flex justify-end pr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                    </svg>
                                                </span>
                                                </button>
                                                <button className="hover:bg-gray-200 w-32 items-center grid grid-cols-2 pl-2 py-2">
                                                     
                                                 <span className="flex justify-start">Lien</span>
                                                 <span className="flex justify-end pr-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                                </svg>
                                                </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="border my-1"></div>
                                        <button className="pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" className="size-5 mr-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="15" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 12.5858L17.0858 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="16.9142" y1="7" x2="18" y2="8.08579" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="14.4142" y1="9.5" x2="15.5" y2="10.5858" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                            droit d'accès</button>
                                        <button className="pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                            option 1</button>
                                        <button className="pl-4 p-1 flex justify-start items-center hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                            option 2</button>
                                        </div></DropDown>}
                                    </div>
                                    </td>
                                </tr>
    );
}
export default MetaDataInTable;