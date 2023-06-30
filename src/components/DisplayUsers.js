import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { removeUser } from '../store/slices/UserSlice';

function DisplayUsers(){
const dispatch = useDispatch();
const data = useSelector((state)=>state.users);
console.log(data);

const deleteUser = (payload) => {
console.log(payload);
dispatch(removeUser(payload));
};
return( <>
<div>
{data.map((item,index)=>{
return <li key={index}>{item}
<button onClick={()=>deleteUser(index)}>delete</button></li>
})}
</div>
</>  
) 
}
export default DisplayUsers;