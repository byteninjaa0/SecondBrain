import { useRef } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./icon/CloseIcon";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "./Config";

export function CreateContentModal({ open, onClose }: any) {
    const linkref=useRef<HTMLInputElement>(null);
    const titleref=useRef<HTMLInputElement>(null);
    async function adddata(){
        const link=linkref.current?.value;
        const title=titleref.current?.value;
        await axios.post(BACKEND_URL+"api/v1/content",{
            type:title,
            link
        },
        {
            headers:{
                "Authorization":localStorage.getItem("token"),
            }
        }
    )

    }
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose}>
                    <CloseIcon  />
                    </div>
                    </div>
                    <div className="">
                    <Input ref={linkref} placeholder="link" />
                    <Input ref={titleref} placeholder="title" />
                    <div className="flex justify-center">
                    <Button onclick={adddata} type="primary" text="submit" size="md"></Button>
                    </div>
                    </div>
                </span>


            </div>
            
        </div>

        }
    </div>
}