// import { ReactNode } from "react";
import { Outlet } from "react-router-dom"

//  interface RightWindowProps {
//   children: ReactNode; // Allow any valid JSX as children
// }
const RightWindow= () => {
  return (
    <div className="bg-[#EEEEEE] text-[white] w-[70vw] border-l-[2px] border-solid border-[#ffffff0d] rounded rounded-bl-lg">
      <Outlet/>
    </div>
  )
}

export default RightWindow