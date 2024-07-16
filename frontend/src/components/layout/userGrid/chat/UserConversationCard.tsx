import { Link } from 'react-router-dom'

const UserConversationCard = ({conversation}:any) => {
  return (
    <div className='h-[90px] bg-[#41729F] text-white border-[#a4bce3] border-b-2 border-solid p-2 flex items-center gap-2'>
      <Link to={conversation.Participants[0]._id} className='flex items-center gap-2 h-full w-full'>
        <img src="/avatar2.jpg" alt="img" className='h-[50px] w-[50px] object-cover rounded-full'/>
        <span className='text-white'>{conversation.Participants[0].Name}</span>
      </Link>
    </div>
  )
}

export default UserConversationCard