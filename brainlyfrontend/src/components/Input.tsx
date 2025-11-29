export function Input({onChange,placeholder,ref}:{onChange:()=>void;ref:any;placeholder:string}){
    return <div><input ref={ref} placeholder={placeholder} type={"text"} className="px-3 py-3 border rounded m-2" onChange={onChange}></input>
</div>
}