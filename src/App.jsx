import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import Todos from "./Component/Todos";

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="" element={<Todos/>}/>
      <Route path="/LogIn" element={<LoginPage />} />
    </Routes>
   </BrowserRouter>
      
  );
}

export default App;
