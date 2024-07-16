import React from 'react'

const UserReportMatchedCard = ({user}:any) => {
  return (
    <div className='h-[100px] w-[200px] bg-blue-400 flex gap-5 p-3 rounded-xl'>
        <img src={user.objectUrl} alt="img" className='h-[50px] w-[50px] rounded-full object-cover' />
        <span>{user.Name}</span>
    </div>
  )
}

export default UserReportMatchedCard