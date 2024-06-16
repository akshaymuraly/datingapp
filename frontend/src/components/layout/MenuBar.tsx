import Navigation from "../common/user/Navigation"
import LeftMenuBarNav from "../common/user/LeftMenuBarNav"
// import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import LeftMenuBarMatchedBody from "../common/user/LeftMenuBarMatchedBody"
import LeftMenuBarMessagesBody from "../common/user/LeftMenuBarMessagesBody"
import Requests from "../common/user/Requests"

const MenuBar:React.FC = () => {

  const[selectedWindow,setSelectedWindow] = useState<string>("matched");
    useEffect(()=>console.log(selectedWindow),[selectedWindow])
  return (
    <div className="bg-[#686D76] h-screen w-[35vw]">
        <Navigation/>
        <LeftMenuBarNav setSelectedWindow={setSelectedWindow} selectedWindow={selectedWindow}/>
        {selectedWindow==="matched"?<LeftMenuBarMatchedBody/>:(
          selectedWindow==="requests"?<Requests/>:<LeftMenuBarMessagesBody/>)}
    </div>
  )
}

export default MenuBar