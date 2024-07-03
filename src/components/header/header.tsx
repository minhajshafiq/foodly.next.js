import React from 'react';
import Link from 'next/link';
import styles from '@/styles/header/header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>Foodly</h2>
      <nav className={styles.header__navbar}>
        <ul className={styles.header__navbar__list}>
          <li className={styles.header__navbar__list__item}>
            <Link href="/" passHref>
              <button>Acceuil</button>
            </Link>
          </li>
          <li className={styles.header__navbar__list__item}>
            <Link href="/menu" passHref>
              <button>Nos menus</button>
            </Link>
          </li>
          <React.Fragment>
            <li className={styles.header__navbar__list__item}>
              <Link href="/login" passHref>
                <button>Connexion</button>
              </Link>
            </li>
            <li className={styles.header__navbar__list__item}>
              <Link href="/signup" passHref>
                <button>S'inscrire</button>
              </Link>
            </li>
          </React.Fragment>
        </ul>
      </nav>
    </header>
  );
};

export default Header;