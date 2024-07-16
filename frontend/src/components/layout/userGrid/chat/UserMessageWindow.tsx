import { useEffect, useRef, useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";
import UserMessageCard from './UserMessageCard';
import { useParams } from 'react-router-dom';
import { useSocket } from '../../../../context/SocketContext';
import axios from 'axios';
axios.defaults.withCredentials=true

const UserMessageWindow = () => {
  const myrf:any = useRef(null)
  const messageEndRef:any = useRef(null);
   const [input,setInput]:any = useState({
        message:""
    })
    const {userId}=useParams()
    const [message,setMessage]:any = useState([])
    const {socket} = useSocket()
    async function sendMessage(){
        try{
            myrf.current.value = ""
        const res = await axios.post(`/api/message/send/${userId}`,input,{
            withCredentials:true
        })
        if(res.data?.newMessage){
          if(message){
              setMessage((prev:any)=>[...prev,res.data.newMessage])
          }else{
              setMessage([res.data.newMessage])
          }
        }
    }catch(err){
        console.log(err)
    }
    }
    useEffect(() => {
      console.log(message)
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message]);
    useEffect(()=>{
      function handleNewMessage(msg:any){
        if(msg.senderId===userId){
          setMessage((prev:any)=>
                ([...prev,msg])
            )
        }
      }
        if(socket){
            socket?.on("newMessage",handleNewMessage)
        }
        
        async function getMessages(){
            try{
            const res = await axios.get(`/api/message/${userId}`)
            setMessage(res.data.messages)
            }catch(err){
                console.log(err)
            }
        }
        getMessages()

        return () => {
      if (socket) {
        socket.off("newMessage", handleNewMessage);
      }
    };
        
    },[userId])

  return (
    <div className='h-full w-full bg-[#41729F] text-white border-[#374e74] border-l-2'>
        <div className='h-[10%] bg-[#274472] shadow-lg'>Heading</div>
        <div className='h-[82%] px-5 pt-2 bg-[#C3E0E5] flex flex-col gap-5 overflow-y-auto'>
          {message&&message.map((msg:any)=>{
            const sender = msg.senderId===userId
                   return (<UserMessageCard key={msg._id} msg={msg} sender={sender}/>)
          })}
          <div ref={messageEndRef}></div>
        </div>

        <div className='h-[8%] bg-[#274472] p-2 flex gap-2 justify-center items-center'>
          <input ref={myrf} name='message' type="text"className='inline w-[80%] text-[#1f4046] pl-3 py-2' onChange={(e)=>setInput({[e.target.name]:e.target.value})}/>
          <button className='inline hover:text-[#C3E0E5]'><BsFillSendFill className='h-full w-full' onClick={()=>sendMessage()}/></button>
        </div>
    </div>
  )
}

export default UserMessageWindow