import { useEffect, useState } from 'react'
import UserMatchedCard from './UserMatchedCard'
import axios from 'axios';
axios.defaults.withCredentials = true


const UserMacthedBody = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      try{
      const res = await axios.get("/api/user/matched?page=1&&count=5&&gender=female",{
        withCredentials:true
      })
      // console.log(res.data.users)
      // setData(res.data.users)
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
      // console.log(res)
    }catch(err){
      console.log(err)
    }
    }
    fetchData()

     return () => {
      data.forEach((user:any) => {
        if (user.objectUrl) {
          URL.revokeObjectURL(user.objectUrl);
        }
      });
    };
  },[])
  useEffect(() => {
    return () => {
      data.forEach((user:any) => {
        if (user.objectUrl) {
          URL.revokeObjectURL(user.objectUrl);
        }
      });
    };
  }, [data]);
  return (
    <div className='h-[250px] flex w-[90vw] bg-[rgb(17,32,55)] overflow-x-scroll pl-3 gap-5'>
      {data&&data.map((users:any)=>{
        // console.log(user)
        return <UserMatchedCard key={users._id} users={users}/>
      })}
    </div>
  )
}

export default UserMacthedBody