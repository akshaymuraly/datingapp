import MatchedCard from "./MatchedCard"
const LeftMenuBarMatchedBody = () => {
  return (
    <div className="flex flex-col h-[637px] text-white overflow-y-scroll bg-[rgb(21,47,58)] pl-[10px] py-[15px] gap-6">
      {Array.from({length:6}).map((_,index)=>{
        return(<MatchedCard key={index}/>)
      })}
    </div>
  )
}

export default LeftMenuBarMatchedBody