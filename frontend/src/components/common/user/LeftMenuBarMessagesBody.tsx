
const LeftMenuBarMessagesBody = () => {
  return (
    <div className=" bg-red-300 h-[637px] text-white p-4 flex flex-col gap-5">
        <div className="relative flex flex-row bg-white h-[100px] p-3 w-[450px] rounded-xl text-white flex-shrink-0 shadow-lg">
          <div className="bg-red-600 z-index-1 h-[30px] w-[30px] rounded-full text-white absolute top-[-11px] right-[-13px] text-center shadow-lg">3</div>
        <span className="text-lg text-black text-center flex items-center justify-center">Message</span>
      </div>

       <div className="relative flex flex-row bg-white h-[100px] p-3 w-[450px] rounded-xl text-white flex-shrink-0 shadow-lg">
          <div className="bg-red-600 z-index-1 h-[30px] w-[30px] rounded-full text-white absolute top-[-11px] right-[-13px] text-center shadow-lg">3</div>
        <span className="text-lg text-black text-center flex items-center justify-center">Message</span>
    </div>
    </div>
  )
}

export default LeftMenuBarMessagesBody