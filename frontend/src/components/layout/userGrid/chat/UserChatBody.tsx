import UserConversationBody from './UserConversationBody'
import { Outlet } from 'react-router-dom'


const UserChatBody = () => {
  return (
    <div className='h-full w-full flex p-2'>
      <UserConversationBody/>
      <Outlet/>
    </div>
  )
}

export default UserChatBody