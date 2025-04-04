import styles from "./HeroComponent.module.css"
import '../App.css';


function HeroComponent(){
  return (
    <>
    <div className={styles.container}>
      <div className={styles.imagebox1}></div>
      <div className={styles.intro}>
        <h1>Securing Your Health,</h1> <h2><i>One Policy at a Time – <br></br>Your Trusted Insurance Advisor Is Here to Help!</i></h2>
        <button className={styles.button1}>Learn More</button>
      </div>
      <div className={styles.imagebox2}></div>
    </div>
    </>
  )
}

export default HeroComponent