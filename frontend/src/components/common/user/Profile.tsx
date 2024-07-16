import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true
const UserProfile = () => {
  const [data,setData]:any=useState(null)
  useEffect(()=>{
    async function getData(){
      try{
      const res = await axios.get("/api/user/profile",{
        withCredentials:true
      })
      const userData = res.data.user
       const binaryString = atob(userData.Profile);
            const len = binaryString.length;
            const arrayBuffer = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
              arrayBuffer[i] = binaryString.charCodeAt(i);
            }
            
            // Create Blob and Object URL
            const blob = new Blob([arrayBuffer], { type: 'image/png' }); // Adjust MIME type as needed
            userData.Profile = URL.createObjectURL(blob);
            setData(userData)
    }catch(err){
      console.log(err)
    }
    }
    getData()
  }
    ,[])
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-[90%] w-[90%] sm:w-[400px]">
     {data&& (
      <>
      <div className="flex justify-center mb-4">
        <img
          src={data.Profile}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
        value={data.Name}
          type="text"
          name="name"
          className="text-black w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contact</label>
        <input
          type="text"
          name="contact"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Occupation</label>
        <input
          type="text"
          name="occupation"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      </>
      )}
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Update
      </button>
    </div>
  );
};

export default UserProfile;
