import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
axios.defaults.withCredentials=true


const LeftMenuBarMessagesBody = () => {
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
    
    <div className=" bg-red-300 h-[637px] text-white p-4 flex flex-col gap-5">
        
      { data&& data?.map((conversation:any)=>{
      return (<div key={conversation._id} className="relative flex flex-row bg-white h-[100px] p-3 w-[450px] rounded-xl text-white flex-shrink-0 shadow-lg">
          <div className="bg-red-600 z-index-1 h-[30px] w-[30px] rounded-full text-white absolute top-[-11px] right-[-13px] text-center shadow-lg">3</div>
        <span className="text-lg text-black text-center flex items-center justify-center">
          <Link to={`user/chat/${conversation.Participants[0]._id}`}>{conversation.Participants[0].Name}</Link></span>
      </div>)
    })
  }
    </div>
  )
}

export default LeftMenuBarMessagesBody