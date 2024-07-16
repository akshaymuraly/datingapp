import React, { useEffect } from 'react'
import UserReportMatchedCard from '../../common/user/UserReportMatchedCard'

const UserRejectedReports = ({data,tab}:any) => {
    useEffect(()=>{
      console.log(data,tab)
    },[data,tab])
  return (
    <div className='text-white h-full w-full flex flex-col gap-3 overflow-y-scroll items-center pt-2 '>
        {
            data&&data.map((user:any)=>(
                // console.log(user.request_status&&user.request_status.sender&&user.request_status._doc.status==="Rejected")
                // {
                    (tab==="Rejected"&&user.request_status&&user.request_status.sender&&user.request_status._doc.status==="Rejected"&&
               (<UserReportMatchedCard user={user}/>))||

                (tab==="Friends"&&user&&user.request_status&&user.request_status._doc.status==="Accepted"&&
                (<UserReportMatchedCard user={user}/>))||

                (tab==="Requests"&&user&&user.request_status&&user.request_status.sender&&user.request_status._doc.status==="Pending"&&
                (<UserReportMatchedCard user={user}/>))

                // }
                // {user.request_status&&user.request_status.sender&&user.request_status._doc.status==="Rejected"&&
                // (<UserReportMatchedCard user={user}/>)
                // }
            ))
        }
        
    </div>
  )
}

export default UserRejectedReports