import { Link } from 'react-router-dom'


const UserNav = () => {
  return (
    <div className='h-[10vh] text-[#54939e] bg-white flex align-middle shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] font-bold font-roboto'>
        <ul className='p-2 flex gap-10 h-full w-full justify-center items-center'>
            <li className='inline-flex items-center'><Link to={"profile"} className=''>Profile</Link></li>
            <li className='inline-flex items-center'><Link to={"/userlanding"} className=''>Home</Link></li>
            <li className='inline-flex items-center'><Link to={"chat"}>Chat</Link></li>
            <li className='inline-flex items-center'><Link to={"reports"}>Reports</Link></li>
            <li className='inline-flex items-center'><button>Logout</button></li>
        </ul>
        
    </div>
  )
}

export default UserNav