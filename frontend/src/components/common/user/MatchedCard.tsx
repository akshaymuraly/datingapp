import MatchCardAvatar from "./MatchCardAvatar"
const MatchedCard = () => {
  return (
    <div className="flex flex-row bg-gradient-to-r from-[#f51248] to-[#d9d9d9] h-[100px] p-3 w-[450px] rounded-xl text-white flex-shrink-0 ring ring-gray-300 ring-opacity-50 ring-offset-2 ">
        <MatchCardAvatar/>
        <span className="text-lg text-center flex items-center justify-center">Avatar</span>
    </div>
  )
}

export default MatchedCard