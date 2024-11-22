
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadForm from '../../components/UploadForm';


const Accueil=({setUploadFiles,uploadForm,setUploadForm})=>{
    const [listForm,setListForm] =useState(true);

    const onDrop = async (
      input: React.ChangeEvent<HTMLInputElement> | File[]
    ) => {
      let files: File[] = [];
  
      // If input is from the file input, extract files
      if ('target' in input) {
        const fileList = input.target.files;
        if (!fileList || fileList.length === 0) return;
        files = Array.from(fileList);
      } else {
        // If input is an array of files (from drag-and-drop)
        files = input;
      }
      
      const uploadStatuses = files.map((file) => ({
        name: `${Date.now()}_${file.name}`,
        size: file.size,
        progress: 0,
        etat: true, 
      }));

      useEffect(()=>{
        
      },[])
      
      setUploadFiles((prev) => [...prev, ...uploadStatuses]);

      const updateFileStatus = (name: string, progress: number, etat: boolean) => {
        setUploadFiles((prev) =>
          prev.map((file) =>
            file.name === name ? { ...file, progress, etat } : file
          )
        );
      };
      try {
        for (const file of files) {
          const formData = new FormData();
          formData.append('files', file);
    
          const xhr = new XMLHttpRequest();
    
          xhr.open('POST', `/api/uploads`, true);
    
          // Track upload progress
          xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
              const percentComplete = Math.round((event.loaded / event.total) * 100);
              updateFileStatus(file.name, percentComplete, true); // Update progress, keep "paused" during upload
            }
          };
    
          // Handle upload success
          xhr.onload = () => {
            if (xhr.status === 200) {
              console.log('Upload successful:', xhr.responseText);
              updateFileStatus(file.name, 100, true); // Upload complete, set "good"
            } else {
              console.error('Upload failed:', xhr.statusText);
              updateFileStatus(file.name, 0, false); // Upload failed, set "error"
            }
          };
    
          // Handle errors
          xhr.onerror = () => {
            console.error('Error uploading file:', file.name);
            updateFileStatus(file.name, 0, false); // Upload failed, set "error"
          };
    
          xhr.send(formData); // Start the upload
        }
      } catch (error) {
        console.error('Error during upload:', error);
        files.forEach((file) =>
          updateFileStatus(file.name, 0, false) // Mark all as error in case of general failure
        );
      }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop,noClick: true, 
        accept: undefined,});
