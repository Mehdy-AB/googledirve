
const GroupCart=({group,setGroupInfo})=>{
return(
    <div className="bg-[#f3f3f7] z-0 shadow-2xl ring-1 ring-gray-200 group-hover:ring-0 group relative flex flex-col rounded-lg p-2">
        <span className=" absolute text-xs rounded-full text-white bg-green-500 right-4 top-4 border-green-500 border p-2 group-hover:py-0">
            <span className="opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all duration-300">Active</span> 
        </span>
        <div className="absolute inset-0 bg-black rounded-lg  bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAeO2mKNwY5ebhPUXQ-Vdf7TXLTPHIXaYfLg&s" alt="Nature" className="w-full rounded-lg h-full object-cover"/>
        <div className="p-2">
        <div className="flex flex-col">
            <div className="grid grid-cols-5">
            <span onClick={()=>{setGroupInfo(group.id)}} className="text-xl col-span-3 font-semibold underline cursor-pointer z-10">{group.name}</span>
            <span className="text-xs items-center text-slate-500 flex justify-end col-span-2 font-semibold">{new Date(group?.createdAt).toLocaleDateString('en-US', {
                month: 'short', // Abbreviated month name
                day: 'numeric', // Day of the month
                year: 'numeric', // Full year
                })}</span>
            </div>
            <span className="text-sm ">{group.description}</span>
            <span className="flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer z-10 hover:border-0 group-hover:bg-gray-300 bg-[#f3f3f7] border rounded-full shadow-xl">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </span>
        </div>
        </div>
    </div>
);
}
export default GroupCart;