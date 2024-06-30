import { useEffect, useState } from "react"
import axios,{AxiosResponse} from "axios";
axios.defaults.withCredentials=true

interface UserId{
    userId:string
}

const useAuthHook = () => {
    const [data,setData] = useState<null|string>(null);
    useEffect(()=>{
        async function fetchData(){
                const response:AxiosResponse<UserId> = await axios.get<UserId>("/api/message/userid",{
                    withCredentials:true
                })
                setData(response?.data?.userId)
                console.log("This is the data :  ",response)
        }
        fetchData()
    },[])
    
  return data
}

export default useAuthHook