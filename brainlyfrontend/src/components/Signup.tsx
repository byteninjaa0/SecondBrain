import { useRef } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./icon/CloseIcon";
import { Input } from "./Input";
import axios from "axios"
import { BACKEND_URL } from "./Config";
import { data, useNavigate } from "react-router-dom";

export function Signup(){
    const navigate=useNavigate();
    const usernameref=useRef<HTMLInputElement>(null);
    const passwordref=useRef<HTMLInputElement>(null);
    async function signup(){
        const username=usernameref.current?.value;
        const password=passwordref.current?.value;
        await axios.post(BACKEND_URL+"api/v1/signup",{
                username,
                password 
        });
    navigate("/signin/");

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
<Button onclick={signup} type="primary" size="md" text="Signup"></Button>
<Button onclick={()=>{navigate("/signin")}} type="secondary" size="md" text="Already a user signin?"></Button>

</div></div>
</span>
</div>
    </div>
}