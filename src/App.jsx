import {  useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import Todos from "./Component/Todos";
import { userSelector } from "./redux/Slice/userSlice";


function App() {
  const user=useSelector(userSelector);
  console.log(user);
  return (
   
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Todos/>}/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
   </BrowserRouter>
  
      
  );
}

export default App;
