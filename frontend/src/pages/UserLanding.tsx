import { useSocket } from "../context/SocketContext"
import { useEffect } from "react"
import axios from "axios"
import UserNav from "../components/layout/userGrid/UserNav"
import UserBody from "../components/layout/userGrid/UserBody"
import { ProfileProvider } from "../context/ProfileContext"


axios.defaults.withCredentials=true


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
    <section className="bg-[#fefeff] h-screen w-screen">
        <UserNav/>
        <ProfileProvider>
          <UserBody/>
        </ProfileProvider>
    </section>
  )
}

export default UserLanding