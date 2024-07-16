import { useEffect, useState } from 'react'
import UserConversationCard from './UserConversationCard'
import axios from 'axios'
axios.defaults.withCredentials=true
const UserConversationBody = () => {
  const[data,setData] = useState<any>(null)
  useEffect(()=>{
    async function getConversations(){
      try{
      const res = await axios.get("/api/message/conversation",{
        withCredentials:true
      })
     setData(res.data.conversations)
    }catch(err){
      console.log(err)
    }
    }
    getConversations()
  },[])
  return (
    <div className='h-full w-[400px] bg-[#274472] '>
        <div className='text-2xl text-white bg-[#5885AF] h-[10%] flex justify-center items-center'>
            Chat
        </div>
        <div className='h-[90%] w-full overflow-y-auto'>
          { data ?
           (data?.map((conversation:any)=>{
            console.log("con",conversation)
            return <UserConversationCard conversation={conversation} key={conversation._id}/>}))
            :
            (<div className='h-full w-full flex justify-center items-center text-[#274472] text-3xl bg-white font-josefin'>No conversations YET!</div>)}
           
        </div>
    </div>
  )
}

export default UserConversationBody