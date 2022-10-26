import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        const name=new FormData(e.target).get("name");
        const password=new FormData(e.target).get("password");
         console.log(name);
         if(name!==""&&password!==""){
            dispatch({
                type:"login",
                payload: {
                    name,
                    password
                }
             })
         }
         navigate("/")
    }

  return (
    <form onSubmit={submitForm}>
        <input type="text"name="name" />
        <input type="password" name="password" />
        <button>LOG IN</button>
    </form>
  )
}
