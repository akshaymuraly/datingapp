import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { useProfile } from '../../../context/ProfileContext'
import { IoClose } from "react-icons/io5";
axios.defaults.withCredentials=true

const UserDetailedProfile = () => {
    const{profile,setProfile} = useProfile()
    const navigate = useLocation()
   useEffect(() => {
    console.log(navigate)
    if(navigate.pathname!=="/userlanding"){
        handleNavigationAway()
    }
  }, [navigate]);

  const handleNavigationAway = () => {
    console.log('Navigating away, resetting profile...');
    setProfile(null); // Reset profile here or perform any other actions
  };
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
        <div className='bg-white h-[90%] w-[70%] flex rounded-lg'>
            <div className='text-[#333232] font-josefin w-[50%] bg-[rgb(224,250,255)] p-5 flex flex-col gap-9 items-center'>
                <div className='flex gap-3 justify-center items-center'>
                    <img src={profile.objectUrl} alt="image" className='h-[100px] w-[100px] object-cover rounded-full' />
                   {profile.request_status&& <span className='text-xl text-gray-500'>
                        {
                        profile.request_status._doc.status==="Accepted"?"Friend":
                        (profile.request_status._doc.status==="Pending"?"Request pending":"Rejected")
                        }
                    </span>}
                </div>
                <span className='text-2xl'>{profile.Name}</span>
                <span className='text-2xl'>{profile.Location}</span>
                <span className='text-2xl'>{profile.Gender}</span>
            </div>
            <div className='w-[50%] relative'>
              <button className='absolute right-0 top-0
              h-[50px] w-[50px] hover:text-red-500' onClick={()=>setProfile(null)}><IoClose className='h-full w-full'/></button>
            </div>
        </div>
    </div>
  )
}

export default UserDetailedProfile




///////////////////