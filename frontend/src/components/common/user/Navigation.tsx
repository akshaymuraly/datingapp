import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";

const Navigation = () => {
  return (
    <nav>
        <ul className="flex font-mono flex-row bg-gradient-to-r from-[#bc1632] to-[#c12626] text-white h-[50px] p-2 justify-around align-middle">
            <li><Link to={"/profile"} ><CgProfile className="h-[30px] w-[30px]"/></Link></li>
            <li><Link to={"/matched"}><LuSearch className="h-[30px] w-[30px]"/></Link></li>
            <li><Link to={"/settings"}><IoMdSettings className="h-[30px] w-[30px]"/></Link></li>
        </ul>
    </nav>
  )
}

export default Navigation