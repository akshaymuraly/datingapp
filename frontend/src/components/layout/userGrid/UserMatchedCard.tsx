// import { GiButtonFinger } from "react-icons/gi"
import axios from "axios"
import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom"
import { useProfile } from "../../../context/ProfileContext";
axios.defaults.withCredentials=true

const UserMatchedCard = ({users}:any) => {
  const {setProfile}=useProfile()
  const [user,setUser] = useState(users)
  useEffect(() => {
    setUser(users);
    // console.log(users)
  }, [users]);
  async function sendRequest(){
      try{
        if(!user.request_status){
          const res = await axios.post(`/api/request/send/${user._id}`,{withCredentials:true})
          console.log(res.data)
        }
      }catch(err){
        console.log(err)
      }
    }
    function settingProfile(){
      setProfile(user)
    }
    async function sendUpdation(e:any){
      
      const param = e.currentTarget.name
      try{
        const res = await axios.put(`/api/request/${user.request_status._doc._id}/params?${param}=${param}`,
          {withCredentials:true}
        )
        console.log(res.data)
        setUser((prevUser: any) => ({
        ...prevUser,
        request_status: {
          ...prevUser.request_status,
          _doc: {
            ...prevUser.request_status._doc,
            status: res.data.request.status,
          },
        },
      }));
      }catch(err){
          console.log(err)
      }
    }
  return (
    <div className='h-full w-[350px] bg-[#5885AF] shadow-2xl flex-shrink-0 rounded-md'>
        <div className='h-[100px] bg-white flex flex-col justify-center items-center gap-2 p-2'>
            <img src={user.objectUrl} alt="img" className='h-[60px] w-[60px] rounded-full object-cover'/>
            <span>{user.Name}</span>
        </div>
        <div className='p-3 flex flex-col text-white'>
            {user.request_status?
            (user.request_status.sender?
            (user.request_status._doc.status==="Pending"?
            (<div className="flex gap-2 items-center">
              <span className="text-xl">Requested : </span>
              <button name="Accepted" onClick={(e:any)=>sendUpdation(e)} className="h-[24px] w-[24px] text-xl bg-[rgb(6,253,170,85%)] transition-all ease-in hover:-translate-y-1">
                <span><TiTick className="h-full w-full"/></span>
              </button>
              <button name="Rejected" onClick={(e:any)=>sendUpdation(e)} className="h-[24px] text-xl w-[24px] bg-[rgb(237,6,6)] transition-all ease-in hover:-translate-y-1"><IoClose className="h-full w-full"/></button>
              </div>):(user.request_status._doc.status==="Accepted"?
              <span className="text-xl">Friend</span>:<span>You have rejected</span>))

            :(
              user.request_status._doc.status==="Pending"?<span className="text-xl">Pending with friend</span>
            :(user.request_status._doc.status==="Accepted"?<span className="text-xl">Friend</span>:<span className="text-xl">Friend rejected</span>))):
            <button className='text-xl inline' onClick={()=>sendRequest()}>Send Request</button>
            }
            <span className='text-xl'><Link to={`chat/${user._id}`}>Chat</Link></span>
            <span className='text-xl'>
              {/* <Link to={`userdetails/${user._id}`}> */}
            <button onClick={()=>settingProfile()}>Profile</button>
            {/* </Link> */}
            </span>
        </div>
    </div>
  )
}

export default UserMatchedCard