import MatchCardAvatar from "./MatchCardAvatar"
import { BsFillPersonFill } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
const MatchedCard = () => {
  return (
    <div className="flex flex-row bg-white h-[100px] p-3 w-[450px] rounded-xl text-white flex-shrink-0 shadow-lg">
        <MatchCardAvatar/>
        <div className="flex flex-col gap-5 ml-4">
          <span className="text-black">Name S. Name</span>
          <div className="text-slate-500 flex flex-row gap-3 justify-center align-middle font-roboto font-bold tracking-wide">
          <button className="bg-blue-300 hover:bg-blue-500 h-[30px] text-white rounded-sm p-1">Follow</button>
          <Link to={"user/:userid"}><BsFillPersonFill className="h-[30px] w-[30px] text-green-500 hover:text-green-600"/></Link>
          <Link to={"user/chat/:chatid"}><FiMessageCircle className="h-[30px] w-[30px] text-red-500 hover:text-red-600"/></Link>
          </div>
        </div>
    </div>
  )
}

export default MatchedCard