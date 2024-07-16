import { Outlet } from 'react-router-dom'
import UserDetailedProfile from './UserDetailedProfile'
import { useProfile } from '../../../context/ProfileContext'



const UserBody = () => {
  const{profile} =useProfile()
  return (
    <div className='h-[90vh] w-screen bg-[rgb(17,32,55)]'>
      {profile?<UserDetailedProfile/>:<Outlet/>}
        {/* <UserDetailedProfile/> */}
    </div>
  )
}

export default UserBody