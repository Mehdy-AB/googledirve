import Header from "../Header";
import SideBar from "../SideBar";
import UploadProgress from "../UploadProgress";
import UploadForm from "../UploadForm";
import AlertsHandeler from "../AlertsHandeler";


const DefualtLayout=({
    children,
    sidebarOpen,
    setSidebarOpen,
    uploadForm,
    setUploadForm,
    uploadFiles,
    setUploadFiles,
  }: {
    children: React.ReactNode,
    sidebarOpen,
    setSidebarOpen,
    uploadForm,
    setUploadForm,
    uploadFiles,
    setUploadFiles,
  })=> {
      
    return (
      <>
      <div>
      <AlertsHandeler />
      </div>
      <section className="flex overflow-auto">
        <Header sidebarOpen={false} setUploadForm={setUploadForm} />
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {uploadFiles.length > 0 && <UploadProgress setFiles={setUploadFiles} files={uploadFiles} />}
        <div className={`z-[0] mt-[2.5rem] duration-300 ease-linear grid h-[calc((100vh-2.5rem))] w-full px-8 pt-6 ${sidebarOpen ? "ml-[12rem]" : "ml-[4rem]"} `}>
          {children}
        </div>
        <div className={`z-[97] duration-300 ease-in ${uploadForm ? "opacity-100 " : "opacity-50"}`}>
          {uploadForm && <UploadForm sidebarOpen={sidebarOpen} onClose={() => setUploadForm(false)} folderId={0} />}
        </div>
        <div className={` bg-foreground text-white grid grid-cols-4 gap-8 p-16 rounded-md shadow-xl top-[2.8rem] absolute ${sidebarOpen ? "left-[12.5rem] w-[calc(100%-13rem)]" : "left-[4rem] w-[calc(100%-4rem)] "}`}>
          <div className="col-span-1">
            <span className="text-2xl font-semibold">Work Flow</span>
            <div className="border-b border-gray-400"></div>
            <div className="">
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
          <div className="col-span-1">
            <span className="text-2xl font-semibold">Uitlisateur</span>
            <div className="border-b border-gray-400"></div>
              <div className=" grid gap-4 grid-cols-2 ">
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Users</span>
                      <p className="text-sm">Add, edit, or delete users.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Groups</span>
                      <p className="text-sm">Manage groups.
                      </p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 10C11.1035 10 11.2052 10.0079 11.3045 10.023C10.9143 10.302 10.5621 10.6308 10.2572 11H4C3.44772 11 3 11.4477 3 12V13.5C3 14.9071 4.57862 16 7.5 16C8.11725 16 8.67455 15.9512 9.16969 15.861C9.25335 16.1896 9.36661 16.5065 9.50646 16.8085C8.90367 16.9334 8.23233 17 7.5 17C4.08805 17 2 15.5544 2 13.5V12C2 10.8954 2.89543 10 4 10H11Z" fill="currentColor"/>
              <path d="M17 6.5C17 7.88071 15.8807 9 14.5 9C13.1193 9 12 7.88071 12 6.5C12 5.11929 13.1193 4 14.5 4C15.8807 4 17 5.11929 17 6.5ZM14.5 5C13.6716 5 13 5.67157 13 6.5C13 7.32843 13.6716 8 14.5 8C15.3284 8 16 7.32843 16 6.5C16 5.67157 15.3284 5 14.5 5Z" fill="currentColor"/>
              <path d="M7.5 2C9.433 2 11 3.567 11 5.5C11 7.433 9.433 9 7.5 9C5.567 9 4 7.433 4 5.5C4 3.567 5.567 2 7.5 2ZM7.5 3C6.11929 3 5 4.11929 5 5.5C5 6.88071 6.11929 8 7.5 8C8.88071 8 10 6.88071 10 5.5C10 4.11929 8.88071 3 7.5 3Z" fill="currentColor"/>
              <path d="M10.5039 12.7198L10.8618 13.0693C11.665 13.854 11.665 15.146 10.8618 15.9307L10.5039 16.2802C10.6335 16.5911 10.7959 16.8839 10.9867 17.1539L11.3823 17.0352C12.4841 16.7047 13.6369 17.3695 13.9028 18.4886L14.0178 18.9727C14.1759 18.9907 14.3366 19 14.4993 19C14.6621 19 14.8228 18.9907 14.9809 18.9727L15.0959 18.4886C15.3618 17.3695 16.5146 16.7047 17.6164 17.0352L18.0119 17.1539C18.2028 16.8839 18.3652 16.5911 18.4948 16.2802L18.1369 15.9307C17.3337 15.146 17.3337 13.854 18.1369 13.0693L18.4948 12.7198C18.3652 12.4089 18.2028 12.1161 18.0119 11.8461L17.6164 11.9648C16.5146 12.2953 15.3618 11.6305 15.0959 10.5114L14.9809 10.0273C14.8228 10.0093 14.6621 10 14.4993 10C14.3366 10 14.1759 10.0093 14.0178 10.0273L13.9028 10.5114C13.6369 11.6305 12.4841 12.2953 11.3823 11.9648L10.9867 11.8461C10.7959 12.1161 10.6335 12.4089 10.5039 12.7198ZM14.4993 15.5C13.9471 15.5 13.4993 15.0523 13.4993 14.5C13.4993 13.9477 13.9471 13.5 14.4993 13.5C15.0516 13.5 15.4993 13.9477 15.4993 14.5C15.4993 15.0523 15.0516 15.5 14.4993 15.5Z" fill="currentColor"/>
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Roles</span>
                      <p className="text-sm">Manage user roles.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">LDAP Servers</span>
                      <p className="text-sm">Add, edit, and delete LDAP servers used to import users and groups.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg"><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d="m28.9722,19.4677c4.1332,0,7.4838-3.3506,7.4838-7.4838s-3.3506-7.4838-7.4838-7.4838-7.4838,3.3506-7.4838,7.4838"/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d="m36.7621,19.4677c0-4.3022-3.4877-7.7898-7.7899-7.7898s-7.7897,3.4876-7.7897,7.7898c0,3.3055,2.0669,6.1128,4.9722,7.2441v13.1419l2.8175,3.6463,2.8177-3.6463v-13.1419c2.9054-1.1313,4.9722-3.9386,4.9722-7.2441Z"/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d="m19.5872,24.8336l-7.7633,7.7633-.586,4.5706,4.5707-.5859,7.7633-7.7633"/></svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Alias</span>
                      <p className="text-sm">View and edit user aliases.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Users notifications</span>
                      <p className="text-sm">View and edit user notifications.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg fill="currentColor" className="" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><path d="M30,20V12H22v3H17V7a2,2,0,0,0-2-2H10V2H2v8h8V7h5V25a2,2,0,0,0,2,2h5v3h8V22H22v3H17V17h5v3ZM8,8H4V4H8ZM24,24h4v4H24Zm0-10h4v4H24Z" transform="translate(0)"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" fill='none' width="32" height="32"/></svg>                
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Extranet</span>
                      <p className="text-sm">Manage communication spaces with external users.</p>
                  </div>
              </button>
              
          </div>
          </div>
          <div className="col-span-1">
            <span className="text-2xl font-semibold">Documents</span>
            <div className="border-b border-gray-400"></div>
            <div className="grid gap-4 grid-cols-2">
                <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_901_1141)">
                <path d="M12 13H15M12 16H20M12 20H20M12 24H20M21 7V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V24C1 24 1 25 2 25H3M26 27H30C30.553 27 31 26.553 31 26V4C31 3.447 30.553 3 30 3H24M26 30C26 30.553 25.553 31 25 31H7C6.447 31 6 30.553 6 30V8C6 7.447 6.447 7 7 7H25C25.553 7 26 7.447 26 8V30Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>         
            <div className="ml-2 text-start col-span-7">
                        {/* <span className="text-xl font-semibold underline" onClick={()=>route.push('/dashboard/admin-panel/documentsManagment')}>Filing categories</span> */}
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
          <div className="col-span-1">
            <span className="text-2xl font-semibold">System</span>
            <div className="border-b border-gray-400"></div>
              <div className=" grid gap-4 grid-cols-2 ">
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">DMS Settings</span>
                      <p className="text-sm">Set general parameters of your Document Management Solution.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Customization</span>
                      <p className="text-sm">Customize the background picture.
                      </p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Email Customisation</span>
                      <p className="text-sm">Change the content of sent emails.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Emails</span>
                      <p className="text-sm">Preview and resend all emails generated by the system.</p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Transactions</span>
                      <p className="text-sm">View transactions and check their integrity.
                      </p>
                  </div>
              </button>
              <button className="grid border-b-2 hover:bg-gray-100  w-full p-2 py-6 grid-cols-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              <div className="ml-2 text-start col-span-7">
                      <span className="text-xl font-semibold underline">Transactions</span>
                      <p className="text-sm">View transactions and check their integrity.
                      </p>
                  </div>
              </button>
          </div>
          </div>
          
        </div>
        
      </section>
      </>
    );
  }
  export default DefualtLayout;