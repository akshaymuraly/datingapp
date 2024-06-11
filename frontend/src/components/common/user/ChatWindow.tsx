
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

        <div className="bg-[#2a3942] text-white h-[88px]">
            reply
        </div>
    </div>
    
  )
}

export default ChatWindow