import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { useForm,SubmitHandler,useFieldArray } from "react-hook-form"
import { IoClose } from "react-icons/io5";

interface FormFields{
  Name:String
  Gender:String,
  Location:String,
  Password:String,
  Profile:FileList|String,
  Email:String,
  Address:String,
  Smocking:String,
  Hobbies:[String],
  Interests:[String],
}

const UserSignup = () => {
    const [message,setMessage] = useState<any>(null);
    const [profilePreview, setProfilePreview] = useState<any>(null);
    const myInputRef = useRef<any>()
    const interesetInputRef =useRef<any>()
    const [page,setPage] = useState(0)
    const {register,handleSubmit,control,setValue,trigger,setError,watch,formState:{errors,isSubmitting}}=useForm<FormFields>({
    defaultValues:{
      Name:"",
      Gender:"",
      Location:"",
      Password:"",
      Profile:"",
      Email:"",
      Address:"",
      Hobbies:[],
      Interests:[]
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "Hobbies"
  });
  const { append:interestUpdate, remove:interestRemove } = useFieldArray({
    control,
    name: "Interests"
  });
  const hobbies = watch("Hobbies")
  const interests = watch("Interests")
  function addHobbies(){
        append(myInputRef.current.value)
        myInputRef.current.value=""
  }
  function addInterests(){
    interestUpdate(interesetInputRef.current.value)
        interesetInputRef.current.value=""
  }
  async function onSubmitHandler(data:any){
    data.Hobbies = data.Hobbies.length === 1 && data.Hobbies[0] === "" ? [] : data.Hobbies;
    data.Interests = data.Interests.length === 1 && data.Interests[0] === "" ? [] : data.Interests;
    const formData = new FormData()
    for (const key in data) {
      const typedKey = key as keyof FormFields;
      if (typedKey === "Profile" && data.Profile instanceof FileList) {
        formData.append(typedKey, data.Profile[0]); // Append the first file if Profile is a FileList
      } else {
        formData.append(typedKey, data[typedKey] as string);
      }
    }
    try{
        const response = await axios.post("/api/user/signup",formData);
        setMessage(response.data.message)
      }catch(err:any){
        console.log(err)
          setError("root",{message:err.response.data.message||"Server error!"})
      }
  }
  const handleProfileChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            setProfilePreview(objectURL);
            setValue('Profile', e.target.files); // Update react-hook-form's state
        } else {
            setProfilePreview(null);
        }
    };
    const handleNextClick = async () => {
    const valid = await trigger(page === 0 ? ['Name', 'Address', 'Location', 'Gender'] : ['Profile', 'Smocking']);
    if (valid) {
      setPage(prev => (prev + 1 > 2 ? 0 : prev + 1));
    }
  };
  return (
    <div className='h-screen w-screen justify-center items-center flex flex-col gap-2 text-white bg-[#274472]'>
        <div>
            <h1 className='text-2xl font-sans'>Create Account!</h1>
        </div>
        <div className='w-[400px] h-[90%] bg-white flex flex-col rounded-tr-md'>
            <div className='flex flex-col bg-white items-center gap-3 p-5 rounded-tl-md rounded-tr-md'>
                <img src={profilePreview?profilePreview:"/avatar3.jpg"} alt="img" className='h-[80px] w-[80px] object-cover rounded-full'/>
                <div className='relative bg-slate-100 h-[10px] w-full rounded-lg'>
                    <div className={`absolute h-full bg-blue-400 transition-all ease-in rounded-lg`} style={{ width: `${(page +1)* 33.3}%` }}></div>
                </div>
            </div>

            <div className='h-full bg-[#C3E0E5] p-10'>
                <form onSubmit={handleSubmit(onSubmitHandler)} className='h-full w-full relative'>
                    <div className='h-[80%] flex flex-col space-y-4 text-[#274472]'>
                        {
                            page===0?
                        (<>
                        <div className='flex flex-col gap-2 relative'>
                            <label htmlFor="Name" className='text-[#274472]'>Name</label>
                            <input
                                {...register("Name",{
                    required:"Name is required"
                  })} type="text" className='w-full rounded-md text-[#274472] pl-4 h-[30px] text-xl'/>
                        {errors.Name&&<span className='text-red-500 absolute top-0 right-0'>{errors.Name.message}</span>}
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <label htmlFor="Address" className='text-[#274472]'>Address</label>
                            <input
                            {...register("Address",{
                    required:"Address is required"
                  })} type="text" className='w-full rounded-md text-[#274472] pl-4 h-[30px] text-xl'/>
                   {errors.Address&&<span className='text-red-500 absolute top-0 right-0'>{errors.Address.message}</span>}
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <label htmlFor="Location" className='text-[#274472]'>Location</label>
                            <input
                            {...register("Location",{
                    required:"Location is required"
                  })} type="text" className='w-full rounded-md text-[#274472] pl-4 h-[30px] text-xl'/>
                  {errors.Location&&<span className='text-red-500 absolute top-0 right-0'>{errors.Location.message}</span>}
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <label htmlFor="Gender" className='text-[#274472]'>Gender</label>
                            <div className='flex gap-2'>
                                <label htmlFor="">Male <input type="radio" {...register("Gender",{required:"Gender is required"})} value={"Male"}/></label>
                                <label htmlFor="">Female <input {...register("Gender")} value="Female" type="radio" /></label>
                            </div>
                            {errors.Gender&&<span className='text-red-500 absolute top-0 right-0'>{errors.Gender.message}</span>}
                        </div>
                        </>):page===1?
                        (<>
                        <div className='flex flex-col gap-2 relative'>
                            <label htmlFor="Profile">File</label>
                            <input type="file" className='w-full' onChange={handleProfileChange} />
                            <input type="hidden" {...register("Profile",
                    {
                      required: "Profile picture is required",
                      validate: {
                                  checkFileType: value =>
                                  value && value[0] && ['image/jpeg', 'image/png', 'image/gif'].includes((value[0] as File).type) || "Only image files are allowed",
                                  checkFileCount: value =>
                                  value && value.length === 1 || "Only one file can be selected"
                                }
                    })} className='w-full'/>
                      {errors.Profile&&<span className='text-red-500 absolute top-0 right-0'>{errors.Profile.message}</span>}
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                             <label htmlFor="Smocking" className='text-[#274472]'>Smoking habits</label>
                            <div className='flex gap-2'>
                                <label htmlFor="">Yes <input type="radio" value={"Yes"} {...register("Smocking",{required: "Smocking status is required"})} /></label>
                                <label htmlFor="">No <input {...register("Smocking")} type="radio" value={"No"} /></label>
                                <label htmlFor="">Occassionally <input {...register("Smocking")} type="radio" value={"Occassionally"} /></label>
                            </div>
                             {errors.Smocking&&<span className='text-red-500 absolute top-0 right-0'>{errors.Smocking.message}</span>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="Name">Hobbies</label>
                            <div>
                                <input ref={myInputRef} name='Hobbies' type="text" className='inline w-[80%] outline-none pl-2'/>
                                <button type='button' className='inline bg-white text-center w-[20%]' onClick={()=>addHobbies()}>Add</button>
                                <div className='h-[60px] p-1 bg-white flex flex-wrap overflow-y-auto gap-1 w-full'>
                                    {hobbies&&hobbies.map((hobbie:any,index:any)=>{
                                            return (<div key={index} className='bg-[#C3E0E5] px-3 py-2 relative'>
                                                {hobbie}
                                                <button type='button' className='absolute right-0 top-0 text-red-600' onClick={()=>remove(index)}><IoClose/></button>
                                                </div>)
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                        </>):
                        (<>
                        <div className='flex flex-col gap-2 relative'>
                           <label htmlFor="Interests">Interests</label>
                            <div>
                                <input ref={interesetInputRef} name='Interests' type="text" className='inline w-[80%] outline-none pl-2'/>
                                <button type='button' className='inline bg-white text-center w-[20%]' onClick={()=>addInterests()}>Add</button>
                                <div className='h-[60px] p-1 bg-white flex flex-wrap overflow-y-auto gap-1 w-full'>
                                    {interests&&interests.map((interest:any,index:any)=>{
                                            return (<div key={index} className='bg-[#C3E0E5] px-3 py-2 relative'>
                                                {interest}
                                                <button type='button' className='absolute right-0 top-0 text-red-600' onClick={()=>interestRemove(index)}><IoClose/></button>
                                                </div>)
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <label htmlFor="Email" className='text-[#274472]'>Email</label>
                            <input
                            {...register("Email",{
                    required:"Email is required",
                    pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                  })} type="text" className='w-full rounded-md text-[#274472] pl-4 h-[30px] text-xl'/>
                   {errors.Email&&<span className='text-red-500 absolute top-0 right-0'>{errors.Email.message}</span>}
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <label htmlFor="Password" className='text-[#274472]'>Password</label>
                            <input
                            {...register("Password",{
                    required: 'Password is required',
                    minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long',
                                },
                    maxLength: {
                            value: 20,
                            message: 'Password must not exceed 20 characters',
                                },
                    pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                            message: 'Password must contain at least one letter and one number',
                             },
                  })} type="password" className='w-full rounded-md text-[#274472] pl-4 h-[30px] text-xl'/>
                   {errors.Password&&<span className='text-red-500 absolute top-0 right-0'>{errors.Password.message}</span>}
                        </div>
                        </>)
                        }
                    </div>
                    <div className='h-[20%] flex justify-center items-center gap-2'>
                        {/* <button type='button' onClick={()=>setPage(prev=>prev+1>2?0:prev+1)}>next</button>
                        <button type='button' onClick={()=>setPage(prev=>prev-1<0?0:prev-1)}>prev</button> */}
                       {page<2? (<button
                        type='button'
                         onClick={()=>handleNextClick()}
                         className='bg-blue-700 rounded-lg p-2 font-jost w-[100px] hover:bg-blue-800 hover:-translate-y-1 transition-transform ease-in'>
                            Next
                        </button>)
                        :(<button type='submit' className='bg-blue-700 rounded-lg p-2 font-jost w-[100px] hover:bg-blue-800 hover:-translate-y-1 transition-transform ease-in' disabled={isSubmitting}>{isSubmitting?"Loading...":"Submit"}</button>)}
                        <button type='button' className='text-blue-400'
                        onClick={()=>setPage(prev=>prev-1<0?0:prev-1)}
                        >Prev</button>
                    </div>
                    {(errors.root||message)&&
                  <span className={`${message?"text-lime-700":"text-red-500"} absolute -bottom-2 left-20`}>{(errors.root&&errors.root.message)||message}</span>
                    }
                </form>           
            </div>
        </div>
    </div>
  )
}

export default UserSignup