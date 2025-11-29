import { Brain } from "./icon/Brain";
import { Sidebaritem } from "./Sidebaritem";

export function Sidebar(){
    return <div className="h-screen bg-white left-0 top-0 fixed w-72 border-r">
            
        <h1 className="px-3 py-4 text-xl font-medium">Second Brain</h1>
        <Sidebaritem />
    </div>
}