import DocumentsManagment from "./DocumentsManagment";
import GroupsMangment from "./usersManagment/GroupsMangment";
import UsersManagment from "./usersManagment/UsersManagment";
import WorkFlow from "./WorkFlow";

const AdminPanels=({panel}:{panel:number})=>{
if(panel === 1)
    return(<WorkFlow />)
if(panel === 2)
    return(<UsersManagment />)
if(panel === 3)
    return(<DocumentsManagment />)
if(panel === 4)
    return(<GroupsMangment />)

}
export default AdminPanels;