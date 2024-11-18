
import Image from 'next/image';
import { useState } from 'react';


const Accueil=()=>{
    const [listForm,setListForm] =useState(true);
return(
    <div >
        <div className="grid border-b-2 border-gray-300 p-10 px-28 grid-cols-3 justify-center gap-6 items-center">
        <div className=" h-20 p-6 bg-white  grid rounded-lg drop-shadow-lg w-full">
            <span className=' text-gray-900 '> Manage stock </span>
            <p className=' text-gray-400 text-xs '>dkkwk ppwajrv irthja</p>
        </div>
        <div className=" h-20 p-6 bg-white  grid rounded-lg drop-shadow-lg w-full">
            <span className=' text-gray-900 '> Manage stock </span>
            <p className=' text-gray-400 text-xs '>dkkwk ppwajrv irthja</p>
        </div>
        <div className=" h-20 p-6 bg-white  grid rounded-lg drop-shadow-lg w-full">
            <span className=' text-gray-900 '> Manage stock </span>
            <p className=' text-gray-400 text-xs '>dkkwk ppwajrv irthja</p>
        </div>
        </div>

        <div className='flex gap-6 py-5 items-center justify-center'>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-12px bg-white text-gray-500'> 
            Type
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-12px bg-white text-gray-500'> 
            Users
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-12px bg-white text-gray-500'> 
            Modele
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-12px bg-white text-gray-500'> 
            Emplacement
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-12px bg-white text-gray-500'> 
            Date
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
        </button>
        </div>

        <div className='grid'>
            <span className=' text-gray-700 text-sm'>Dossiers suggérés</span>
            <div className='p-4 grid grid-cols-6 gap-4'>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-xs text-gray-600'>
                        <span className=' font-semibold'>Dossiers N1</span>
                        <span className='ml-1 text-tiny'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-xs text-gray-600'>
                        <span className=' font-semibold'>Dossiers N2</span>
                        <span className='ml-1 text-tiny'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-xs text-gray-600'>
                        <span className=' font-semibold'>Dossiers N3</span>
                        <span className='ml-1 text-tiny'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-xs text-gray-600'>
                        <span className=' font-semibold'>Dossiers N4</span>
                        <span className='ml-1 text-tiny'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-xs text-gray-600'>
                        <span className=' font-semibold'>Dossiers N5</span>
                        <span className='ml-1 text-tiny'>Create par vous</span>
                    </div>
                </div>

                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-xs text-gray-600'>
                        <span className=' font-semibold'>Dossiers N6</span>
                        <span className='ml-1 text-tiny'>Create par vous</span>
                    </div>
                </div>
            </div>

            <div className=' mt-4 grid items-center grid-cols-2'>
             <span className=' text-gray-700 text-sm '>Suggestions de fichiers </span>
             <div className='mr-4 justify-end flex'>
                <button onClick={()=>setListForm(true)} className={`${listForm?"bg-gray-200":"bg-white"} rounded-l-xl p-1 hover:opacity-70 border-r border-gray-300 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </button>
                <button onClick={()=>setListForm(false)} className={`${listForm?"bg-white":"bg-gray-200"} rounded-r-xl p-1 hover:opacity-70 `}>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
                    <path d="M8.89338 16.5302C10.8602 16.5302 12.4364 18.1217 12.4364 20.1024V24.8576C12.4364 26.8243 10.8602 28.4284 8.89338 28.4284H4.17872C2.2259 28.4284 0.635742 26.8243 0.635742 24.8576V20.1024C0.635742 18.1217 2.2259 16.5302 4.17872 16.5302H8.89338ZM24.9903 16.5302C26.9432 16.5302 28.5333 18.1217 28.5333 20.1024V24.8576C28.5333 26.8243 26.9432 28.4284 24.9903 28.4284H20.2757C18.3089 28.4284 16.7327 26.8243 16.7327 24.8576V20.1024C16.7327 18.1217 18.3089 16.5302 20.2757 16.5302H24.9903ZM8.89338 0.531418C10.8602 0.531418 12.4364 2.13552 12.4364 4.10368V8.8588C12.4364 10.8395 10.8602 12.4297 8.89338 12.4297H4.17872C2.2259 12.4297 0.635742 10.8395 0.635742 8.8588V4.10368C0.635742 2.13552 2.2259 0.531418 4.17872 0.531418H8.89338ZM24.9903 0.531418C26.9432 0.531418 28.5333 2.13552 28.5333 4.10368V8.8588C28.5333 10.8395 26.9432 12.4297 24.9903 12.4297H20.2757C18.3089 12.4297 16.7327 10.8395 16.7327 8.8588V4.10368C16.7327 2.13552 18.3089 0.531418 20.2757 0.531418H24.9903Z" fill="currentColor"/>
                    </svg>
                </button>
             </div>
            </div>
            
            {listForm ? <div className={`shadow-sm duration-200 ease-in overflow-hidden mx-4 mt-5`}>
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100 text-12px">
                            <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Nom</th>
                            <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Raison de la suggestion</th>
                            <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Proprietaire</th>
                            <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Emplacement</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-12px">
                        {Array.from({ length: 8 }).map((_, index) =>
                        <tr className="hover:bg-gray-200 items-center cursor-pointer">
                                <td className="py-2 px-6  flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="20px" height="20px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" >
                                    <g>
                                        <path fill="#e95e60" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                                        <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                                        <path opacity="0.5" fill="#FFFFFF" enable-background="new    " d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                                    </g>
                                    <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                                        c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                                        M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                                        h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                                        s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                                        C42.2,42.8,41.9,43.1,41.5,43.1z"/>
                                    </svg>
                                        <span className='ml-2 text-gray-500'>Notes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                        </svg>
                                </td>
                                <td className="py-2 px-6 border-b border-gray-200 text-gray-500 text-tiny">Ouvert par vous • 4 nov. 2024</td>
                                <td className="py-2 px-6 border-b border-gray-200 text-gray-500 text-tiny">johndoe@gmail.com</td>
                                <td className="py-2 cursor-pointer px-6 grid grid-cols-2">
                                <div className='relative items-center flex group'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                        </svg>
                                            <span className="text-gray-500 ml-1 text-tiny">/Dossiers N2</span>
                                        
                                        <div className="absolute hidden w-fit group-hover:block p-1 bg-gray-200 rounded shadow">
                                            <div className='flex w-fit'>
                                                <span className=' p-1 w-fit bg-white rounded-lg'> 
                                                    Dossiers N2
                                                </span>
                                                
                                            </div>
                                        
                                        </div>
                                    
                                </div>
                                <div className='flex justify-end'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="rounded-full bg-gray-100 cursor-pointer size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                </div>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>:
            <div className='grid grid-cols-5  gap-4 mx-4 mt-5'>
                {Array.from({ length: 8 }).map((_, index) =>
                <div className='bg-white  hover:bg-gray-200 py-2 px-4 rounded-sm'>
                    <span className=' grid grid-cols-2'>
                        <span className='flex items-center justify'> 
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="16px" height="16px" viewBox="0 0 56 64" enable-background="new 0 0 56 64" >
                                <g>
                                    <path fill="#e95e60" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                                    <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                                    <path opacity="0.5" fill="#FFFFFF" enable-background="new    " d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                                </g>
                                <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                                    c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                                    M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                                    h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                                    s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                                    C42.2,42.8,41.9,43.1,41.5,43.1z"/>
                                </svg>
                                    <span className='ml-2 text-12px text-gray-500'>Notes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                    </svg>
                           </span>
                           <div className='flex justify-end'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="rounded-full bg-gray-100 cursor-pointer hover:bg-white size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                            </div>       
                    </span>
                    <Image src="/images/pdfImage.png"  width={100} 
                    height={330} 
                    layout="responsive" className='border rounded-md mt-2' alt='image of folder'/>
                    <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>
                    <span className=" mt-1 text-8px">Ouvert par vous • 4 nov. 2024</span>
                    </div>
                </div>)}
            </div>
            }
        </div>
        {/* progress bar */}
        <div className="flex fixed flex-col right-0 bottom-0 m-6 bg-white border shadow-sm rounded-xl">
        <div className="p-2 md:p-2 space-y-2">
            <div>
            <div className="mb-1 flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                <span className="size-4 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                </span>
                <div>
                    <p className="text-tiny font-medium text-gray-800">preline-ui.html</p>
                    <p className="text-8px text-gray-500">7 KB</p>
                </div>
                </div>
                <div className="inline-flex items-center gap-x-2">
                <span className="relative">
                    <svg className="shrink-0 size-3 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span className="sr-only">Success</span>
                </span>
                <button type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg>
                    <span className="sr-only">Delete</span>
                </button>
                </div>
            </div>

            <div className="flex w-full h-[0.15rem] bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-teal-500 text-8px text-white text-center whitespace-nowrap transition duration-500" style={{width: "100%"}}></div>
            </div>
            </div>

            <div>
            <div className="mb-1 flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                <span className="size-4 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                </span>
                <div>
                    <p className="text-tiny font-medium text-gray-800">preline-ui.mp4</p>
                    <p className="text-8px text-gray-500">105.5 MB</p>
                </div>
                </div>
                <div className="inline-flex items-center gap-x-2">
                <button type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="4" height="16" x="6" y="4"></rect>
                    <rect width="4" height="16" x="14" y="4"></rect>
                    </svg>
                    <span className="sr-only">Pause</span>
                </button>
                <button type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg>
                    <span className="sr-only">Delete</span>
                </button>
                </div>
            </div>

            <div className="flex w-full h-[0.15rem] bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-red-500 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{width: "25%"}}></div>
            </div>
            </div>

            <div>
            <div className="mb-1 flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                <span className="size-4 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                </span>
                <div>
                    <p className="text-tiny font-medium text-gray-800">preline-ui-cover.jpg</p>
                    <p className="text-8px text-gray-500">55 KB</p>
                </div>
                </div>
                <div className="inline-flex items-center gap-x-2">
                <button type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="4" height="16" x="6" y="4"></rect>
                    <rect width="4" height="16" x="14" y="4"></rect>
                    </svg>
                    <span className="sr-only">Pause</span>
                </button>
                <button type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg>
                    <span className="sr-only">Delete</span>
                </button>
                </div>
            </div>

            <div className="flex w-full h-[0.15rem] bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{width: "100%"}}></div>
            </div>
            </div>
        </div>

        <div className="bg-gray-50 border-t border-gray-200 rounded-b-xl py-1 px-2 md:px-2">
            <div className="flex flex-wrap justify-between items-center gap-x-3">
            <div>
                <span className="text-tiny font-semibold text-gray-800">
                2 success, 1 failed
                </span>
            </div>

            <div className="-me-2.5">
                <button type="button" className="py-1 px-3 inline-flex items-center gap-x-1.5 text-tiny font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Start
                </button>
                <button type="button" className="py-1 px-3 inline-flex items-center gap-x-1.5 text-tiny font-medium rounded-lg border border-transparent text-gray-500 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:bg-gray-200 focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line>
                </svg>
                Delete
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
);
}
export default Accueil;