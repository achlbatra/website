import styles from "./Introduction.module.css"

function Introduction(){
  return (
    <>
    <section id="intro">
    <div className={styles.box}>
    <div className={styles.leftintro}>
      
    </div>
    <div className={styles.rightintro}>
      <h2>What is Health Insurance?</h2>
      <p>Health insurance is your financial safety net during medical emergencies. It reduces the burden of rising healthcare costs and ensures you get the best care without worry.</p>
      
      <h2>Why Do You Need Health Insurance?</h2>
      <ul>
      <li>Protects against high medical bills for treatments, diagnostics, and hospitalizations.</li>
      <li>Offers peace of mind and financial security during unexpected health issues.</li>
      <li>Covers preventive care like health check-ups and vaccinations.</li>
      </ul>
      
      <h2>Key Benefits</h2>
      <ol>
      <li>Cashless Treatments: Hassle-free care at partnered hospitals.</li>
      <li>Tax Savings: Deduct premiums under Section 80D (India).</li>
      <li>Critical Illness Coverage: Support for severe conditions.</li>
      <li>Family & Maternity Benefits: Comprehensive coverage for loved ones.</li>
      </ol>
      
    </div>
    </div>
    </section>
    </>
  )
}

export default Introduction