import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/Slice/userSlice";


function withUser(originalComponent){
const user = useSelector(userSelector)
const navigate = useNavigate();
    if(!user){
        navigate("/login");
    }
    return <originalComponent/>
}
export default withUser