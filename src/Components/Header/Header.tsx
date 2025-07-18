import React from 'react';
import styles from './Header.module.css';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header: React.FC = () => (
  <header className={styles['header']}>
    <div className={styles['header__logo']}>
      <span className={styles['header__logo-icon']}>⚙️</span>
      <span className={styles['header__logo-text']}>Settings account</span>
    </div>
    <UserMenu />
  </header>
); 