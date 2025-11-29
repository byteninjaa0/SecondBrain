import { Card } from './card'
import { Sidebar } from './Sidebar'
import { Button } from './Button'
import { CreateContentModal } from './createContentModal'
import { useContext, useState } from 'react'
import { PlusIcon } from './icon/PlusIcon'
import { ShareIcon } from './icon/ShareIcon'
import { UseContent } from './useContent'
export function Dashboard(){
    const [modalOpen, setModalOpen] = useState(false);
    const content=UseContent()

    return <div>
      <Sidebar />
      <div>
        <div className='p-2 ml-72 min-h-screen bg-gray-100'>
          <CreateContentModal onClose={() => { setModalOpen(false) }} open={modalOpen} />
          <div className='flex gap-1 justify-end'>
            <div>{localStorage.getItem("username")}</div>
            <Button onclick={() => setModalOpen(true)} type='primary' text='add content' size='sm' starticon={<PlusIcon />} />
            <Button type='secondary' text='share brain' size='sm' starticon={<ShareIcon />} />
          </div>
          <div className='flex gap-3 flex-wrap'>
              {content.map(({type,link,_id})=>
                <Card id={_id} title={type} link={link} type='youtube' />
              )}
          </div>
        </div>
      </div>
    </div>
}