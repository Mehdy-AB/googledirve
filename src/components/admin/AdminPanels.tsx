
import WorkFlow from "./tabs/WorkFlow";
import Users from "./tabs/Users";
import Documents from "./tabs/Documents";
import System from "./tabs/System";

const AdminPanels=({panel}:{panel:number})=>{
if(panel === 1)
    return(<WorkFlow />)
if(panel === 2)
    return(<Users />)
if(panel === 3)
    return(<Documents />)
if(panel === 4)
    return(<System />)

}
export default AdminPanels;