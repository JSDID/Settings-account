import React from 'react';
import styles from './SettingsMenuItem.module.css';
import type { SettingsMenuItemProps } from '../SettingsMenu/SettingsMenu.types';

export const SettingsMenuItem: React.FC<SettingsMenuItemProps> = ({ label, onClick }) => (
  <li className={styles['settings-menu-item']} onClick={onClick}>
    {label}
  </li>
); 