import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useSocket } from "../../../context/SocketContext";
axios.defaults.withCredentials=true
const ChatWindow = () => {
    const [input,setInput]:any = useState({
        message:""
    })
    const {chatid}=useParams()
    const [message,setMessage]:any = useState([])
    const {socket} = useSocket()
    async function sendMessage(){
        try{
            // console.log(input)
        const res = await axios.post(`/api/message/send/${chatid}`,input,{
            withCredentials:true
        })
    }catch(err){
        console.log(err)
    }
    }
    useEffect(()=>{
        if(socket){
            //  console.log(socket)
            socket?.on("newMessage",(msg)=>{
            console.log(msg)
    })
        }
        
        async function getMessages(){
            try{
            const res = await axios.get(`/api/message/${chatid}`)
            setMessage(res.data.messages)
            console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        getMessages()
        
    },[])
  return (
    <div className="text-black h-screen">
        <header className="h-[100px] bg-[#373A40] text-white p-[10px]">
            <img src="/logo1.svg" alt="avatar" className="h-[50px] w-[50px] rounded-full"/><span className="font-jost font-bold ">Name S. Name</span>
        </header>

        <section className="flex flex-col h-[550px] text-black py-2 bg-white overflow-scroll px-4 gap-3">
            {message&&message.map((msg:any)=>{
                console.log(message)
                return(<p className=" bg-black text-white self-end max-w-[470px]">
                {msg.message}
            </p>)
            })}
           
        </section>

        <div className="bg-[#2a3942] text-white h-[88px] flex flex-row justify-center items-center p-8 gap-2">
             <input
          type="text"
          name="message"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          onChange={(e)=> setInput({[e.target.name]:e.target.value})}
        
        />
            <button className="h-[30px] w-[30px]"><IoMdSend className="w-full h-full hover:text-blue-500 transition-all ease-in" onClick={sendMessage}/></button>
        </div>
    </div>
    
  )
}

export default ChatWindow