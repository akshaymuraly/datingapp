import axios from "axios"
import { useForm,SubmitHandler } from "react-hook-form"

interface FormFields{
  Name:String
  Gender:String,
  Location:String,
  Password:String,
  Profile:FileList|String,
  Email:String
}
export default function Signup() {
  const {register,handleSubmit,setError,formState:{errors,isSubmitting}}=useForm<FormFields>({
    defaultValues:{
      Name:"",
      Gender:"",
      Location:"",
      Password:"",
      Profile:"",
      Email:""
    }
  })
  const onSubmit:SubmitHandler<FormFields>=async (data)=>{
    const formData = new FormData()
    for (const key in data) {
      const typedKey = key as keyof FormFields;
      if (typedKey === "Profile" && data.Profile instanceof FileList) {
        formData.append(typedKey, data.Profile[0]); // Append the first file if Profile is a FileList
      } else {
        formData.append(typedKey, data[typedKey] as string);
      }
      try{
        const response = await axios.post("/api/user/signup",formData);
        console.log(response.data)
      }catch(err){
          setError("root",{message:"Some error"})
      }
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-full w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="/logo1.svg" alt="logo" />
          Dating App    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="max-h-[350px] overflow-y-auto space-y-4 md:space-y-6">
              <div>
                <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input 
                  type="text"
                  id="Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  {...register("Name",{
                    required:"Name is required"
                  })}
                  required 
                />
              </div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                  type="email" 
                  {...register("Email")}
                  id="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="name@company.com" 
                  required 
                />
              </div>
                <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input 
                  type="text" 
                  {...register("Location")} 
                  id="Location"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input 
                  type="password" 
                  {...register("Password")} 
                  id="password" 
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input 
                  type="password" 
                  name="confirm-password" 
                  id="confirm-password" 
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                <label htmlFor="gender" className="mb-2 text-sm font-medium text-gray-900 dark:text-white mr-1">
                  Male
                <input 
                  type="radio" 
                  {...register("Gender")}
                  value="male"
                  id="male"
                  className="bg-gray-50 border ml-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 inline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                /></label>
                <label htmlFor="gender" className="ml-6 mb-2 text-sm font-medium text-gray-900 dark:text-white mr-1">
                  Female
                <input 
                  type="radio" 
                  {...register("Gender")}
                  value="femalemale"
                  id="male"
                  className="bg-gray-50 border ml-1 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 inline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                /></label>
              </div>
             <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile</label>
                <input 
                  type="file" 
                  {...register("Profile",
                    {
                      required: "Profile picture is required",
                      validate: {
                                  checkFileType: value =>
                                  value && value[0] && ['image/jpeg', 'image/png', 'image/gif'].includes((value[0] as File).type) || "Only image files are allowed",
                                  checkFileCount: value =>
                                  value && value.length === 1 || "Only one file can be selected"
                                }
                    })} 
                  id="confirm-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   
                />{errors.Profile&&<span className="text-red-500">{errors.Profile.message}</span>}
              </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="terms" 
                    aria-describedby="terms" 
                    type="checkbox" 
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                    required 
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                    I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={isSubmitting}
              >
                {isSubmitting?"Loading...":"Create an account"}
              </button>
              {errors.root&&<span className="text-red-500">{errors.root.message}</span>}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}