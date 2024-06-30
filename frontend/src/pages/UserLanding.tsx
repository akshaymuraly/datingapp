import MenuBar from "../components/layout/MenuBar"
import RightWindow from "../components/layout/RightWindow"
import Footer from "../components/layout/Footer"
import { useSocket } from "../context/SocketContext"
import { useEffect } from "react"
import axios from "axios"
axios.defaults.withCredentials=true

// import { Socket } from "socket.io-client"

const UserLanding = () => {
  const{socket}:any = useSocket()
  useEffect(()=>{
    async function getconversations(){
      const res = await axios.get("/api/message/conversation",{withCredentials:true})
      return res.data
    }
    console.log(getconversations())
    socket.on("newMessage",(message:any)=>{
      console.log(message)
    })
  },[])
  return (
    <section className="p-3 bg-[#373a40d0]">
    <section className="flex flex-row">
        <MenuBar/>
        <RightWindow/>
    </section>
    <Footer/>
    </section>
  )
}

export default UserLanding