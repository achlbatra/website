// Navbar.jsx
import logo from "../assets/logo.png"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className={styles.navlist}>
          <li><a href="#home">Home</a></li>
          <li><a href="#intro">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
