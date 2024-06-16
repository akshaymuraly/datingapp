import MatchCardAvatar from "./MatchCardAvatar"
import { BsFillPersonFill } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
const Requests = () => {
  return (
    <div className="flex flex-col h-[637px] text-white overflow-y-scroll bg-red-300 pl-[10px] py-[15px] gap-6">
      <div className="flex flex-row bg-white h-[100px] p-3 w-[450px] rounded-xl text-white flex-shrink-0 shadow-lg">
        <MatchCardAvatar />
        <div className="flex flex-col gap-5 ml-4">
          <span className="text-black">Name S. Name</span>
          <div className="text-slate-500 flex flex-row gap-3 justify-center align-middle font-roboto font-bold tracking-wide">
            <button className="bg-blue-300 hover:bg-blue-500 h-[30px] text-white rounded-sm p-1 hover:-translate-y-1 transition-all ease-in">Accept</button>
            <button className="bg-red-300 hover:bg-red-500 h-[30px] text-white rounded-sm p-1 hover:-translate-y-1 transition-all ease-in">Reject</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Requests