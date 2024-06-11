import MatchCardAvatar from "./MatchCardAvatar"
import { BsFillPersonFill } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
const MatchedCard = () => {
  return (
    <div className="flex flex-row bg-white h-[100px] p-3 w-[450px] rounded-xl text-white flex-shrink-0">
        <MatchCardAvatar/>
        <div className="text-slate-500 flex flex-row gap-3 justify-center align-middle font-roboto font-bold tracking-wide">
          <button className="bg-blue-300 h-[30px] text-white rounded-sm p-1">Follow</button>
          <Link to={"user/:userid"}><BsFillPersonFill className="h-[30px] w-[30px]"/></Link>
          <Link to={"user/chat/:chatid"}><FiMessageCircle className="h-[30px] w-[30px]"/></Link>
        </div>
    </div>
  )
}

export default MatchedCard