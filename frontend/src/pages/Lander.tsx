import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Lander = () => {
    const[land,setLand] = useState<any>("")
    const navigate = useNavigate()
    function onSubmit(){
        switch(land){
            case "dating":
                navigate("/userlanding")
                break
            case "jobportal":
                break
        }
    }
  return (
    <div className='bg-[#274472] w-screen h-screen flex justify-center items-center'>
        <div className='bg-white h-[300px] w-[300px] flex flex-col space-y-12 rounded-r-lg p-5'>
            <div className='flex gap-3 justify-center items-center'>
                <label htmlFor="Dating">Dating app </label>
                <input name='landing' value="dating" type="radio" onChange={(e:any)=>setLand(e.currentTarget.value)}/>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <label htmlFor="Job">Job Portal </label>
                <input name='landing' value="jobportal" type="radio" />
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <label htmlFor="Matrimonial">Matrimonial </label>
                <input name='landing' value="matrimonial" type="radio" />
            </div>
            <button className='bg-[#C3E0E5] w-full' onClick={()=>onSubmit()}>Next</button>
        </div>
    </div>
  )
}

export default Lander