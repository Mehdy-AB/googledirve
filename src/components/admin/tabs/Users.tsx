
const Users=()=>{
return(
    <div className="h-full w-full py-10 px-[30%]">
       <span className="text-3xl font-semibold ">Users :</span> 
       <p className="text-sm ml-1">This tab provides tools for managing users and their roles, groups, and notifications. It allows administrators to handle LDAP server configurations for importing users and groups, manage user aliases, and set up external communication spaces through the Extranet.</p>
          <div className="border-b-2 my-10 mx-4 border-gray-300"/>
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
);
}
export default Users;