import { IoMdSend } from "react-icons/io";
const ChatWindow = () => {
  return (
    <div className="text-black h-screen">
        <header className="h-[100px] bg-[#373A40] text-white p-[10px]">
            <img src="/logo1.svg" alt="avatar" className="h-[50px] w-[50px] rounded-full"/><span className="font-jost font-bold ">Name S. Name</span>
        </header>

        <section className="flex flex-col h-[550px] text-black py-2 bg-white overflow-scroll px-4 gap-3">
            <p className=" bg-black text-white self-end max-w-[470px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit harum tempore repudiandae deserunt dignissimos libero ducimus nam nisi laborum veritatis optio, ipsa qui facere. Modi officia optio natus illo? Repellendus, ipsa consequuntur?
            </p>
            <p className=" bg-black text-white self-start max-w-[470px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit harum tempore repudiandae deserunt dignissimos libero ducimus nam nisi laborum veritatis optio, ipsa qui facere. Modi officia optio natus illo? Repellendus, ipsa consequuntur?
            </p>
        </section>

        <div className="bg-[#2a3942] text-white h-[88px] flex flex-row justify-center items-center p-8 gap-2">
             <input
          type="text"
          name="contact"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
            <button className="h-[30px] w-[30px]"><IoMdSend className="w-full h-full hover:text-blue-500 transition-all ease-in"/></button>
        </div>
    </div>
    
  )
}

export default ChatWindow