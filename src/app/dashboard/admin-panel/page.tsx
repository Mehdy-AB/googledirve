"use client"

import ChartOne from "@/components/admin/Charts/ChartOne";
import ChartThree from "@/components/admin/Charts/ChartThree";
import ChartTwo from "@/components/admin/Charts/ChartTwo";

const Page=()=>{

    return(
      <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
       
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 shadow-md px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
            <svg  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400 w-12 h-12 mb-3 inline-block">
            <g clip-path="url(#clip0_901_1141)">
            <path d="M12 13H15M12 16H20M12 20H20M12 24H20M21 7V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V24C1 24 1 25 2 25H3M26 27H30C30.553 27 31 26.553 31 26V4C31 3.447 30.553 3 30 3H24M26 30C26 30.553 25.553 31 25 31H7C6.447 31 6 30.553 6 30V8C6 7.447 6.447 7 7 7H25C25.553 7 26 7.447 26 8V30Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_901_1141">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>
              <h2 className="title-font font-medium text-3xl ">2.7K</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 shadow-md px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl ">1.3K</h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 shadow-md px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-blue-400 w-12 h-12 mb-3 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>

              <h2 className="title-font font-medium text-3xl ">74</h2>
              <p className="leading-relaxed">Files</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 shadow-md px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
            <svg fill="currentColor"  viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" className="text-blue-400 w-12 h-12 mb-3 inline-block">
                <path className="clr-i-outline--badged clr-i-outline-path-1--badged" d="M7,7.76V9.85a43.53,43.53,0,0,0,11,1.27,54.82,54.82,0,0,0,6.2-.36,7.5,7.5,0,0,1-1.13-1.88c-1.5.15-3.2.24-5.07.24A37.6,37.6,0,0,1,7,7.76Z"></path><path className="clr-i-outline--badged clr-i-outline-path-2--badged" d="M31,13.43v.82c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.33,43.33,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.33,43.33,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c1.7,0,3.25.08,4.64.2a7.44,7.44,0,0,1,.67-1.94c-1.88-.18-3.75-.26-5.31-.26-5.57,0-15,.93-15,4.43V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V12.87A7.45,7.45,0,0,1,31,13.43Z"></path><circle className="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"></circle>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
            </svg>
              <h2 className="title-font font-medium text-3xl ">46</h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
	  <div className=" grid grid-cols-2">
	  <div><ChartOne /></div>
	  <div><ChartTwo /></div>
	  <div></div><ChartThree />
	  </div>
	  
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Logs</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup>
			<thead>
				<tr className="dark:bg-gray-300">
					<th className="p-3">A-Z</th>
					<th className="p-3">Name</th>
					<th className="p-3">Job title</th>
					<th className="p-3">Phone</th>
					<th className="p-3">Email</th>
					<th className="p-3">Address</th>
					<th className="p-3">
						<span className="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">A</td>
					<td className="px-3 py-2">
						<p>Dwight Adams</p>
					</td>
					<td className="px-3 py-2">
						<span>UI Designer</span>
						<p className="dark:text-gray-600">Spirit Media</p>
					</td>
					<td className="px-3 py-2">
						<p>555-873-9812</p>
					</td>
					<td className="px-3 py-2">
						<p>dwight@adams.com</p>
					</td>
					<td className="px-3 py-2">
						<p>71 Cherry Court, SO</p>
						<p className="dark:text-gray-600">United Kingdom</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
					<td className="px-3 py-2">
						<p>Richie Allen</p>
					</td>
					<td className="px-3 py-2">
						<span>Geothermal Technician</span>
						<p className="dark:text-gray-600">Icecorps</p>
					</td>
					<td className="px-3 py-2">
						<p>555-129-0761</p>
					</td>
					<td className="px-3 py-2">
						<p>richie@allen.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Knesebeckstrasse 32, Obersteinebach</p>
						<p className="dark:text-gray-600">Germany</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">B</td>
					<td className="px-3 py-2">
						<p>Alex Bridges</p>
					</td>
					<td className="px-3 py-2">
						<span>Administrative Services Manager</span>
						<p className="dark:text-gray-600">Smilectronics</p>
					</td>
					<td className="px-3 py-2">
						<p>555-238-9890</p>
					</td>
					<td className="px-3 py-2">
						<p>alex@bridges.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Hooivelden 117, Kortrijk</p>
						<p className="dark:text-gray-600">Belgium</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
					<td className="px-3 py-2">
						<p>Lynette Brown</p>
					</td>
					<td className="px-3 py-2">
						<span>Camera Operator</span>
						<p className="dark:text-gray-600">Surge Enterprises</p>
					</td>
					<td className="px-3 py-2">
						<p>555-521-5712</p>
					</td>
					<td className="px-3 py-2">
						<p>lynette@brown.com</p>
					</td>
					<td className="px-3 py-2">
						<p>22 rue de la Boétie, Poitiers</p>
						<p className="dark:text-gray-600">France</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">C</td>
					<td className="px-3 py-2">
						<p>Mariah Claxton</p>
					</td>
					<td className="px-3 py-2">
						<span>Nuclear Technician</span>
						<p className="dark:text-gray-600">White Wolf Brews</p>
					</td>
					<td className="px-3 py-2">
						<p>555-654-9810</p>
					</td>
					<td className="px-3 py-2">
						<p>mariah@claxton.com</p>
					</td>
					<td className="px-3 py-2">
						<p>R Oliveirinhas 71, Maia</p>
						<p className="dark:text-gray-600">Portugal</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
				<tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
					<td className="px-3 py-2">
						<p>Hermila Craig</p>
					</td>
					<td className="px-3 py-2">
						<span>Production Engineer</span>
						<p className="dark:text-gray-600">Cavernetworks Co.</p>
					</td>
					<td className="px-3 py-2">
						<p>555-091-8401</p>
					</td>
					<td className="px-3 py-2">
						<p>hermila@craig.com</p>
					</td>
					<td className="px-3 py-2">
						<p>Rua da Rapina 89, Espeja</p>
						<p className="dark:text-gray-600">Spain</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
    </section>
    );

}
export default Page;