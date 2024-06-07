import { Link } from "react-router-dom"
import style from "./Header.module.css"
const Header = () => {
  return (
    <div className={style.container}>
        <nav>
            <ul>
                <li><Link to={"/"} className={style.link}>Home</Link></li>
                <li><Link to={"/login"} className={style.link}>Login</Link></li>
                <li><Link to={"/signup"} className={style.link}>Signup</Link></li>
                <li><Link to={"/about"} className={style.link}>About</Link></li>
                <li><Link to={"/contact"} className={style.link}>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header