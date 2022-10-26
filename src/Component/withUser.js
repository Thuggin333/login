import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/Slice/userSlice";

export  function withUser(OriginalComponent) {
  return function ComponentWithUser() {
    const user = useSelector(userSelector);
    const navigate = useNavigate();
    useEffect(() => {
      if (!user) navigate("/login")
    }, [user,navigate]);
    return <OriginalComponent />;
  };
}

