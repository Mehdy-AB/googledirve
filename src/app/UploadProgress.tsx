

const UploadProgress=({files,setFiles}:{files:{name:string,size:number,progress:number,etat:boolean}[],setFiles:any})=>{

    return(
        <div className="z-[96] flex fixed flex-col right-0 bottom-0 m-6 bg-white border shadow-sm rounded-xl">
        <div className="p-2 md:p-2 space-y-2">
            {files.map((file , index)=><div key={index}>
            <div className="mb-1 flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                <span className="size-4 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                </span>
                <div>
                    <p className="text-12px font-medium text-gray-800">{file.name.split('_')[1]}</p>
                    <p className="text-tiny text-gray-500">{file.size} KB</p>
                </div>
                </div>
                <div className="inline-flex items-center gap-x-2">
                {file.progress === 100 ?<span className="relative">
                    <svg className="shrink-0 size-3 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span className="sr-only">Success</span>
                </span>:
                // file.etat === false?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="shrink-0 size-4 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                // :file.pause === true?
                
                // <button onClick={()=> setFiles(files.map(fil => fil.name === file.name ? fil.pause =false : fil))} type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500">
                // <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                //     <polygon points="5 3 19 12 5 21 5 3"></polygon>
                // </svg>
                // </button>: 
                // <button onClick={()=> setFiles(files.map(fil => fil.name === file.name ? fil.pause =true : fil))} type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                // <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                // <rect width="4" height="16" x="6" y="4"></rect>
                // <rect width="4" height="16" x="14" y="4"></rect>
                // </svg>
                // <span className="sr-only">Pause</span>
                //  </button>
                }
                <button type="button" className="relative text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

            <div className="flex w-full h-[0.15rem] bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={file.progress} aria-valuemin={0} aria-valuemax={100}>
                <div className={`flex flex-col justify-center rounded-full overflow-hidden ${file.progress===100 ? "bg-teal-500" : file.etat===false ?"bg-red-500":"bg-orange-600"} text-tiny text-white text-center whitespace-nowrap transition duration-500`} style={{width: `${file.progress}%`}}></div>
            </div>
            </div>)}
        </div>

        <div className="bg-gray-50 border-t border-gray-200 rounded-b-xl py-1 px-2 md:px-2">
            <div className="flex flex-wrap justify-between items-center gap-x-3">
            <div>
                <span className="text-12px font-semibold text-gray-800">
                {files.filter(file => file.etat === true).length} success, {files.filter(file => file.etat === false).length} failed
                </span>
            </div>

            <div className="-me-2.5 ml-14">
                
                <button onClick={()=>setFiles([])} type="button" className="py-1 px-3 inline-flex items-center gap-x-1.5 text-12px font-medium rounded-lg border border-transparent text-gray-500 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:bg-gray-200 focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    );
}
export default UploadProgress;