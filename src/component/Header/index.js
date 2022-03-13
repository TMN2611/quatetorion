import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Ui/Button';

console.log(styles);

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.headerContainer}>
            <img src='/img/logo.png' alt='' className='header-logo' />
            <nav className={styles.navList}>
              <li className={styles.navItem}>
                <Link className={styles.navLink} to='/'>
                  Trang chủ
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.navLink} to='/personal-customer'>
                  Dành cho cá nhân
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.navLink} to='/company-customer'>
                  Dành cho doanh nghiệp
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.navLink} to='/news'>
                  Tin tức
                </Link>
              </li>
            </nav>
            <Button
              title='Hotline:  0971 998 755'
              hotline
              href='tel:0971998755'
            />
          </div>
        </div>
      </header>
    </>
  );
}
