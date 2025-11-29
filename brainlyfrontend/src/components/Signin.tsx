import { useRef } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./icon/CloseIcon";
import { Input } from "./Input";
import axios from "axios"
import { BACKEND_URL } from "./Config";
import { data, useNavigate } from "react-router-dom";

export function Signin(){
    const navigate=useNavigate();
    const usernameref=useRef<HTMLInputElement>(null);
    const passwordref=useRef<HTMLInputElement>(null);
    async function signin(){
        const username=usernameref.current?.value;
        const password=passwordref.current?.value;
        const response = await axios.post(BACKEND_URL+"api/v1/login",{
                username,
                password 
        });
        const jwt = response.data.token;
        localStorage.setItem("token",jwt);
        localStorage.setItem("username",username);
        if(!jwt){
            alert("login failed")
        }
        else{
        navigate("/dashboard"); 
        }
        
        
        
    }
    return <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
        <div className="flex items-center">
            <span className="p-4 rounded bg-white opacity-100">
<div className="flex justify-end">
<CloseIcon />
</div>
<div className="flex flex-col gap-4 p-3">
<Input ref={usernameref} placeholder="username"></Input>
<Input ref={passwordref} placeholder="password"></Input>
<div className="flex justify-center">
<Button onclick={signin} type="primary" size="md" text="Signin"></Button>
<Button onclick={()=>{navigate("/signup")}} type="secondary" size="md" text="create a account"></Button>
</div></div>
</span>
</div>
    </div>
}