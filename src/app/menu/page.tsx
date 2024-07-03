"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroBanner from "@/../public/heroBanner.jpg";
import styles from '@/styles/menu/menu.module.scss';

type MenuCategory = {
  title: string;
  description: string;
  price: number;
};

type MenuData = {
  entrees: MenuCategory[];
  plats: MenuCategory[];
  desserts: MenuCategory[];
};

const Menu: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuData>({
    entrees: [],
    plats: [],
    desserts: [],
  });

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/api/fetchMenu");
        if (response.ok) {
          const data = await response.json();
          setMenuData(data.menu);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
  
    fetchMenuData();
  }, []);
  

  return (
    <main className={styles.menu}>
      <div className={styles.menu__logo}>
        <Image src={heroBanner} alt="Hero Banner" layout="responsive" />
      </div>
      <section className={styles.menu__container}>
        <h1 className={styles.menu__header}>Foodly Menu</h1>
        <div className={styles.submenus}>
          {Object.keys(menuData).map((category) => (
            <section className={styles.submenu} key={category}>
              <h3 className={styles.submenu__title}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              {menuData[category as keyof MenuData].map((item, index) => (
                <div
                  className={`${styles.submenuItem} ${styles.appears}`}
                  id={`case-${index + 1}`}
                  key={index}
                >
                  <div className={styles.submenuItem__container}>
                    <h4 className={styles.submenuItem__title}>{item.title}</h4>
                    <p className={styles.submenuItem__description}>
                      {item.description}
                    </p>
                  </div>
                  <div className={styles.submenuItem__price}>{item.price}€</div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;