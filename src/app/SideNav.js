'use client';

import React from 'react';
import Link from 'next/link';
import styles from "./page.module.css";

const SideNav = ({ isOpen, isMobile, onClose }) => {
  const handleLinkClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <nav className={`${styles.sideNav} ${isMobile && isOpen ? styles.open : ''}`}>
      <Link href="#about" className={styles.item} onClick={handleLinkClick}>About</Link>
      <Link href="#experience" className={styles.item} onClick={handleLinkClick}>Experience</Link>
      <Link href="#projects" className={styles.item} onClick={handleLinkClick}>Projects</Link>
      <Link href="#resume" className={styles.item} onClick={handleLinkClick}>Resume</Link>
      <Link href="blog" className={styles.item} onClick={handleLinkClick}>Blog</Link>
    </nav>
  );
};

export default SideNav;