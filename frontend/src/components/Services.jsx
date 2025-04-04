import styles from "./Services.module.css"
import individual from "../assets/individual.jpg"
import family from "../assets/family.jpg"
import senior from "../assets/senior.jpg"

function Services(){
  return (
    <>
    <div className={styles.container}>
      <div className={styles.heading}><h3>Explore Our Tailored Health Insurance Solutions – Your Path to Protection Starts Here!</h3></div>
      <div className={styles.info}>
      <div className={styles.flashcard}>
        <h2>Health Insurance for Individuals</h2>
        <ul>
          <li>Comprehensive coverage tailored to your personal health needs.</li>
          <li>Includes hospitalization, pre/post-hospitalization, and cashless treatment options.</li>
          <li>Tax benefits under Section 80D of the Income Tax Act.</li>
          <li>Ideal for students, professionals, or anyone seeking individual protection.</li>
        </ul>
        <img src={individual}></img>
      </div>
      <div className={styles.flashcard}>
      <h2>Health Insurance for Family</h2>
        <ul>
          <li>One policy covering the entire family, including spouse, children, and parents.</li>
          <li>Cost-effective with a shared sum insured for all members.</li>
          <li>Covers maternity, newborn care, and family-oriented benefits</li>
          <li>Peace of mind with cashless claims across a wide hospital network.</li>
        </ul>
        <img src={family}></img>
      </div>
      <div className={styles.flashcard}>
      <h2>Health Insurance for Senior Citizens</h2>
        <ul>
          <li>Specially designed for individuals aged 60 and above.</li>
          <li>Includes coverage for critical illnesses, pre-existing conditions, and regular check-ups.</li>
          <li>Ensures financial security with minimal out-of-pocket expenses.</li>
          <li>A supportive policy offering dignity and care in the golden years.</li>
        </ul>
        <img src={senior}></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default Services