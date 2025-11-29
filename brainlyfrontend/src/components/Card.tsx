import axios from 'axios';
import { Delete } from './icon/Delete';
import { ShareIcon } from './icon/ShareIcon'
import YoutubeEmbed from './youtube';
import { BACKEND_URL } from './Config';
interface CardProps{
    title:String;
    link:String;
    type:"youtube"|"twitter"
    id:String;
}
export function Card({title,link,type,id}:CardProps) {
    function deletecontent(id){
        axios.delete(`${BACKEND_URL}api/v1/content`,{
            headers:{
                "authorization":localStorage.getItem("token")
            },
            data:{
                _id:id
            } 
        })
    }
    return <div>
        <div className="p-4 bg-white rounded-md shadow-md
         border-grey-100 max-w-72 border">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className='pr-2 text-gray-600'>
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className='flex'>
                    <div className='pr-2 text-gray-600'>
                        <ShareIcon />
                    </div>
                    <div className='text-gray-600'>
                        <Delete />
                    </div>
                </div>
            </div>
            <div className='pt-4'>
                <YoutubeEmbed embedId={link}></YoutubeEmbed>

            </div> 
          </div>


    </div>
}