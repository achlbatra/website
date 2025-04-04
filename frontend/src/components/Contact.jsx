import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
    <div className={styles.contactContainer}>
      <div className={styles.contactOptions}>
        <h2>Contact Us</h2>
        <div className={styles.option}>
          <FaPhone className={styles.icon} />
          <a href="tel:+91 9654535330" className={styles.button}>Call Now</a>
        </div>
        <div className={styles.option}>
          <FaWhatsapp className={styles.icon} />
          <a href="https://wa.me/9654535330" className={styles.button} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <div className={styles.option}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:gouravbatra2000@gmail.com" className={styles.button}>Email Us</a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