return(
    
    <div>
       
        <div className="grid border-b-2 border-gray-300 items-stretch p-10 px-28 grid-cols-3 justify-center gap-6">
        <div className="  p-6 bg-white  grid rounded-lg drop-shadow-lg w-full">
            <span className=' text-secondColor font-semibold'> Modèles de Fichiers Personnalisables </span>
            {/* <div className='relative w-[100%]'>
                <Image alt='accuiel' className=' p-4' style={{width:"100%",height:"100%"}} objectFit="contain" width={100} height={100} src={"/images/accuielImage.jpg"} />
            </div> */}
            <p className=' text-gray-400 text-sm '>Créez facilement des modèles de fichiers adaptés à vos besoins. Choisissez des types de fichiers comme PDF ou Excel, ajoutez des champs pour les dates, les chiffres, et bien plus—parfait pour organiser vos données à votre façon.</p>
            <div className='flex justify-end'>
                <button className='group flex bg-secondColor items-center text-white px-2 py-2 rounded-md hover:opacity-80'>Créez modèle
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 duration-200 group-hover:rotate-90">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </div>
        </div>
        <div className="p-6 bg-white  grid rounded-lg drop-shadow-lg w-full">
            <span className=' text-secondColor font-semibold'> Gestion Intelligente des Fichiers</span>
            <p className=' text-gray-400 text-sm '>Simplifiez l'organisation de vos fichiers avec une création de dossiers intuitive. Partagez des fichiers ou des dossiers avec d'autres, attribuez des droits d'accès spécifiques et collaborez sans effort.</p>
            <div className='flex justify-end'>
                <button className='group flex bg-secondColor items-center text-white px-2 py-1 rounded-md hover:opacity-80'>Créez dossier
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 duration-200 group-hover:rotate-90">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </div>
        </div>
        <div className=" p-6 bg-white  grid rounded-lg drop-shadow-lg w-full">
            <span className=' text-secondColor font-semibold'>Sécurité Avancée des Fichiers </span>
            <p className=' text-gray-400 text-sm '>Gardez vos fichiers en sécurité grâce à des fonctionnalités de sécurité robustes. Assurez-vous que les données sensibles restent privées et gérez les permissions d'accès en toute sérénité.</p>
            <div className='flex justify-end'>
                <button className='group flex bg-secondColor items-center text-white px-2 py-1 rounded-md hover:opacity-80'>Upload fichiers
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 duration-200 group-hover:rotate-90">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </div>
        </div>
        </div>

        <div className='flex gap-6 py-5 items-center justify-center'>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-sm bg-white text-gray-500'> 
        <svg width="20px" height="20px" className='mr-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M15 15C13.3431 15 12 16.3431 12 18C12 19.6569 13.3431 21 15 21M19 21C20.6569 21 22 19.6569 22 18C22 16.3431 20.6569 15 19 15M15 18H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            Type
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-sm bg-white text-gray-500'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
            Users
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-sm bg-white text-gray-500'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
        </svg>

            Modele
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-sm bg-white text-gray-500'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>

            Emplacement
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </button>
        <button className='flex px-3 py-[0.2rem] justify-center items-center hover:opacity-80 rounded-md text-sm bg-white text-gray-500'> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
            Date
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-3">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </button>
        </div>

        <div className='grid'>
            <span className=' text-gray-700 text-sm'>Dossiers suggérés</span>
            <div className='p-4 grid grid-cols-6 gap-4'>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-sm text-gray-600'>
                        <span className=' font-semibold'>Dossier N1</span>
                        <span className='ml-1 text-12px'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-sm text-gray-600'>
                        <span className=' font-semibold'>Dossier N2</span>
                        <span className='ml-1 text-12px'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-sm text-gray-600'>
                        <span className=' font-semibold'>Dossier N3</span>
                        <span className='ml-1 text-12px'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-sm text-gray-600'>
                        <span className=' font-semibold'>Dossier N4</span>
                        <span className='ml-1 text-12px'>Create par vous</span>
                    </div>
                </div>
                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-sm text-gray-600'>
                        <span className=' font-semibold'>Dossier N5</span>
                        <span className='ml-1 text-12px'>Create par vous</span>
                    </div>
                </div>

                <div className=' border drop-shadow-xl py-2 px-3 hover:opacity-80 cursor-pointer rounded-md bg-white grid grid-cols-6 text-gray-600'>
                    <div className=' col-span-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </div>
                    <div className=' col-span-4 grid text-sm text-gray-600'>
                        <span className=' font-semibold'>Dossier N6</span>
                        <span className='ml-1 text-12px'>Create par vous</span>
                    </div>
                </div>
            </div>

            <div className=' mt-4 grid items-center grid-cols-2'>
             <span className=' text-gray-700 text-sm '>Suggestions de fichiers </span>
             <div className='mr-4 justify-end flex'>
                <button onClick={()=>setListForm(true)} className={`${listForm?"bg-gray-200":"bg-white"} rounded-l-xl p-1 hover:opacity-70 border-r border-gray-300 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </button>
                <button onClick={()=>setListForm(false)} className={`${listForm?"bg-white":"bg-gray-200"} rounded-r-xl p-1 hover:opacity-70 `}>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
                    <path d="M8.89338 16.5302C10.8602 16.5302 12.4364 18.1217 12.4364 20.1024V24.8576C12.4364 26.8243 10.8602 28.4284 8.89338 28.4284H4.17872C2.2259 28.4284 0.635742 26.8243 0.635742 24.8576V20.1024C0.635742 18.1217 2.2259 16.5302 4.17872 16.5302H8.89338ZM24.9903 16.5302C26.9432 16.5302 28.5333 18.1217 28.5333 20.1024V24.8576C28.5333 26.8243 26.9432 28.4284 24.9903 28.4284H20.2757C18.3089 28.4284 16.7327 26.8243 16.7327 24.8576V20.1024C16.7327 18.1217 18.3089 16.5302 20.2757 16.5302H24.9903ZM8.89338 0.531418C10.8602 0.531418 12.4364 2.13552 12.4364 4.10368V8.8588C12.4364 10.8395 10.8602 12.4297 8.89338 12.4297H4.17872C2.2259 12.4297 0.635742 10.8395 0.635742 8.8588V4.10368C0.635742 2.13552 2.2259 0.531418 4.17872 0.531418H8.89338ZM24.9903 0.531418C26.9432 0.531418 28.5333 2.13552 28.5333 4.10368V8.8588C28.5333 10.8395 26.9432 12.4297 24.9903 12.4297H20.2757C18.3089 12.4297 16.7327 10.8395 16.7327 8.8588V4.10368C16.7327 2.13552 18.3089 0.531418 20.2757 0.531418H24.9903Z" fill="currentColor"/>
                    </svg>
                </button>
             </div>
            </div>
            <div className='mx-4 mt-5 ' {...getRootProps()}>
                {isDragActive?
                <div
                {...getRootProps()}
                className={` border-2 border-dashed border-gray-400 rounded-md p-4 ${
                    isDragActive ? 'bg-gray-200' : 'bg-white dark:bg-[#344661]'
                }`}
                >
                <input {...getInputProps()} />
                    <div className="flex justify-center mt-10">
                        <label
                        htmlFor="UploadMedia"
                        className="border-2 cursor-pointer mr-1 border-gray-400 px-1 rounded-lg text-gray-500"
                        >
                        Upload
                        </label>
                        <input id="UploadMedia" type="file" className="hidden"  />
                    </div>
                    <div className="flex justify-center mb-10">
                        <div className="text-gray-500 text-sm">
                        {isDragActive ? 'Drop the files here...' : 'Drag and drop images, videos'}
                        </div>
                    </div>
                </div>
                :listForm ? <div className={`shadow-sm overflow-hidden`}>
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-100 text-xs">
                                <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Nom</th>
                                <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Raison de la suggestion</th>
                                <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Proprietaire</th>
                                <th className="w-1/4 py-2 px-6 text-left text-gray-600 font-semibold uppercase">Emplacement</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-xs">
                            {Array.from({ length: 8 }).map((_, index) =>
                            <tr key={index} className="hover:bg-gray-200 items-center cursor-pointer">
                                    <td className="py-2 px-6 border-b flex text-sm items-center">
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
                                            <span className='ml-2  text-gray-500 text-base'>Notes</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                            </svg>
                                    </td>
                                    <td className="py-2 px-6 border-b border-gray-200 text-gray-500 text-12px">Ouvert par vous • 4 nov. 2024</td>
                                    <td className="py-2 px-6 border-b border-gray-200 text-gray-500 text-12px">johndoe@gmail.com</td>
                                    <td className="py-2 border-b cursor-pointer px-6 grid grid-cols-2">
                                    <div className='relative items-center flex group'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                            </svg>
                                                <span className="text-gray-500 ml-1 text-12px">/Dossier N2</span>
                                            
                                            <div className="absolute hidden w-fit group-hover:block p-1 bg-gray-200 rounded shadow">
                                                <div className='flex w-fit'>
                                                    <span className=' p-1 w-fit bg-white rounded-lg'> 
                                                        Dossier N2
                                                    </span>
                                                    
                                                </div>
                                            
                                            </div>
                                        
                                    </div>
                                    <div className='flex justify-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded-full bg-gray-100 cursor-pointer size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                        </svg>
                                    </div>
                                    </td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>:
                <div className='grid grid-cols-5  gap-4 '>
                    {Array.from({ length: 8 }).map((_, index) =>
                    <div key={index} className='bg-white  hover:bg-gray-200 py-2 px-4 rounded-sm'>
                        <span className=' grid grid-cols-2'>
                            <span className='flex items-center justify'> 
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="16px" height="16px" viewBox="0 0 56 64" enableBackground="new 0 0 56 64" >
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
                                        <span className='ml-2 text-base text-gray-500'>Notes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                        </svg>
                            </span>
                            <div className='flex justify-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded-full bg-gray-100 cursor-pointer hover:bg-white size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                        </svg>
                                </div>       
                        </span>
                        <Image src="/images/pdfImage.png"  width={100} 
                        height={330} 
                        layout="responsive" className='border rounded-md mt-2' alt='image of folder'/>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                        <span className=" mt-1 text-12px">Ouvert par vous • 4 nov. 2024</span>
                        </div>
                    </div>)}
                </div>
                }
            </div>
        </div>
    </div>
);
}
export default Accueil;