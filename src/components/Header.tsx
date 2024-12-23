import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import CustemSearch from "./CustemSearch";
import UploadForm from "./UploadForm";


const Header=({setAdminPanels,adminPanels}:{setUploadForm:any,setAdminPanels,adminPanels})=>{
    const [uploadSection,setUploadSection] = useState(false);
    const [notification,setNotification] = useState(false);
    const [info,setinfo] = useState(false);
    const [searchDrop,setSearchDrop] = useState(false);
    const [search,setSearch] = useState(false);
    const session = useSession();
    const [isAdmin,setIsAdmin] = useState(false);
    useEffect(()=>setIsAdmin(session?.data?.user?.role === 'ADMIN'),[session]);
    const [profile,setProfile] = useState(false);
        return(
            <>
            {search&&<CustemSearch onClose={()=>setSearch(false)}/>}
            {uploadSection&&<UploadForm onClose={() => setUploadSection(false)} folderId={null} regetFolder={()=>{}} defualtfile={null}/>}
            <div className={`z-[98] fixed top-0 left-[16rem] w-[calc(100%-16rem)] px-4 h-[5rem] drop-shadow-md bg-foreground`}>
                <div className={`grid h-full justify-center items-center grid-cols-12 gap-4`}>
                    <div className="col-span-3"></div>

                    <form className="relative w-full col-span-6 focus-within:text-gray-600 text-white">
                        <button onClick={()=>setSearch(true)} type="button" className=" absolute left-2 p-1 top-[0.4rem]  rounded-full bg-transparent shadow-md hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                        </button>
                        <input onFocus={()=>setSearchDrop(true)} autoComplete="off" placeholder="e.g. File" className="rounded-full w-full h-12 text-white bg-transparent py-2 pl-12 pr-32 outline-none border-2 border-gray-400 transition-colors duration-200 focus:bg-gray-100 shadow-md hover:outline-none focus:text-secondColor focus:ring-gray-100 focus:border-gray-100" type="text" name="query" id="query"/>
                        <div className={`transition-opacity duration-200 top-14 w-full ease-in-out absolute ${searchDrop ? 'opacity-100' : 'opacity-0'}`}>
                            {searchDrop&&<DropDown notEff={['query']} setIsShow={setSearchDrop}><div className=" bg-white rounded-2xl h-56 w-full "></div></DropDown>}
                        </div>
                        <button type="submit" className="absolute inline-flex items-center h-9 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-[0.4rem] bg-foreground shadow-md sm:px-6 sm:text-base sm:font-medium hover:bg-secondColor focus:outline-none ">
                            <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            Search
                        </button>
                    </form>

                    <div className={`flex justify-end mt-1 col-span-3 mr-2 items-center `}>
                        <button onBlur={() => setTimeout(() => setUploadSection(false), 100)} onClick={() => setUploadSection(!uploadSection)} className=" mr-5 hover:opacity-50">
                            <svg className="size-7 text-white" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12.125V5.93749M10 5.93749L12.75 8.68749M10 5.93749L7.25003 8.68749M5.18753 14.875C4.20618 14.8761 3.25659 14.5272 2.5093 13.8911C1.76202 13.255 1.26599 12.3733 1.1103 11.4044C0.954606 10.4355 1.14945 9.4428 1.65985 8.60462C2.17024 7.76643 2.96274 7.13767 3.89503 6.83124C3.65551 5.60398 3.90306 4.33167 4.58527 3.28375C5.26747 2.23584 6.33077 1.49459 7.54998 1.21698C8.76919 0.939371 10.0486 1.1472 11.1172 1.79646C12.1859 2.44572 12.9599 3.48543 13.2753 4.69541C13.763 4.5368 14.2853 4.51772 14.7832 4.64031C15.2812 4.76291 15.7349 5.02229 16.0932 5.38918C16.4515 5.75606 16.7001 6.21582 16.8109 6.71653C16.9217 7.21724 16.8902 7.73895 16.7201 8.22274C17.4705 8.50938 18.097 9.04966 18.4907 9.74986C18.8845 10.4501 19.0207 11.266 18.8758 12.0561C18.7309 12.8463 18.3139 13.5607 17.6973 14.0756C17.0807 14.5905 16.3033 14.8733 15.5 14.875H5.18753Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        
                        <div className={`grid justify-center items-center gap-3 mr-3 ${isAdmin?'grid-cols-3':'grid-cols-2'}`}>
                            <div className="relative mt-1">
                                <button onClick={() => setNotification(!notification)} className="hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                                    <span className=" absolute bg-red-600 text-white rounded-full px-1 top-0 text-tiny right-0-0">4</span>
                                </button>

                                <div className={`transition-opacity top-0 right-0 absolute duration-200 ease-in ${notification ? 'opacity-100' : 'opacity-0'}`}>
                                    {notification &&<DropDown setIsShow={setNotification}>
                                        <div id="dropdownMenu" className='absolute block right-0 top-6 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[410px] max-h-[200px] overflow-auto mt-2'>
                                            <div className="flex items-center justify-between px-2 ">
                                                <p className="text-xs text-blue-600 cursor-pointer">Clear all</p>
                                                <p className="text-xs text-blue-600 cursor-pointer">Mark as read</p>
                                            </div>

                                            <ul className="divide-y">
                                                <li className='p-2 flex items-center hover:bg-gray-50 cursor-pointer'>
                                                    <img src="https://readymadeui.com/profile_2.webp" className="w-8 h-8 rounded-full shrink-0" />

                                                    <div className="ml-3">
                                                        <h3 className="text-xs text-[#333] font-semibold">Your have a new message from Yin</h3>
                                                        <p className="text-12px text-gray-500 ">Hello there, check this new items in from the your may interested from
                                                            the motion school.</p>
                                                        <p className="text-12px text-blue-600 leading-3 mt-1">10 minutes ago</p>
                                                    </div>
                                                </li>

                                                <li className='p-2 flex items-center hover:bg-gray-50 cursor-pointer'>
                                                    <img src="https://readymadeui.com/team-2.webp" className="w-8 h-8 rounded-full shrink-0" />

                                                    <div className="ml-3">
                                                        <h3 className="text-xs text-[#333] font-semibold">Your have a new message from Haper</h3>
                                                        <p className="text-12px text-gray-500 ">Hello there, check this new items in from the your may interested from
                                                            the motion school.</p>
                                                        <p className="text-12px text-blue-600 leading-3 mt-1">2 hours ago</p>
                                                    </div>
                                                </li>

                                                <li className='p-2 flex items-center hover:bg-gray-50 cursor-pointer'>
                                                    <img src="https://readymadeui.com/team-3.webp" className="w-8 h-8 rounded-full shrink-0" />

                                                    <div className="ml-3">
                                                        <h3 className="text-xs text-[#333] font-semibold">Your have a new message from San</h3>
                                                        <p className="text-12px text-gray-500 ">Hello there, check this new items in from the your may interested from
                                                            the motion school.</p>
                                                        <p className="text-12px text-blue-600 leading-3 mt-1">1 day ago</p>
                                                    </div>
                                                </li>

                                                <li className='p-2 flex items-center hover:bg-gray-50 cursor-pointer'>
                                                    <img src="https://readymadeui.com/team-4.webp" className="w-8 h-8 rounded-full shrink-0" />

                                                    <div className="ml-3">
                                                        <h3 className="text-xs text-[#333] font-semibold">Your have a new message from Seeba</h3>
                                                        <p className="text-12px text-gray-500 ">Hello there, check this new items in from the your may interested from
                                                            the motion school.</p>
                                                        <p className="text-12px text-blue-600 leading-3 mt-1">30 minutes ago</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className="text-xs px-4 mt-2 inline-block text-blue-600 cursor-pointer">View all Notifications</p>
                                        </div></DropDown>}
                                </div>
                            </div>
                            <div className="relative mt-1">
                                <button onClick={() => setinfo(!info)} className="hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                                </button>
                                <div className={`transition-opacity top-0 right-0 absolute duration-200 ease-in ${info ? 'opacity-100' : 'opacity-0'}`}>
                                    {info && <DropDown setIsShow={setinfo}> <div className={`absolute text-base top-8 right-0 w-[12rem] bg-white py-3 rounded-md`}>
                                        <label className=" flex cursor-pointer hover:bg-gray-200 w-full p-2">
                                            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                                <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 21L12 13M12 13L14.5 15.5M12 13L9.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Aide
                                        </label>
                                        <label className=" flex cursor-pointer hover:bg-gray-200 w-full p-2">
                                            <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                                <path d="M18.5 20L18.5 14M18.5 14L21 16.5M18.5 14L16 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12 7H19C20.1046 7 21 7.89543 21 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Formation
                                        </label>

                                        <div className="border mx-2 m-1"></div>
                                        <label className=" flex cursor-pointer hover:bg-gray-200 w-full p-2">
                                            <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                                <path fill="none" stroke="currentColor" strokeWidth="2" d="M6,13.2932321 C7.63138164,11.6618504 10.6214284,8.67180351 12.3609131,6.93231878 C15.1879856,4.10524628 19.4285943,8.34585492 16.6015218,11.1729275 C13.7744493,14 11.6541453,16.1203048 10.2406087,17.5338408 C8.82707218,18.9473767 6.70676816,16.8270724 8.12030436,15.4135364 C9.53384056,14.0000004 14.4812175,9.05262308 14.4812175,9.05262308" />
                                            </svg>
                                            Conditions et reglement
                                        </label>
                                    </div></DropDown>}
                                </div>
                            </div>

                            <div className="mt-1">
                                <button onClick={() => setAdminPanels(!adminPanels)} className="hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                </button>
                            </div>
                        </div>

                        <div className="relative mt-1">
                            <button onClick={() => setProfile(!profile)} className="hover:opacity-50">
                                <svg className="size-10" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25.5612 12.5204C25.5612 15.8356 24.2443 19.015 21.9001 21.3592C19.5558 23.7034 16.3764 25.0204 13.0612 25.0204C9.74601 25.0204 6.56659 23.7034 4.22238 21.3592C1.87818 19.015 0.561218 15.8356 0.561218 12.5204C0.561218 9.20518 1.87818 6.02576 4.22238 3.68155C6.56659 1.33735 9.74601 0.0203857 13.0612 0.0203857C16.3764 0.0203857 19.5558 1.33735 21.9001 3.68155C24.2443 6.02576 25.5612 9.20518 25.5612 12.5204V12.5204ZM16.1862 7.83289C16.1862 8.66169 15.857 9.45654 15.2709 10.0426C14.6849 10.6286 13.89 10.9579 13.0612 10.9579C12.2324 10.9579 11.4376 10.6286 10.8515 10.0426C10.2655 9.45654 9.93622 8.66169 9.93622 7.83289C9.93622 7.00408 10.2655 6.20923 10.8515 5.62318C11.4376 5.03713 12.2324 4.70789 13.0612 4.70789C13.89 4.70789 14.6849 5.03713 15.2709 5.62318C15.857 6.20923 16.1862 7.00408 16.1862 7.83289V7.83289ZM13.0612 14.0829C11.5653 14.0826 10.1007 14.5118 8.84156 15.3195C7.5824 16.1271 6.5816 17.2793 5.95809 18.6391C6.83728 19.6619 7.92727 20.4825 9.15332 21.0446C10.3794 21.6066 11.7125 21.8969 13.0612 21.8954C14.41 21.8969 15.7431 21.6066 16.9691 21.0446C18.1952 20.4825 19.2852 19.6619 20.1643 18.6391C19.5408 17.2793 18.54 16.1271 17.2809 15.3195C16.0217 14.5118 14.5572 14.0826 13.0612 14.0829V14.0829Z" fill="white" />
                                </svg></button>
                            <div className={`transition-opacity top-8 right-0 absolute duration-200 ease-in ${profile ? 'opacity-100' : 'opacity-0'}`}>
                                {profile && <DropDown setIsShow={setProfile}>
                                    <div className="dropdown-content menu rounded-md p-2 bg-white shadow bg-base-300 rounded-box w-80">
                                        <div className="rounded-lg bg-base-300 p-3 drop-shadow-xl divide-y divide-neutral">
                                            <div className="flex space-x-4 items-center p-4">
                                                <div className="flex mr-auto items-center space-x-4">
                                                    <svg width="35" height="35" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M25.5612 12.5204C25.5612 15.8356 24.2443 19.015 21.9001 21.3592C19.5558 23.7034 16.3764 25.0204 13.0612 25.0204C9.74601 25.0204 6.56659 23.7034 4.22238 21.3592C1.87818 19.015 0.561218 15.8356 0.561218 12.5204C0.561218 9.20518 1.87818 6.02576 4.22238 3.68155C6.56659 1.33735 9.74601 0.0203857 13.0612 0.0203857C16.3764 0.0203857 19.5558 1.33735 21.9001 3.68155C24.2443 6.02576 25.5612 9.20518 25.5612 12.5204V12.5204ZM16.1862 7.83289C16.1862 8.66169 15.857 9.45654 15.2709 10.0426C14.6849 10.6286 13.89 10.9579 13.0612 10.9579C12.2324 10.9579 11.4376 10.6286 10.8515 10.0426C10.2655 9.45654 9.93622 8.66169 9.93622 7.83289C9.93622 7.00408 10.2655 6.20923 10.8515 5.62318C11.4376 5.03713 12.2324 4.70789 13.0612 4.70789C13.89 4.70789 14.6849 5.03713 15.2709 5.62318C15.857 6.20923 16.1862 7.00408 16.1862 7.83289V7.83289ZM13.0612 14.0829C11.5653 14.0826 10.1007 14.5118 8.84156 15.3195C7.5824 16.1271 6.5816 17.2793 5.95809 18.6391C6.83728 19.6619 7.92727 20.4825 9.15332 21.0446C10.3794 21.6066 11.7125 21.8969 13.0612 21.8954C14.41 21.8969 15.7431 21.6066 16.9691 21.0446C18.1952 20.4825 19.2852 19.6619 20.1643 18.6391C19.5408 17.2793 18.54 16.1271 17.2809 15.3195C16.0217 14.5118 14.5572 14.0826 13.0612 14.0829V14.0829Z" fill="gray" />
                                                    </svg>
                                                    <div className="space-y-2 flex flex-col flex-1 truncate">
                                                        <div className="relative leading-tight text-gray-900">
                                                            <span className="flex">
                                                                <span className="truncate relative pr-8 text-gray-700">Name</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-normal text-base leading-tight truncate">example@mail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div aria-label="navigation" className="py-2">
                                                <nav className="grid gap-1">
                                                    <a href="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM9 5H5V9H9V5Z" /><path d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM9 15H5V19H9V15Z" /><path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM19 5H15V9H19V5Z" /><path d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM19 15H15V19H19V15Z" />
                                                        </svg>
                                                        <span>....</span>
                                                    </a>
                                                    <a href="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                                        <svg className="w-7 h-7" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                        </svg>
                                                        <span>Parameter</span>
                                                    </a>
                                                    <a href="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                                        <svg className="w-7 h-7" viewBox="0 0 35 35" fill="currentColor">
                                                            <path d="M13.2,18.456H8.475a1.25,1.25,0,1,1,0-2.5H13.2a1.25,1.25,0,0,1,0,2.5Z" />
                                                            <path d="M10.839,20.82a1.25,1.25,0,0,1-1.25-1.25V14.841a1.25,1.25,0,0,1,2.5,0V19.57A1.25,1.25,0,0,1,10.839,20.82Z" />
                                                            <path d="M20.954,18.515a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                            <path d="M23.8,15.67a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                            <path d="M23.68,21.241a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                            <path d="M26.525,18.4a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z" />
                                                            <path d="M28.886,34.75a4.9,4.9,0,0,1-4.752-3.663l-1.4-4.1a20.448,20.448,0,0,1-10.436-.068l-1.456,4.257a4.725,4.725,0,0,1-1.717,2.549,4.905,4.905,0,0,1-7.9-3.836V19.2c0-.31.038-.868.054-1.08l-.052-.945A10.494,10.494,0,0,1,11.693,6.641a10.351,10.351,0,0,1,3.728.686,3.821,3.821,0,0,0,1.373.235h1.412a3.751,3.751,0,0,0,1.353-.227A10.32,10.32,0,0,1,23.5,6.643,10.674,10.674,0,0,1,33.781,17.42V29.892A4.881,4.881,0,0,1,28.886,34.75ZM23.5,24.141a1.253,1.253,0,0,1,1.183.846l1.841,5.384a2.438,2.438,0,0,0,2.359,1.879,2.379,2.379,0,0,0,2.395-2.358V17.42a8.163,8.163,0,0,0-7.822-8.277,7.78,7.78,0,0,0-3,.524h0a6.249,6.249,0,0,1-2.255.395H16.794a6.311,6.311,0,0,1-2.269-.4,7.858,7.858,0,0,0-2.832-.52,7.978,7.978,0,0,0-7.974,7.965l.054.955a1.9,1.9,0,0,1,0,.2c-.011.141-.05.66-.05.938V29.892a2.406,2.406,0,0,0,3.871,1.86,2.35,2.35,0,0,0,.855-1.29l1.869-5.475a1.251,1.251,0,0,1,1.59-.777c.062.02,6.155,2.075,11.123.025A1.247,1.247,0,0,1,23.5,24.141ZM20.01,8.5h0Z" />
                                                            <path d="M18.294,7.261a1.23,1.23,0,0,1-.105-1.184,1.891,1.891,0,0,1,.874-1.04A4.97,4.97,0,0,1,22.7,4.874a8.184,8.184,0,0,0,4.595.142A3.683,3.683,0,0,0,29.854,1.5,1.278,1.278,0,0,0,28.6.25a1.262,1.262,0,0,0-1.25,1.25c.066,1.244-1.558,1.378-2.5,1.266-1.574-.186-3.049-.792-4.663-.617a5.182,5.182,0,0,0-3.917,2.183,3.982,3.982,0,0,0-.137,4.19c.836,1.372,3,.117,2.158-1.261Z" />
                                                        </svg>
                                                        <span>.....</span>
                                                    </a>
                                                </nav>
                                            </div>
                                            <div className="pt-2">
                                                <button onClick={() => { signOut(); } } type="button" className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                                                    <svg className="w-7 h-7" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                                        <path d="M9 12h12l-3 -3"></path>
                                                        <path d="M18 15l3 -3"></path>
                                                    </svg>
                                                    <span>Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div></DropDown>}
                            </div>

                        </div>




                    </div>
                </div>
            </div>
            </>
    );
} 
export default Header;