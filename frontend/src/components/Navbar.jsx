import logo from "../assets/logo.png"
import styles from "./Navbar.module.css"

function Navbar(){
  return (
    <>
      <div className={styles.Navbar}>
        <div>
          <img src={logo}></img>
        </div>
        <div>
        <ul className={styles.navlist}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar