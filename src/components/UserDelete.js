import { deleteUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

function UserDelete(){
const dispatch = useDispatch();
    const deleteAllUser = () => {
dispatch(deleteUser());
    }
    return (    
        <>
        <button onClick={()=>deleteAllUser()}>
 Delete All Users
        </button>
        </>
    )
}
export default UserDelete;