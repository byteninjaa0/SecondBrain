import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "./Config";

export function UseContent(){
    const [contents,setcontents]=useState([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}api/v1/content`,
           { headers:{
                "authorization":localStorage.getItem("token")
            }
        }
        ).then((response)=>{
            setcontents(response.data.content);
        }
        
    )
    ,[]})
    return contents;
}