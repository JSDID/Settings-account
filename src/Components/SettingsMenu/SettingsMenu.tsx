import React from 'react';
import styles from './SettingsMenu.module.css';
import type { SettingsMenuProps } from './../SettingsMenu/SettingsMenu.types';
import { SettingsMenuItem } from '../SettingsMenuItem/SettingsMenuItem';

export const SettingsMenu: React.FC<SettingsMenuProps> = ({ items }) => (
  <div className={styles['settings-menu']}>
    <ul className={styles['settings-menu__list']}>
      {items.map((item: import('./../SettingsMenu/SettingsMenu.types').SettingsMenuItemProps) => (
        <SettingsMenuItem key={item.label} {...item} />
      ))}
    </ul>
  </div>
); 