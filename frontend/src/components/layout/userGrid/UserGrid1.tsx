import UserMacthedBody from './UserMacthedBody'

const UserGrid1 = () => {
  return (
    <div className='h-[500px] w-full bg-[rgb(17,32,55)] flex-shrink-0 flex flex-col items-center justify-center gap-8'>
        <span className='text-center text-5xl text-[#C3E0E5]'>Matched Profiles</span>
        <span className='text-center text-2xl text-[#41729F]'>Matched by something!</span>
        <UserMacthedBody/>
    </div>
  )
}
//had to flex-shrink-0 as overflo-y-scroll wasnt working
export default UserGrid1