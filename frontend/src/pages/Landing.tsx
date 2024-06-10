import Header from "../components/layout/Header"
import Styles from "./Landing.module.css"
import Footer from "../components/layout/Footer"

const Landing = () => {
  return (
    <div className={Styles.container}>
      <Header/>
     <div className="flex flex-row h-[800px] bg-[url('hero1.jpg')] bg-cover bg-center w-full]">
      

     </div>
     <Footer/>
    </div>
  )
}

export default Landing