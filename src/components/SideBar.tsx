import { useRouter } from "next/navigation";

const SideBar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void }) => {
    const router = useRouter()

    return (
      <div className={`fixed z-[100] ${sidebarOpen ? "w-[12rem]" : "w-[4rem]"} duration-300 ease-linear h-[100%] drop-shadow-md bg-foreground`}>
        {/* <button
          onClick={() => setSidebarOpen(!sidebarOpen)} // Wrap the call in an arrow function
          className={`absolute ${sidebarOpen ? "left-[12rem]" : "left-[4rem]"} duration-300 ease-linear bg-secondColor rounded-r-full p-1 top-[50%]`}
        >
         <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className={` duration-300 ease-linear ${sidebarOpen ? "opacity-100" : " rotate-180"}`}  xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9375 0.5L4.5625 8L8.9375 15.5M5.4375 0.5L1.0625 8L5.4375 15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button> */}

        <div className="overflow-y-auto  overflow-x-hidden">
        <div className=" flex p-1">
        <div >
        <svg width="47" height="41" viewBox="0 0 47 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-none"> 
        <path d="M23.4999 8.25759C21.0706 5.16557 17.3256 2.07355 8.04423 1.84665C7.4346 1.83176 6.93744 2.32694 6.93744 2.93675C6.93744 7.46047 6.93744 24.5867 6.93744 29.6517C6.93744 30.2615 7.43465 30.7404 8.04412 30.7603C17.3255 31.0637 21.0706 35.1787 23.4999 38.2709M23.4999 8.25759C25.9293 5.16557 29.6742 2.07355 38.9556 1.84665C39.5653 1.83176 40.0624 2.31581 40.0624 2.92562C40.0624 7.98239 40.0624 24.5933 40.0624 29.6502C40.0624 30.2599 39.5653 30.7404 38.9558 30.7603C29.6744 31.0637 25.9293 35.1787 23.4999 38.2709M23.4999 8.25759V38.2709" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M39.4779 6.25H44.4791C45.0888 6.25 45.5833 6.74436 45.5833 7.35417V36.1486C45.5833 37.0421 44.5306 37.6357 43.7139 37.2729C41.9581 36.4927 39.0279 35.5396 35.1911 35.5396C28.6959 35.5396 23.5 39.375 23.5 39.375C23.5 39.375 18.3039 35.5396 11.8088 35.5396C7.97195 35.5396 5.04174 36.4927 3.28591 37.2729C2.46929 37.6357 1.41663 37.0421 1.41663 36.1486V7.35417C1.41663 6.74436 1.91098 6.25 2.52079 6.25H7.52203" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
        </div>
        {sidebarOpen &&
                    <div className="ml-7 text-white font-semibold text-2xl">
                        Alfresco
                    </div>
                }
        </div>

        <button
          
          className={`flex ${sidebarOpen ? "ml-6":"ml-[0.65rem]"} mt-6 border-2 py-1 text-white px-2 rounded-lg`}
        >
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
        <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg></div>
        {sidebarOpen &&
        <div className="ml-4">
            Upload new
        </div>

        }
        </button>

        {/* elements in side bar */}
        <div className=" mt-[100%] grid grid-cols-1">
        <div onClick={()=>{router.push("/dashboard")}} className=" flex border-b-2 items-center border-gray-400 border-opacity-20 hover:opacity-50 py-2 p-1 cursor-pointer">
        <div className=" ml-3">
        <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.58801 26.9486V22.6835C9.58801 21.5947 10.4771 20.7121 11.5738 20.7121H15.5829C16.1096 20.7121 16.6147 20.9198 16.9871 21.2895C17.3595 21.6592 17.5688 22.1606 17.5688 22.6835V26.9486C17.5654 27.4013 17.7442 27.8365 18.0655 28.1577C18.3867 28.479 18.8238 28.6596 19.2798 28.6596H22.015C23.2924 28.6629 24.5187 28.1615 25.4231 27.2659C26.3276 26.3703 26.8359 25.1543 26.8359 23.8861V11.7355C26.8359 10.7111 26.3785 9.73938 25.587 9.08216L16.2823 1.70496C14.6638 0.411483 12.3447 0.453246 10.7745 1.80415L1.6822 9.08216C0.853269 9.72001 0.357827 10.6946 0.333344 11.7355V23.8737C0.333344 26.5169 2.49174 28.6596 5.15426 28.6596H7.827C8.77403 28.6596 9.54368 27.9011 9.55054 26.961L9.58801 26.9486Z" fill="white"/>
        </svg>


        </div>
        {sidebarOpen &&
                    <div className="ml-5 text-whitemt-2 font-poppins text-white font-semibold text-sm">
                        Accueil
                    </div>
                }
        </div>

        <div onClick={()=>{router.push("/dashboard/suivis")}} className=" flex border-b-2 items-center  border-gray-400 border-opacity-20 hover:opacity-50 py-2 p-1 cursor-pointer">
        <div className=" ml-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-7">
        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
        </svg>


        </div>
        {sidebarOpen &&
                    <div className="ml-5 mt-2 font-poppins text-white font-semibold text-sm">
                        Suivis
                    </div>
                }
        </div>

        <div onClick={()=>{router.push("/dashboard/mes-fichiers")}}   className=" flex border-b-2 items-center  border-gray-400 border-opacity-20 hover:opacity-50 py-2 p-1 cursor-pointer">
        <div className=" ml-3">
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.89338 16.5302C10.8602 16.5302 12.4364 18.1217 12.4364 20.1024V24.8576C12.4364 26.8243 10.8602 28.4284 8.89338 28.4284H4.17872C2.2259 28.4284 0.635742 26.8243 0.635742 24.8576V20.1024C0.635742 18.1217 2.2259 16.5302 4.17872 16.5302H8.89338ZM24.9903 16.5302C26.9432 16.5302 28.5333 18.1217 28.5333 20.1024V24.8576C28.5333 26.8243 26.9432 28.4284 24.9903 28.4284H20.2757C18.3089 28.4284 16.7327 26.8243 16.7327 24.8576V20.1024C16.7327 18.1217 18.3089 16.5302 20.2757 16.5302H24.9903ZM8.89338 0.531418C10.8602 0.531418 12.4364 2.13552 12.4364 4.10368V8.8588C12.4364 10.8395 10.8602 12.4297 8.89338 12.4297H4.17872C2.2259 12.4297 0.635742 10.8395 0.635742 8.8588V4.10368C0.635742 2.13552 2.2259 0.531418 4.17872 0.531418H8.89338ZM24.9903 0.531418C26.9432 0.531418 28.5333 2.13552 28.5333 4.10368V8.8588C28.5333 10.8395 26.9432 12.4297 24.9903 12.4297H20.2757C18.3089 12.4297 16.7327 10.8395 16.7327 8.8588V4.10368C16.7327 2.13552 18.3089 0.531418 20.2757 0.531418H24.9903Z" fill="white"/>
        </svg>

        </div>
        {sidebarOpen &&
                    <div className="ml-5 mt-2 font-poppins text-white font-semibold text-sm">
                        Mes fichiers
                    </div>
                }
        </div>

        <div  onClick={()=>{router.push("/dashboard/fichiers-partages")}}   className=" flex border-b-2 items-center  border-gray-400 border-opacity-20 hover:opacity-50 py-2 p-1 cursor-pointer">
        <div className=" ml-3">
        <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5135 14.9303C20.2996 14.9303 24.3862 15.689 24.3862 18.7253C24.3862 21.7604 20.3258 22.5468 15.5135 22.5468C10.7275 22.5468 6.64082 21.788 6.64082 18.753C6.64082 15.7167 10.7012 14.9303 15.5135 14.9303ZM23.1658 13.102C24.9956 13.068 26.9627 13.3193 27.6896 13.4977C29.2296 13.8004 30.2425 14.4185 30.6622 15.3167C31.0169 16.0541 31.0169 16.9096 30.6622 17.6457C30.0202 19.0389 27.9507 19.4861 27.1463 19.6017C26.9802 19.6268 26.8466 19.4823 26.864 19.3153C27.275 15.4549 24.0064 13.6245 23.1608 13.2037C23.1246 13.1849 23.1171 13.156 23.1209 13.1384C23.1234 13.1258 23.1384 13.1057 23.1658 13.102ZM7.65977 13.0993L8.00432 13.1025C8.0318 13.1062 8.04554 13.1263 8.04804 13.1376C8.05179 13.1565 8.04429 13.1841 8.00932 13.2042C7.16252 13.625 3.89396 15.4554 4.30487 19.3145C4.32236 19.4828 4.18996 19.6261 4.02385 19.6022C3.21951 19.4866 1.14997 19.0394 0.507996 17.6462C0.152039 16.9088 0.152039 16.0546 0.507996 15.3172C0.92765 14.419 1.93932 13.8009 3.4793 13.4969C4.20745 13.3198 6.17333 13.0685 8.00432 13.1025L7.65977 13.0993ZM15.5135 0.228851C18.7721 0.228851 21.3849 2.85437 21.3849 6.13314C21.3849 9.41064 18.7721 12.0387 15.5135 12.0387C12.2549 12.0387 9.6421 9.41064 9.6421 6.13314C9.6421 2.85437 12.2549 0.228851 15.5135 0.228851ZM23.4843 1.21349C26.6317 1.21349 29.1035 4.19201 28.2616 7.50971C27.6934 9.74329 25.6363 11.2269 23.3444 11.1666C23.1146 11.1603 22.8886 11.139 22.67 11.1013C22.5114 11.0736 22.4314 10.894 22.5214 10.7608C23.3957 9.46692 23.894 7.91045 23.894 6.23966C23.894 4.49602 23.3494 2.87045 22.404 1.53759C22.374 1.49614 22.3515 1.43207 22.3815 1.38433C22.4065 1.34539 22.4527 1.32529 22.4964 1.31524C22.8149 1.24992 23.1421 1.21349 23.4843 1.21349ZM7.68396 1.21336C8.02618 1.21336 8.35341 1.24979 8.67315 1.31511C8.71561 1.32516 8.76307 1.34652 8.78805 1.38421C8.81678 1.43194 8.79555 1.49601 8.76557 1.53747C7.8201 2.87033 7.27555 4.49589 7.27555 6.23954C7.27555 7.91033 7.77389 9.4668 8.64817 10.7607C8.7381 10.8939 8.65816 11.0735 8.49954 11.1012C8.27972 11.1401 8.05491 11.1602 7.8251 11.1665C5.53323 11.2268 3.47618 9.74317 2.90789 7.50959C2.06484 4.19188 4.53655 1.21336 7.68396 1.21336Z" fill="white"/>
        </svg>

        </div>
        {sidebarOpen &&
                    <div className="ml-5 font-poppins text-white font-semibold text-sm">
                       Fichiers partages
                    </div>
                }
        </div>

        <div  onClick={()=>{router.push("/dashboard/recents")}}  className=" flex border-b-2 items-center  border-gray-400 border-opacity-20 hover:opacity-50 py-2 p-1 cursor-pointer">
        <div className=" ml-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        </svg>

        </div>
        {sidebarOpen &&
                    <div className="ml-5 mt-2 font-poppins text-white font-semibold text-sm">
                        Recents
                    </div>
                }
        </div>

        <div onClick={()=>{router.push("/dashboard/meta-data")}}  className=" flex border-b-2 items-center  border-gray-400 border-opacity-20 hover:opacity-50 py-2 p-1 cursor-pointer">
        <div className=" ml-3">
        <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.7365 16.1125C26.3868 16.1125 28.5333 18.223 28.5333 20.8267C28.5333 23.429 26.3868 25.5394 23.7365 25.5394C21.0879 25.5394 18.9398 23.429 18.9398 20.8267C18.9398 18.223 21.0879 16.1125 23.7365 16.1125ZM11.911 18.8164C13.0719 18.8164 14.0142 19.7421 14.0142 20.8826C14.0142 22.0216 13.0719 22.9489 11.911 22.9489H2.73904C1.5782 22.9489 0.635895 22.0216 0.635895 20.8826C0.635895 19.7421 1.5782 18.8164 2.73904 18.8164H11.911ZM5.43268 0.741669C8.08292 0.741669 10.2295 2.85209 10.2295 5.45433C10.2295 8.05809 8.08292 10.1685 5.43268 10.1685C2.78399 10.1685 0.635895 8.05809 0.635895 5.45433C0.635895 2.85209 2.78399 0.741669 5.43268 0.741669ZM26.4317 3.38959C27.591 3.38959 28.5333 4.31537 28.5333 5.45433C28.5333 6.59481 27.591 7.52059 26.4317 7.52059H17.2597C16.0989 7.52059 15.1566 6.59481 15.1566 5.45433C15.1566 4.31537 16.0989 3.38959 17.2597 3.38959H26.4317Z" fill="white"/>
        </svg>


        </div>
        {sidebarOpen &&
                    <div className="ml-5 mt-2 font-poppins text-white font-semibold text-sm">
                        Meta-data
                    </div>
                }
        </div>
        </div>
      </div>
      </div>
    );
  };
  export default SideBar;
  