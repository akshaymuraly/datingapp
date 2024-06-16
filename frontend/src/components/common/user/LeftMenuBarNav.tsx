
interface LeftMenuBarNavProps {
  setSelectedWindow: React.Dispatch<React.SetStateAction<string>>
  selectedWindow:string
}

const LeftMenuBarNav:React.FC<LeftMenuBarNavProps> = ({setSelectedWindow,selectedWindow}) => {
  return (
    <nav className="bg-[#373A40] text-white h-[50px]">
        <ul className="flex flex-row justify-evenly w-full h-full">
            <li>
                <a id="matched" className="relative flex w-full h-full items-center justify-center cursor-pointer" onClick={(e:React.MouseEvent<HTMLAnchorElement>)=>setSelectedWindow(e.currentTarget.id)}>Matched
                <div className={`absolute ${selectedWindow==="matched"?"inline":"hidden"} bottom-1 bg-red-200 w-full h-[3px]`}></div>
                </a>
            </li>
            <li>
                <a id="messages" className="relative flex w-full h-full items-center justify-center cursor-pointer" onClick={(e:React.MouseEvent<HTMLAnchorElement>)=>setSelectedWindow(e.currentTarget.id)}>Messages
                <div className={`absolute ${selectedWindow==="messages"?"inline":"hidden"} bottom-1 bg-red-300 w-full h-[3px]`}></div>
                </a>
            </li>
            <li>
                <a id="requests" className="relative flex w-full h-full items-center justify-center cursor-pointer" onClick={(e:React.MouseEvent<HTMLAnchorElement>)=>setSelectedWindow(e.currentTarget.id)}>Requests
                <div className={`absolute ${selectedWindow==="requests"?"inline":"hidden"} bottom-1 bg-red-300 w-full h-[3px]`}></div>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default LeftMenuBarNav