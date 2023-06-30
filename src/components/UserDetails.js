import UserDelete from "./UserDelete";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

function UserDetails(){
    const dispatch = useDispatch();
    const addnewUser = (payload) => {
        console.log(payload);
        dispatch(addUser(payload))
    };
    return (    
        <>
        <div>
           <p>List of user</p>
        </div>
        <button onClick={()=>addnewUser(fakeUserData())}>Add new users</button>
        <ul>
         <DisplayUsers />
        </ul>
        <UserDelete />
     </>
    )
}
export default UserDetails;