import { useEffect } from "react";


const DisplayFiles=({file})=>{
useEffect(()=>console.log(file.size),[file])
return(
    <div
                className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2"
            >
                {/* Folder Details */}
                <div className="flex items-center justify-start gap-2">
                    <span className="flex underline hover:text-blue-600 cursor-pointer items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                                            width="20px" height="20px" viewBox="0 0 56 64" enableBackground="new 0 0 56 64" >
                                        <g>
                                            <path fill="#e95e60" d="M5.1,0C2.3,0,0,2.3,0,5.1v53.8C0,61.7,2.3,64,5.1,64h45.8c2.8,0,5.1-2.3,5.1-5.1V20.3L37.1,0H5.1z"/>
                                            <path fill="#6B0D12" d="M56,20.4v1H43.2c0,0-6.3-1.3-6.1-6.7c0,0,0.2,5.7,6,5.7H56z"/>
                                            <path opacity="0.5" fill="#FFFFFF" enableBackground="new    " d="M37.1,0v14.6c0,1.7,1.1,5.8,6.1,5.8H56L37.1,0z"/>
                                        </g>
                                        <path fill="#FFFFFF" d="M14.9,49h-3.3v4.1c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h3.7
                                            c2.4,0,3.8,1.7,3.8,3.6C18.7,47.4,17.3,49,14.9,49z M14.8,43.1h-3.2v4.6h3.2c1.4,0,2.4-0.9,2.4-2.3C17.2,44,16.2,43.1,14.8,43.1z
                                            M25.2,53.8h-3c-0.6,0-1.1-0.5-1.1-1.1v-9.8c0-0.6,0.5-1.1,1.1-1.1h3c3.7,0,6.2,2.6,6.2,6C31.4,51.2,29,53.8,25.2,53.8z M25.2,43.1
                                            h-2.6v9.3h2.6c2.9,0,4.6-2.1,4.6-4.7C29.9,45.2,28.2,43.1,25.2,43.1z M41.5,43.1h-5.8V47h5.7c0.4,0,0.6,0.3,0.6,0.7
                                            s-0.3,0.6-0.6,0.6h-5.7v4.8c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.7-0.3-0.7-0.7V42.9c0-0.6,0.5-1.1,1.1-1.1h6.2c0.4,0,0.6,0.3,0.6,0.7
                                            C42.2,42.8,41.9,43.1,41.5,43.1z"/>
                                        </svg>
                        {(file?.name.length>23)?file.name.slice(0, 23)+'...':file.name}
                    </span>
                </div>
                <span>{file?.size} MB</span>
                <span>{file?.rule.name}</span>
                <div className="flex cursor-pointer w-max">
                                        <div>
                                            <p className="text-sm items-center flex">
                                            <img src='https://readymadeui.com/profile_2.webp' className="w-6 mr-2 h-6 rounded-full shrink-0" />
                                            {file.user?.fullName}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5">{file.user?.email}</p>
                                        </div>
                                    </div>
                <span>{new Date(file?.createdAt).toLocaleString()}</span>
                <span>
                {new Date(file?.modifiedAt).toLocaleString()}
                </span>
            </div>
);
}
export default DisplayFiles;