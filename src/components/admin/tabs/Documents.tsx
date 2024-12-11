import { useRouter } from "next/navigation";

const Documents=()=>{
    const route = useRouter();

return(
    <div className="h-full w-full py-10 px-[30%]">
       <span className="text-3xl font-semibold ">Documents :</span> 
       <p className="text-sm ml-1">tools to organize and manage documents, including filing categories, secure storage, folder templates, dynamic links, workflow stamps, sharing settings, and digital signatures. It also allows managing deleted files through the recycle bin.</p>
          <div className="border-b-2 my-10 mx-4 border-gray-300"/>
        <div className="grid gap-4 grid-cols-2">
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_901_1141)">
            <path d="M12 13H15M12 16H20M12 20H20M12 24H20M21 7V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V24C1 24 1 25 2 25H3M26 27H30C30.553 27 31 26.553 31 26V4C31 3.447 30.553 3 30 3H24M26 30C26 30.553 25.553 31 25 31H7C6.447 31 6 30.553 6 30V8C6 7.447 6.447 7 7 7H25C25.553 7 26 7.447 26 8V30Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            </svg>         
        <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline" onClick={()=>route.push('/dashboard/admin-panel/documentsManagment')}>Filing categories</span>
                    <p className="text-sm">View and edit document types.</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100 w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Secured Conservation Spaces</span>
                    <p className="text-sm">Add or view Secured Conservation Spaces.
                    </p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Folder types</span>
                    <p className="text-sm">Add, edit, delete the folders types.</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Links</span>
                    <p className="text-sm">View and edit dynamic links between document types.</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1403882,14 L13.8596118,14 L13.07321,10.8543926 C12.7316796,10.9492838 12.3717625,11 12,11 C11.6282375,11 11.2683204,10.9492838 10.92679,10.8543926 L10.1403882,14 Z M9.1096118,14 L9.99423004,10.461527 C8.80180997,9.7690907 8,8.47818173 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,8.47818173 15.19819,9.7690907 14.00577,10.461527 L14.8903882,14 L18.5,14 C19.8807119,14 21,15.1192881 21,16.5 L21,18.5 C21,18.7761424 20.7761424,19 20.5,19 L3.5,19 C3.22385763,19 3,18.7761424 3,18.5 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 L9.1096118,14 Z M12,10 C13.6568542,10 15,8.65685425 15,7 C15,5.34314575 13.6568542,4 12,4 C10.3431458,4 9,5.34314575 9,7 C9,8.65685425 10.3431458,10 12,10 Z M20,18 L20,16.5 C20,15.6715729 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,18 L20,18 Z M3.5,21 C3.22385763,21 3,20.7761424 3,20.5 C3,20.2238576 3.22385763,20 3.5,20 L20.5,20 C20.7761424,20 21,20.2238576 21,20.5 C21,20.7761424 20.7761424,21 20.5,21 L3.5,21 Z"/>
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Stamps</span>
                    <p className="text-sm">View and edit workflow stamps.</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Open Bee™ Scan O.C.S</span>
                    <p className="text-sm">View and edit Open Bee™ Scan O.C.S settings.</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Share</span>
                    <p className="text-sm">View and modify shared documents.</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Recycle bin</span>
                    <p className="text-sm">View and manage deleted documents and folders.</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Digital signature</span>
                    <p className="text-sm">Manage a company signing certificate and the rules of associated application.</p>
                </div>
            </button>
            
        </div>
    </div>
);
}
export default Documents;