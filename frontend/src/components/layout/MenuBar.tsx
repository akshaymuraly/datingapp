import Navigation from "../common/user/Navigation"
import LeftMenuBarNav from "../common/user/LeftMenuBarNav"
import LeftMenuBarMatchedBody from "../common/user/LeftMenuBarMatchedBody"
import LeftMenuBarMessagesBody from "../common/user/LeftMenuBarMessagesBody"
import { useState } from "react"
const MenuBar:React.FC = () => {
  const[selectedWindow,setSelectedWindow] = useState<string>("matched");
  return (
    <div className="bg-red-400 h-screen w-[35vw]">
        <Navigation/>
        <LeftMenuBarNav setSelectedWindow={setSelectedWindow}/>
        {selectedWindow==="matched"?<LeftMenuBarMatchedBody/>:<LeftMenuBarMessagesBody/>}
    </div>
  )
}

export default MenuBar