import { Link } from "react-router-dom"
interface LeftMenuBarNavProps {
  setSelectedWindow: React.Dispatch<React.SetStateAction<string>>;
}

const LeftMenuBarNav:React.FC<LeftMenuBarNavProps> = ({setSelectedWindow}) => {
  return (
    <nav className="bg-[rgb(21,47,58)] text-white h-[50px]">
        <ul className="flex flex-row justify-evenly w-full h-full">
            <li>
                <Link id="matched" to={"matched"} className="relative flex w-full h-full items-center justify-center " onClick={(e:React.MouseEvent<HTMLAnchorElement>)=>setSelectedWindow(e.currentTarget.id)}>Matched
                <div className="absolute bottom-1 bg-red-200 w-full h-[3px]"></div>
                </Link>
            </li>
            <li>
                <Link id="messages" to={"messages"} className="relative flex w-full h-full items-center justify-center" onClick={(e:React.MouseEvent<HTMLAnchorElement>)=>setSelectedWindow(e.currentTarget.id)}>Messages
                <div className="absolute bottom-1 bg-red-300 w-full h-[3px]"></div>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default LeftMenuBarNav