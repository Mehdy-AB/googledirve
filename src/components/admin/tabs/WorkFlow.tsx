
const WorkFlow=()=>{
return(
    <div className="h-full w-full py-10 px-[30%]">
       <span className="text-3xl font-semibold ">Work Flow :</span> 
       <p className="text-sm ml-1">allows users to create, view, and modify document approval workflows. The List of Tasks helps in handling pending tasks or processes, including actions like validation, rejection, or participant updates. Additionally, the Working Hours section enables the management of working schedules and bank holidays, ensuring proper time configuration for workflow execution.</p>
          <div className="border-b-2 my-10 mx-4 border-gray-300"/>
        <div className=" px-36 ">
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg fill="currentColor" className="" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><path d="M30,20V12H22v3H17V7a2,2,0,0,0-2-2H10V2H2v8h8V7h5V25a2,2,0,0,0,2,2h5v3h8V22H22v3H17V17h5v3ZM8,8H4V4H8ZM24,24h4v4H24Zm0-10h4v4H24Z" transform="translate(0)"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill='none' width="32" height="32"/></svg>                
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Workflow Designer</span>
                    <p className="text-sm">View and edit document approval workflow</p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">List of tasks</span>
                    <p className="text-sm">Manage pending tasks or process in workflow 
                        (Validation, rejection, participant change ...)
                    </p>
                </div>
            </button>
            <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className="ml-2 text-start col-span-7">
                    <span className="text-xl font-semibold underline">Working hours</span>
                    <p className="text-sm">Mange working hours and bank holidays</p>
                </div>
            </button>
            
        </div>
    </div>
);
}
export default WorkFlow;