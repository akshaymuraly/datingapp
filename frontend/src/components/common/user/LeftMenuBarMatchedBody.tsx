import MatchedCard from "./MatchedCard"
const LeftMenuBarMatchedBody = () => {
  return (
    <div className="flex flex-col h-[637px] text-white overflow-y-scroll bg-red-300 pl-[10px] py-[15px] gap-6">
      {Array.from({length:6}).map((_,index)=>{
        return(<MatchedCard key={index}/>)
      })}
    </div>
  )
}

export default LeftMenuBarMatchedBody