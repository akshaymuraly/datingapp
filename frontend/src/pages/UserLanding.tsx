import MenuBar from "../components/layout/MenuBar"
import RightWindow from "../components/layout/RightWindow"
import Footer from "../components/layout/Footer"
const UserLanding = () => {
  return (
    <section className="p-3 bg-[#373a40d0]">
    <section className="flex flex-row">
        <MenuBar/>
        <RightWindow/>
    </section>
    <Footer/>
    </section>
  )
}

export default UserLanding