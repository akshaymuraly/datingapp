import { Link } from "react-router-dom"
// import { CgProfile } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";

const Navigation = () => {
  return (
    <nav>
        <ul className="flex font-mono flex-row bg-[#373A40] text-white h-[50px] p-4 justify-around align-middle">
            <li><Link to={"profile"} >
              <img src="/avatar2.jpg" alt="avatar2" className="h-[30px] w-[30px] rounded-full object-cover"/>
              {/* <span>Name S. Name</span> */}
            </Link></li>
            <li><Link to={"/matched"}><LuSearch className="h-[30px] w-[30px]"/></Link></li>
            <li><Link to={"/settings"}><IoMdSettings className="h-[30px] w-[30px]"/></Link></li>
        </ul>
    </nav>
  )
}

export default Navigation