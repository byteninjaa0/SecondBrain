import { PlusIcon } from "./icon/PlusIcon";

interface ButtonInterface {
  type: "primary" | "secondary";
  text: string;
  size:"sm"|"md"|"lg";
  starticon:any;
  onclick?:()=>void;
}

type ButtonSizeMap = {
  sm: string;
  md: string;
};


const ButtonStyle = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-300 text-purple-600"
};
const Buttonsize:ButtonSizeMap={
  "sm":"py-1 px-2",
  "md":"py-2 px-3"
}
const defaultStyle="rounded-md flex items-center"
export function Button({type,text,size,starticon,onclick}:ButtonInterface) {
  return <button onClick={onclick} className={`${ButtonStyle[type]} ${defaultStyle} ${Buttonsize[size]} `}><div>{starticon}</div>{text}</button>;
};