import React from "react";
import styles from "@/styles/footer/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__container}>
        <div className={styles.footer__section}>
          <h4 className={styles.footer__title}>À propos de nous</h4>
          <p className={styles.footer__text}>
            Nous sommes une entreprise dédiée à offrir les meilleurs produits et
            services.
          </p>
        </div>
        <div className={styles.footer__section}>
          <h4 className={styles.footer__title}>Contactez-nous</h4>
          <p className={styles.footer__text}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.footer__icon} />{" "}
            contact@foodly.com
          </p>
          <p className={styles.footer__text}>
            <FontAwesomeIcon icon={faPhone} className={styles.footer__icon} /> +33 1 23
            45 67 89
          </p>
        </div>
        <div className={styles.footer__section}>
          <h4 className={styles.footer__title}>Suivez-nous</h4>
          <div className={styles.footer__socials}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__socialLink}
            >
              <FontAwesomeIcon icon={faFacebook} className={styles.footer__socialIcon} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__socialLink}
            >
              <FontAwesomeIcon icon={faTwitter} className={styles.footer__socialIcon} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__socialLink}
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.footer__socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p>&copy; 2024 Entreprise. Tous droits réservés.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;