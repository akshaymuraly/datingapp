import { GoDotFill } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";

const UserMessageCard = ({msg,sender}:any) => {
  return (
    <div className={`relative inline-block bg-[${sender?"#274472":"#5885AF"}] max-w-[350px] rounded-md p-2 ${sender?"self-start":"self-end"} break-words shadow-lg`}>
       {msg.message}
        <div className='flex items-center gap-1'>
            <span className='font-roboto text-[#fbfafa]'>Delivered</span>
            <span className='h-2 w-2'><GoDotFill className='h-full w-full'/></span>
            <span className='font-sans text-lime-300'>12:30</span>
            <span><IoCheckmarkSharp/></span>
        </div>
        <div className={`absolute right-[-9px] bottom-2 w-[5px] h-[5px] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] ${sender?"border-l-[#274472]":"border-l-[#5885AF]"}`}></div>
    </div>
  )
}

export default UserMessageCard