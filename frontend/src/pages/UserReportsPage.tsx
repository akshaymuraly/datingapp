import React, { useEffect, useState } from 'react'
import UserRejectedReports from '../components/layout/userGrid/UserRejectedReports'
import axios from 'axios'
axios.defaults.withCredentials = true


const UserReportsPage = () => {
    const [tab,setTab] = useState<any>("Rejected")
    const [data,setData] = useState(null)
    useEffect(()=>{
        async function getData(){
            try{
            const res = await  axios.get("/api/reports/users",{
                withCredentials:true
            })
            const usersWithObjectUrls = res.data.users.map((user:any) => {
          if (user.file) {
            // Convert base64 string to binary data
            const binaryString = atob(user.file);
            const len = binaryString.length;
            const arrayBuffer = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
              arrayBuffer[i] = binaryString.charCodeAt(i);
            }
            
            // Create Blob and Object URL
            const blob = new Blob([arrayBuffer], { type: 'image/png' }); // Adjust MIME type as needed
            user.objectUrl = URL.createObjectURL(blob);
          }
          return user;
        });

        setData(usersWithObjectUrls);

        }catch(err){
            console.log(err)
        }
        }
        getData()
    },[])
  return (
    <div className='h-full w-full flex flex-row'>
        <nav className='bg-lime-400 w-[30%]'>
            <ul className='text-white'>
                <li><button onClick={()=>setTab("Rejected")}>Rejected</button></li>
                <li><button onClick={()=>setTab("Friends")}>Friends</button></li>
                <li><button onClick={()=>setTab("Requests")}>Requests</button></li>
            </ul>
        </nav>
        <div className='h-full w-full'>
            <UserRejectedReports data={data} tab={tab}/>
        </div>
    </div>
  )
}

export default UserReportsPage