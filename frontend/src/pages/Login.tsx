import React, { useEffect, useState } from "react";
import axios from "axios";
import { userActions } from "../store"
import { useSelector, TypedUseSelectorHook,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true 


const useTypedSelector: TypedUseSelectorHook<any> = useSelector;
const Login = () => {
  const navigate = useNavigate()
  const dispacth = useDispatch()
  const isLoggedIn = useTypedSelector((state)=>state.user.isLoggedIn)
  const [payload,setPayload] = useState({
    Email:"",
    Password:""
  })
  const validatingCookie = async ()=>{
    try{
    const response = await axios.get("/api/auth/validator",{
      withCredentials:true
    })
    console.log(response.data)
    if(response.data.status){
        dispacth(userActions.userLogin())
        navigate("/userlanding")
      }
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    if(!isLoggedIn){
      validatingCookie()
    }
  },[])
  const onChangeHandler = (e:React.FormEvent<HTMLInputElement>)=>{
    const target = e.target as HTMLInputElement
    setPayload(prev=>({
      ...prev,
      [target.id]:target.value

    }))
  }
  const onSubmitHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      const response = await axios.post("/api/user/login",payload)
      console.log(response.data)
      if(response.data.status){
        dispacth(userActions.userLogin())
        navigate("/userlanding")
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="logo1.svg" alt="logo" />
          Dating App    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmitHandler}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="Email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="name@company.com" 
                  onChange={onChangeHandler}
                  required 
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  id="Password" 
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={onChangeHandler} 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup here</a>
              </p>
            </form>
             <a href="http://localhost:5000/api/auth/google" className="block bg-white shadow-md p-2 w-full mt-8">Log in with Google <img src="./googleicon.svg" alt="g" className="h-[30px] w-[30px] inline"/>
             </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login