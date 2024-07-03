import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/home/home.module.scss';
import heroBanner from '@/../public/heroBanner.jpg';
import mainBanner from '@/../public/mainBanner.jpg';

const Home: React.FC = () => {
  return (
    <main className={styles.home}>
      <section className={styles.home__mainBanner}>
        <Image src={mainBanner} alt="Main Banner" className={styles.img} />
      </section>
      <Image src={heroBanner} alt="Hero Banner" className={styles.home__heroBanner} />
      <div className={styles.home__container}>
        <h1 className={styles.home__title}>Bienvenue dans notre restaurant</h1>
        <p className={styles.home__text}>
          Dans notre restaurant, vous pouvez déguster des plats sains et équilibrés.
        </p>
        <div className={styles.home__buttons}>
          <Link href="/menu" passHref>
            <button className={styles.home__buttons__1}>Explorez nos menus</button>
          </Link>
          <Link href="/menu" passHref>
            <button className={styles.home__buttons__2}>
              Commandez en ligne / livraison
            </button>
          </Link>
          <Link href="/signup" passHref>
            <button className={styles.home__buttons__2}>
              Commandez en ligne / livraison
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;