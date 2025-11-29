import { Brain } from "./icon/Brain";
import { Hashtag } from "./icon/Hashtag";
import { Linkicon } from "./icon/Linkicon";
import { Video } from "./icon/Video";

export function Sidebaritem(){
    return <div className="flex flex-col gap-6 mt-12 justify-between ml-7 text-gray-600">
        <div className="flex justify-start p-2 mr-3 gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"><div><Brain /></div>Tweets</div>
        <div className="flex justify-start p-2 mr-3 gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"><div><Video /></div>Videos</div>
        <div className="flex justify-start p-2 mr-3 gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"><div><Linkicon /></div>Links</div>
        <div className="flex justify-start p-2 mr-3 gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"><div><Hashtag /></div>Tags</div>
  
    </div>
}