'use client';

import React from 'react';
import Link from 'next/link';
import styles from "./page.module.css";

const SideNav = ({ isOpen, isMobile }) => {
  return (
    <nav className={`${styles.sideNav} ${isMobile && isOpen ? styles.open : ''}`}>
      <Link href="#about" className={styles.item}>About</Link>
      <Link href="#experience" className={styles.item}>Experience</Link>
      <Link href="#projects" className={styles.item}>Projects</Link>
      <Link href="#resume" className={styles.item}>Resume</Link>
    </nav>
  );
};

export default SideNav;