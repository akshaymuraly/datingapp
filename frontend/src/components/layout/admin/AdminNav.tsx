interface propsType {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
}
const AdminNav:React.FC<propsType> = ({setCurrentTab}) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg min-w-[200px]">
        <section className="border-b-2 border-solid border-gray-200 flex flex-col justify-center items-center p-5">
            <img src="/logo1.svg" alt="logo" className="h-[50px] w-[50px] rounded-full"/>
            <span className="font-roboto tracking-wide">Admin</span>
        </section>
        <section className="font-roboto">
            <ul className="p-4 flex flex-col gap-8">
                 <li className="shadow-md p-2 group relative">
                    <button className="h-full w-full">User Reports</button>
                    <ul className="absolute z-10 bg-white hidden group-hover:block top-0 -right-[160px] rounded-2xl shadow-md w-40 ">
                        <li><button className="w-full p-3 hover:bg-blue-300 hover:text-white transition-all ease-in" onClick={()=>setCurrentTab("userreports")}>User Reports</button></li>
                         <li><button className="w-full p-3 hover:bg-blue-300 hover:text-white transition-all ease-in" onClick={()=>setCurrentTab("complaintreports")}>Complaint Reports</button></li>
                    </ul>
                </li>
                <li className="shadow-md p-2">
                    <button className="h-full w-full hover:trans">Admin</button>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default AdminNav