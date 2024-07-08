import React from 'react';
import styles from './SideNav.module.css';
import Link from 'next/link';

const SideNav = () => {
  return (
    <nav className={styles.sideNav}>
      <Link href="#about" className={styles.item}>About</Link>
      <Link href="#experience" className={styles.item}>Experience</Link>
      <Link href="#projects" className={styles.item}>Projects</Link>
      <Link href="#resume" className={styles.item}>Resume</Link>
    </nav>
  );
};

export default SideNav;