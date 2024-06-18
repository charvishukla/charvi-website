import React from 'react';
import styles from './SideNav.module.css';


const SideNav = (props) => {
return (
    <div className={styles.sideNav}>
    <a className={styles.item} href='#section'> About </a>
    <br/>
    <br/>
    <a className={styles.item} href='#section'> Projects </a>
    <br/>
    <br/>
    <a className={styles.item} href='#section'> Experience </a>
    <br/>
    <br/>
    <a className={styles.item} href='#section'> Resume </a>
    </div>  
 );
};
export default SideNav;