import { useState } from "react";


const Header=({sidebarOpen,setUploadForm}:{sidebarOpen:boolean,setUploadForm:any})=>{
    const [uploadSection,setUploadSection] = useState(false);
    const [notification,setNotification] = useState(false);
    const [info,setinfo] = useState(false);
    const [profile,setProfile] = useState(false);
        return(
        <div className={`z-[98] fixed top-0 ${sidebarOpen?"left-[12rem] w-[calc(100%-12rem)] px-4":"left-[4rem] w-[calc(100%-4rem)] px-4"} h-[2.5rem] drop-shadow-md bg-foreground`}>
            <div className={`grid pl-[] justify-center items-center ${sidebarOpen ? "grid-cols-8":"grid-cols-3"} gap-4`}>
                {!sidebarOpen &&
                    <div className="text-white font-semibold text-2xl">
                        Alfresco
                    </div>
                }
                <div className={`relative w-full mt-1 ${sidebarOpen?" flex justify-center col-span-6":""}  max-w-lg`}>
                    <input type="text" className=" text-gray-800 pl-2 focus:outline-none focus:border border-secondColor rounded-sm p-1 pr-6 text-xs w-full" placeholder="Search MCQ | Topic | Course"/>

                    <button type="submit" className="absolute right-1 top-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                    </button>

                </div>

                <div className={`flex justify-end mt-1 ${sidebarOpen?"col-span-2":""} mr-2 items-center `}>

                    <div className="relative mr-5 ">
                        <button onBlur={()=>setTimeout(() => setUploadSection(false), 100)} onClick={()=> setUploadSection(!uploadSection)} className=" hover:opacity-50">
                            <svg width="24" height="24" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=" pt-1">
                            <path d="M10 12.125V5.93749M10 5.93749L12.75 8.68749M10 5.93749L7.25003 8.68749M5.18753 14.875C4.20618 14.8761 3.25659 14.5272 2.5093 13.8911C1.76202 13.255 1.26599 12.3733 1.1103 11.4044C0.954606 10.4355 1.14945 9.4428 1.65985 8.60462C2.17024 7.76643 2.96274 7.13767 3.89503 6.83124C3.65551 5.60398 3.90306 4.33167 4.58527 3.28375C5.26747 2.23584 6.33077 1.49459 7.54998 1.21698C8.76919 0.939371 10.0486 1.1472 11.1172 1.79646C12.1859 2.44572 12.9599 3.48543 13.2753 4.69541C13.763 4.5368 14.2853 4.51772 14.7832 4.64031C15.2812 4.76291 15.7349 5.02229 16.0932 5.38918C16.4515 5.75606 16.7001 6.21582 16.8109 6.71653C16.9217 7.21724 16.8902 7.73895 16.7201 8.22274C17.4705 8.50938 18.097 9.04966 18.4907 9.74986C18.8845 10.4501 19.0207 11.266 18.8758 12.0561C18.7309 12.8463 18.3139 13.5607 17.6973 14.0756C17.0807 14.5905 16.3033 14.8733 15.5 14.875H5.18753Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                            <div className={`transition-opacity duration-200 ease-in ${
                                uploadSection ? 'opacity-100' : 'opacity-0'
                            }`}>
                            {uploadSection && <div className={`absolute text-base top-8 right-0 w-[12rem] bg-white py-3 rounded-md`}>
                                <label onClick={()=>setUploadForm(true)} className=" flex cursor-pointer hover:bg-gray-200 w-full p-2">
                                    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                    <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 21L12 13M12 13L14.5 15.5M12 13L9.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                     Upload fichiers
                                </label>
                                <label onClick={()=>setUploadForm(true)} className=" flex cursor-pointer hover:bg-gray-200 w-full p-2">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M18.5 20L18.5 14M18.5 14L21 16.5M18.5 14L16 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12 7H19C20.1046 7 21 7.89543 21 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                     Upload fichiers
                                </label>

                                <div className="border mx-2 m-1"></div>
                                <label onClick={()=>setUploadForm(true)} className=" flex cursor-pointer hover:bg-gray-200 w-full p-2" >
                                <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path fill="none" stroke="currentColor" strokeWidth="2" d="M6,13.2932321 C7.63138164,11.6618504 10.6214284,8.67180351 12.3609131,6.93231878 C15.1879856,4.10524628 19.4285943,8.34585492 16.6015218,11.1729275 C13.7744493,14 11.6541453,16.1203048 10.2406087,17.5338408 C8.82707218,18.9473767 6.70676816,16.8270724 8.12030436,15.4135364 C9.53384056,14.0000004 14.4812175,9.05262308 14.4812175,9.05262308"/>
                                </svg>
                                    Modele 1
                                </label>
                                <label onClick={()=>setUploadForm(true)} className=" flex cursor-pointer hover:bg-gray-200 w-full p-2" >
                                <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path fill="none" stroke="currentColor" strokeWidth="2" d="M6,13.2932321 C7.63138164,11.6618504 10.6214284,8.67180351 12.3609131,6.93231878 C15.1879856,4.10524628 19.4285943,8.34585492 16.6015218,11.1729275 C13.7744493,14 11.6541453,16.1203048 10.2406087,17.5338408 C8.82707218,18.9473767 6.70676816,16.8270724 8.12030436,15.4135364 C9.53384056,14.0000004 14.4812175,9.05262308 14.4812175,9.05262308"/>
                                </svg>
                                    Modele 2
                                </label>
                                <label onClick={()=>setUploadForm(true)} className=" flex cursor-pointer hover:bg-gray-200 w-full p-2" >
                                <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path fill="none" stroke="currentColor" strokeWidth="2" d="M6,13.2932321 C7.63138164,11.6618504 10.6214284,8.67180351 12.3609131,6.93231878 C15.1879856,4.10524628 19.4285943,8.34585492 16.6015218,11.1729275 C13.7744493,14 11.6541453,16.1203048 10.2406087,17.5338408 C8.82707218,18.9473767 6.70676816,16.8270724 8.12030436,15.4135364 C9.53384056,14.0000004 14.4812175,9.05262308 14.4812175,9.05262308"/>
                                </svg>
                                    Modele 3
                                </label>
                            </div>}
                            </div>
                    </div>
                    <div className="grid justify-center items-center grid-cols-2 gap-3 mr-3">
                    <div className="relative mt-1">
                        <button onBlur={()=>setTimeout(() => setNotification(false), 100)} onClick={()=>setNotification(!notification)} className="hover:opacity-50">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.75 14.5833H16.3334L15.0454 13.2954C14.8725 13.1224 14.7353 12.9171 14.6417 12.691C14.5481 12.465 14.5 12.2228 14.5 11.9782V9.08333C14.5002 7.94569 14.1476 6.83598 13.491 5.90698C12.8343 4.97798 11.9058 4.27538 10.8334 3.89592V3.58333C10.8334 3.0971 10.6402 2.63079 10.2964 2.28697C9.95257 1.94315 9.48625 1.75 9.00002 1.75C8.51379 1.75 8.04747 1.94315 7.70366 2.28697C7.35984 2.63079 7.16669 3.0971 7.16669 3.58333V3.89592C5.03085 4.65125 3.50002 6.689 3.50002 9.08333V11.9791C3.50002 12.4723 3.30385 12.9462 2.9546 13.2954L1.66669 14.5833H6.25002M11.75 14.5833H6.25002M11.75 14.5833V15.5C11.75 16.2293 11.4603 16.9288 10.9446 17.4445C10.4288 17.9603 9.72937 18.25 9.00002 18.25C8.27067 18.25 7.5712 17.9603 7.05548 17.4445C6.53975 16.9288 6.25002 16.2293 6.25002 15.5V14.5833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className=" absolute bg-red-600 text-white rounded-full px-1 top-0 text-tiny left-2">4</span>
                        </button>
                        
                        <div className={`transition-opacity top-0 right-0 absolute duration-200 ease-in ${
                                notification ? 'opacity-100' : 'opacity-0'
                            }`}>
                            {notification && 
                                
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
                            </div>

                            }
                            </div>
                    </div>
                    <div className="relative mt-1">
                        <button onBlur={()=>setTimeout(() => setinfo(false), 100)} onClick={()=>setinfo(!info)} className="hover:opacity-50">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.3125 8.3125L8.35008 8.29417C8.46763 8.23544 8.59954 8.21164 8.73019 8.22556C8.86085 8.23948 8.98478 8.29056 9.08731 8.37274C9.18983 8.45491 9.26667 8.56475 9.3087 8.68924C9.35074 8.81373 9.35622 8.94766 9.3245 9.07517L8.6755 11.6748C8.64355 11.8024 8.64886 11.9365 8.6908 12.0611C8.73274 12.1858 8.80955 12.2958 8.91213 12.3781C9.0147 12.4604 9.13872 12.5115 9.2695 12.5255C9.40027 12.5394 9.53229 12.5156 9.64992 12.4568L9.6875 12.4375M17.25 9C17.25 10.0834 17.0366 11.1562 16.622 12.1571C16.2074 13.1581 15.5997 14.0675 14.8336 14.8336C14.0675 15.5997 13.1581 16.2074 12.1571 16.622C11.1562 17.0366 10.0834 17.25 9 17.25C7.91659 17.25 6.8438 17.0366 5.84286 16.622C4.84193 16.2074 3.93245 15.5997 3.16637 14.8336C2.40029 14.0675 1.7926 13.1581 1.37799 12.1571C0.963392 11.1562 0.75 10.0834 0.75 9C0.75 6.81196 1.61919 4.71354 3.16637 3.16637C4.71354 1.61919 6.81196 0.75 9 0.75C11.188 0.75 13.2865 1.61919 14.8336 3.16637C16.3808 4.71354 17.25 6.81196 17.25 9ZM9 5.5625H9.00733V5.56983H9V5.5625Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                        <div className={`transition-opacity top-0 right-0 absolute duration-200 ease-in ${
                                info ? 'opacity-100' : 'opacity-0'
                            }`}>
                            {info && <div className={`absolute text-base top-8 right-0 w-[12rem] bg-white py-3 rounded-md`}>
                                <label className=" flex cursor-pointer hover:bg-gray-200 w-full p-2">
                                    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                    <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 21L12 13M12 13L14.5 15.5M12 13L9.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                     Aide
                                </label>
                                <label  className=" flex cursor-pointer hover:bg-gray-200 w-full p-2">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M18.5 20L18.5 14M18.5 14L21 16.5M18.5 14L16 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L12 7H19C20.1046 7 21 7.89543 21 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                     Formation
                                </label>

                                <div className="border mx-2 m-1"></div>
                                <label  className=" flex cursor-pointer hover:bg-gray-200 w-full p-2" >
                                <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path fill="none" stroke="currentColor" strokeWidth="2" d="M6,13.2932321 C7.63138164,11.6618504 10.6214284,8.67180351 12.3609131,6.93231878 C15.1879856,4.10524628 19.4285943,8.34585492 16.6015218,11.1729275 C13.7744493,14 11.6541453,16.1203048 10.2406087,17.5338408 C8.82707218,18.9473767 6.70676816,16.8270724 8.12030436,15.4135364 C9.53384056,14.0000004 14.4812175,9.05262308 14.4812175,9.05262308"/>
                                </svg>
                                    Conditions et reglement
                                </label>
                            </div>}
                            </div>
                        
                    </div>
                    </div>
                    <div className="relative mt-1">
                    <button onBlur={()=>setTimeout(() => setProfile(false), 100)} onClick={()=>setProfile(!profile)} className="hover:opacity-50">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.5612 12.5204C25.5612 15.8356 24.2443 19.015 21.9001 21.3592C19.5558 23.7034 16.3764 25.0204 13.0612 25.0204C9.74601 25.0204 6.56659 23.7034 4.22238 21.3592C1.87818 19.015 0.561218 15.8356 0.561218 12.5204C0.561218 9.20518 1.87818 6.02576 4.22238 3.68155C6.56659 1.33735 9.74601 0.0203857 13.0612 0.0203857C16.3764 0.0203857 19.5558 1.33735 21.9001 3.68155C24.2443 6.02576 25.5612 9.20518 25.5612 12.5204V12.5204ZM16.1862 7.83289C16.1862 8.66169 15.857 9.45654 15.2709 10.0426C14.6849 10.6286 13.89 10.9579 13.0612 10.9579C12.2324 10.9579 11.4376 10.6286 10.8515 10.0426C10.2655 9.45654 9.93622 8.66169 9.93622 7.83289C9.93622 7.00408 10.2655 6.20923 10.8515 5.62318C11.4376 5.03713 12.2324 4.70789 13.0612 4.70789C13.89 4.70789 14.6849 5.03713 15.2709 5.62318C15.857 6.20923 16.1862 7.00408 16.1862 7.83289V7.83289ZM13.0612 14.0829C11.5653 14.0826 10.1007 14.5118 8.84156 15.3195C7.5824 16.1271 6.5816 17.2793 5.95809 18.6391C6.83728 19.6619 7.92727 20.4825 9.15332 21.0446C10.3794 21.6066 11.7125 21.8969 13.0612 21.8954C14.41 21.8969 15.7431 21.6066 16.9691 21.0446C18.1952 20.4825 19.2852 19.6619 20.1643 18.6391C19.5408 17.2793 18.54 16.1271 17.2809 15.3195C16.0217 14.5118 14.5572 14.0826 13.0612 14.0829V14.0829Z" fill="white"/>
                        </svg></button>
                        <div className={`transition-opacity top-8 right-0 absolute duration-200 ease-in ${
                                profile ? 'opacity-100' : 'opacity-0'
                            }`}>
                            {profile && 
                             <div  className="dropdown-content menu rounded-md p-2 bg-white shadow bg-base-300 rounded-box w-80">      
                             <div className="rounded-lg bg-base-300 p-3 drop-shadow-xl divide-y divide-neutral">
                                 <div className="flex space-x-4 items-center p-4">
                                     <div className="flex mr-auto items-center space-x-4">
                                         <svg width="35" height="35" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fillRule="evenodd" clipRule="evenodd" d="M25.5612 12.5204C25.5612 15.8356 24.2443 19.015 21.9001 21.3592C19.5558 23.7034 16.3764 25.0204 13.0612 25.0204C9.74601 25.0204 6.56659 23.7034 4.22238 21.3592C1.87818 19.015 0.561218 15.8356 0.561218 12.5204C0.561218 9.20518 1.87818 6.02576 4.22238 3.68155C6.56659 1.33735 9.74601 0.0203857 13.0612 0.0203857C16.3764 0.0203857 19.5558 1.33735 21.9001 3.68155C24.2443 6.02576 25.5612 9.20518 25.5612 12.5204V12.5204ZM16.1862 7.83289C16.1862 8.66169 15.857 9.45654 15.2709 10.0426C14.6849 10.6286 13.89 10.9579 13.0612 10.9579C12.2324 10.9579 11.4376 10.6286 10.8515 10.0426C10.2655 9.45654 9.93622 8.66169 9.93622 7.83289C9.93622 7.00408 10.2655 6.20923 10.8515 5.62318C11.4376 5.03713 12.2324 4.70789 13.0612 4.70789C13.89 4.70789 14.6849 5.03713 15.2709 5.62318C15.857 6.20923 16.1862 7.00408 16.1862 7.83289V7.83289ZM13.0612 14.0829C11.5653 14.0826 10.1007 14.5118 8.84156 15.3195C7.5824 16.1271 6.5816 17.2793 5.95809 18.6391C6.83728 19.6619 7.92727 20.4825 9.15332 21.0446C10.3794 21.6066 11.7125 21.8969 13.0612 21.8954C14.41 21.8969 15.7431 21.6066 16.9691 21.0446C18.1952 20.4825 19.2852 19.6619 20.1643 18.6391C19.5408 17.2793 18.54 16.1271 17.2809 15.3195C16.0217 14.5118 14.5572 14.0826 13.0612 14.0829V14.0829Z" fill="gray"/>
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
                                                 <path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM9 5H5V9H9V5Z"/><path d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM9 15H5V19H9V15Z"/><path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM19 5H15V9H19V5Z"/><path d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM19 15H15V19H19V15Z"/>
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
                                                 <path d="M13.2,18.456H8.475a1.25,1.25,0,1,1,0-2.5H13.2a1.25,1.25,0,0,1,0,2.5Z"/>
                                                 <path d="M10.839,20.82a1.25,1.25,0,0,1-1.25-1.25V14.841a1.25,1.25,0,0,1,2.5,0V19.57A1.25,1.25,0,0,1,10.839,20.82Z"/>
                                                 <path d="M20.954,18.515a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                                                 <path d="M23.8,15.67a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                                                 <path d="M23.68,21.241a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                                                 <path d="M26.525,18.4a1.251,1.251,0,0,0,0-2.5,1.251,1.251,0,0,0,0,2.5Z"/>
                                                 <path d="M28.886,34.75a4.9,4.9,0,0,1-4.752-3.663l-1.4-4.1a20.448,20.448,0,0,1-10.436-.068l-1.456,4.257a4.725,4.725,0,0,1-1.717,2.549,4.905,4.905,0,0,1-7.9-3.836V19.2c0-.31.038-.868.054-1.08l-.052-.945A10.494,10.494,0,0,1,11.693,6.641a10.351,10.351,0,0,1,3.728.686,3.821,3.821,0,0,0,1.373.235h1.412a3.751,3.751,0,0,0,1.353-.227A10.32,10.32,0,0,1,23.5,6.643,10.674,10.674,0,0,1,33.781,17.42V29.892A4.881,4.881,0,0,1,28.886,34.75ZM23.5,24.141a1.253,1.253,0,0,1,1.183.846l1.841,5.384a2.438,2.438,0,0,0,2.359,1.879,2.379,2.379,0,0,0,2.395-2.358V17.42a8.163,8.163,0,0,0-7.822-8.277,7.78,7.78,0,0,0-3,.524h0a6.249,6.249,0,0,1-2.255.395H16.794a6.311,6.311,0,0,1-2.269-.4,7.858,7.858,0,0,0-2.832-.52,7.978,7.978,0,0,0-7.974,7.965l.054.955a1.9,1.9,0,0,1,0,.2c-.011.141-.05.66-.05.938V29.892a2.406,2.406,0,0,0,3.871,1.86,2.35,2.35,0,0,0,.855-1.29l1.869-5.475a1.251,1.251,0,0,1,1.59-.777c.062.02,6.155,2.075,11.123.025A1.247,1.247,0,0,1,23.5,24.141ZM20.01,8.5h0Z"/>
                                                 <path d="M18.294,7.261a1.23,1.23,0,0,1-.105-1.184,1.891,1.891,0,0,1,.874-1.04A4.97,4.97,0,0,1,22.7,4.874a8.184,8.184,0,0,0,4.595.142A3.683,3.683,0,0,0,29.854,1.5,1.278,1.278,0,0,0,28.6.25a1.262,1.262,0,0,0-1.25,1.25c.066,1.244-1.558,1.378-2.5,1.266-1.574-.186-3.049-.792-4.663-.617a5.182,5.182,0,0,0-3.917,2.183,3.982,3.982,0,0,0-.137,4.19c.836,1.372,3,.117,2.158-1.261Z"/>
                                             </svg>
                                             <span>.....</span>
                                         </a>
                                     </nav>
                                 </div>
                                 <div className="pt-2">
                                     <button type="button" className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
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
                         </div>
                            }
                            </div>
                    
                    </div>




                </div>
            </div>
        </div>
    );
} 
export default Header;