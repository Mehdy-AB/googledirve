import GroupCart from "./GroupCart";


const TableGroups=({setGroupInfo,deleteGroup, groups})=>{

    return(
        <div className="bg-[#f3f3f7] grid mx-2 p-6 gap-4 grid-cols-4 rounded shadow-lg">
        {groups.map((group,index)=> 
        <GroupCart setGroupInfo={setGroupInfo} key={index} group={group}/>
        )}
        </div>
    );
}
export default TableGroups;