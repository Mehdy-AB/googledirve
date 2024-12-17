"use client"

import { data, Rule } from "@/app/dashboard/admin-panel/roles/page";
import { useEffect, useState } from "react";


const CreateRoleForm=({onClose,sidebarOpen,addRole,edit}:{onClose,sidebarOpen,addRole,edit?:{Role:data,update,index:number}})=>{
    const [ruleLine,setRuleLine]=useState<Rule[]>([]);
    const [fields,setFields] =useState<{name:string,description:string}>({name:"",description:null})

    useEffect(()=>{
        if(edit){
            setRuleLine(edit.Role.ruleLine)
            setFields({name:edit.Role.name,description:edit.Role.description});
        }
    },[])

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
      };

    const addRule=()=>{
        setRuleLine([...ruleLine,{name:"Default",type:"Text",obligatory:false,position:null}]);
        return;
    } 

    const onChangeRule = (index: number, updatedRule: Partial<Rule>) => {
        setRuleLine((prev) =>
          prev.map((rule, i) => (i === index ? { ...rule, ...updatedRule } : rule))
        );
      };

      const onChangeName = (e) => {

        setFields({...fields,name:e.target.value});
      };

      const onChangeDesc = (e) => {
        setFields({...fields,description:e.target.value});
      };
    
      const onDeleteRule = (index: number) => {
        setRuleLine((prev) => prev.filter((_, i) => i !== index));
      };
      
      const [typeDrop,setTypeDrop]= useState<number | null>(null);

      const onCreate=()=>{
        const Role = {name:fields.name,description:fields.description,ruleLine:ruleLine};
        addRole(Role);


      }

    return(
    <div id="wrapper" onClick={handleClose} className={`fixed inset-0 z-[97] mt-[2.5rem] ${sidebarOpen ? "ml-[12rem]":"ml-[4rem]"} bg-secondColor bg-opacity-20 flex justify-center items-center`}>
        <div className="bg-white px-6 py-4 sm:py-6 rounded-md lg:px-8">
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <div className="border-2 rounded-full w-full mx-8 mt-2 mb-6"></div>
            <h1 className="text-4xl md:text-3xl font-bold tracking-tight">Créer Role</h1>
            <p className="mt-3 text-sm text-gray-500">
            Les rôles sont utilisés pour définir différentes typologies d'utilisateurs et limiter l'accès à certaines fonctionnalités de l'application.</p>
            <div className="border rounded-full w-[70%] mt-6"></div>
        </div>
        
        <form onSubmit={()=>{onCreate();onClose()}} className=" mx-auto mt-8 max-w-xl sm:mt-8">
            <div className="grid gap-x-8 gap-y-6">
            <div>
                <label htmlFor="Nom-modèle" className=" text-md font-semibold leading-6 text-secondColor">Nom</label>
                <div className="mt-2.5">
                <input defaultValue={fields.name} onChange={onChangeName} required={true} type="text" name="Nom-modèle" id="Nom-modèle" autoComplete="given-name" placeholder="Nom de modèle" className="flex justify-center w-full rounded-md border-2 border-dashed px-3.5 py-2 text-secondColor shadow-sm ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:border-secondColor focus:border-dashed  sm:text-sm sm:leading-6"/>
                </div>
            </div>
            
            <div className="">
                <label htmlFor="description" className="text-md font-semibold leading-6 text-secondColor">Description</label>
                <div className="mt-2.5">
                <textarea defaultValue={fields.description} onChange={onChangeDesc} name="description" id="description" rows={4} placeholder="description de modèle ..." className="flex max-h-40 min-h-10 overflow-y-auto justify-center w-full rounded-md border-2 border-dashed px-3.5 py-2 text-secondColor shadow-sm ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:border-secondColor focus:border-dashed  sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>

            <div>
                <div>
                    <div className="gird grid-cols-2 items-center">
                    <label htmlFor="ruleLine" className="text-md font-semibold leading-6 text-secondColor">RuleLine : </label>
                    
                    <button onClick={addRule} type="button" className=" border rounded-lg bg-gray-50 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    </div>
                </div>
                <div className="mt-2 border rounded-md max-h-36 p-2 overflow-auto bg-gray-50">
                    {ruleLine.length === 0 ? 
                        <div className="flex justify-center items-center h-full">
                            <div>
                            <div>Non ruleLine !!</div>
                            <div onClick={addRule} className=" text-xs underline text-gray-400 cursor-pointer hover:text-gray-500">Ajouter un nouveau</div>
                            </div>
                        </div>
                    :
                    <div>
                        <div className=" grid grid-cols-7 border-t border-r border-l py-1 px-2 gap-1 relative  rounded-t-lg bg-white">
                                <div className=" col-span-4 pl-2 flex">
                                    Nom                               
                                </div>
                                <div className=" col-span-2 pl-6 items-center flex">
                                    Type
                                </div>
                                <div className=" col-span-1 justify-center flex">
                                obligatoire
                                </div>
                                
                        </div>
                        {ruleLine.map((_rule, index) => {
                        return (
                            <div className=" grid grid-cols-7 border-t py-2 border-l border-r px-2 gap-1 relative bg-white" key={index}>
                                <div className=" col-span-4 justify-center flex">
                                    <input onChange={(e)=>onChangeRule(index,{..._rule,name:e.target.value})} height={10} defaultValue={_rule.name} type="text" className="h-8 w-full px-3 rounded-md border borderpx-3.5 py-2 text-secondColor shadow-sm ring-gray-300 placeholder:text-gray-400 focus:outline-none  focus:border-secondColor "/>
                                </div>
                                <div className=" col-span-2 pl-6 items-center flex">
                                    <div className=" relative">
                                        <button onBlur={()=>setTimeout(() => {setTypeDrop(null)}, 100)} onClick={()=>{typeDrop === index? setTypeDrop(null):setTypeDrop(index)}} type="button" className="flex items-center group border rounded-md py-[0.15rem] pl-10 pr-3">{_rule.type}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 ml-5  duration-200 group-hover:rotate-90">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                        </button>
                                        <div className=" duration-200 transition-opacity ease-in">
                                        {typeDrop === index && 
                                            <div className=" absolute top-8 right-0 border py-2 w-[100%] bg-white rounded-md z-50">
                                                <button type="button" onClick={()=>onChangeRule(index,{..._rule,type:"Text"})} className="w-full hover:bg-gray-100">Text</button>
                                                <button type="button" onClick={()=>onChangeRule(index,{..._rule,type:"Boolean"})} className="w-full hover:bg-gray-100">Boolean</button>
                                                <button type="button" onClick={()=>onChangeRule(index,{..._rule,type:"Number"})} className="w-full hover:bg-gray-100">Number</button>
                                                <button type="button" onClick={()=>onChangeRule(index,{..._rule,type:"Date"})} className="w-full hover:bg-gray-100">Data</button>
                                            </div>
                                        }</div>
                                    </div>
                                </div>
                                <div className=" col-span-1 justify-center flex">
                                    <input onClick={()=>onChangeRule(index,{..._rule,obligatory:!_rule.obligatory})} defaultChecked={_rule.obligatory} type="checkbox" />
                                </div>
                                <span onClick={()=>onDeleteRule(index)} className=" absolute top-0 right-0 bg-secondColor text-white rounded-full cursor-pointer hover:opacity-70">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                </span>
                            </div>
                        );
                        })}
                        <div className=" grid grid-cols-7 border-b border-r border-l py-1 px-2 gap-1 relative  rounded-b-lg bg-white">

                        </div>
                    </div>
                  
                    }
                </div>
            </div>
            </div>
            <div className="mt-10">
            {edit?
            <div className="grid grid-cols-2">
                <div className=" ml-4">
                    <button type="button" onClick={onClose} className="bg-gray-400 hover:opacity-80 px-2 text-white rounded-sm py-2">Cancel</button>
                </div>
                <div className="flex justify-end mr-4">
                <button onClick={()=>{edit.update(edit.index,{name:fields.name,description:fields.description,ruleLine:ruleLine,activate:false,createdAt:new Date()}),onClose()}} type="button"  className="bg-secondColor px-2 hover:opacity-80 text-white rounded-lg py-2 mr-4">Mis à jour</button>
                <button type="submit" className="bg-secondColor px-2 hover:opacity-80 text-white rounded-lg py-2">Créer un nouveau</button>
                </div>
            </div>
            :<button type="submit" className="bg-secondColor hover:opacity-80 text-white rounded-sm py-2 w-full block">Créer →</button>}
            </div>
        </form>
        <div className="border-2 rounded-full w-auto mx-8  mt-5"></div>
        </div>

    </div>)
}
export default CreateRoleForm;