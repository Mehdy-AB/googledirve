
const FolderDisplayTow=({folder,getFolder})=>{
return(
    <div
                className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2"
            >
                {/* Folder Details */}
                <div className="flex items-center justify-start gap-2">
                    <span onClick={()=>{getFolder(folder.id,folder?.name)}} className="flex underline hover:text-blue-600 cursor-pointer items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                            />
                        </svg>
                        {folder.name}
                    </span>
                </div>
                <span>{folder.documents.reduce((acc, doc) => acc + doc.size, 0)} MB</span>
                <span>{folder.documents.length}</span>
                <span>{folder.subFolders?.length}</span>
                <span>{new Date(folder.createdAt).toLocaleString()}</span>
                <span>
                {new Date(folder.documents[0]?.user.lastActive || folder.createdAt).toLocaleString()}
                </span>
            </div>
);
}
export default FolderDisplayTow;