import React, { useState, useRef, useEffect } from 'react';
import { SettingsMenu } from '../SettingsMenu/SettingsMenu';
import type { SettingsMenuItemProps } from '../SettingsMenu/SettingsMenu.types';
import styles from './UserMenu.module.css';

const menuItems: SettingsMenuItemProps[] = [
  { label: 'My Profile' },
  { label: 'General Settings' },
  { label: 'Change Location' },
  { label: 'Users' },
  { label: 'Contact support' },
  { label: 'Support history' },
  { label: 'Help' },
  { label: 'Logout' },
];

export const UserMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className={styles['user-menu']} ref={ref}>
      <button
        className={styles['user-menu__icon']}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open user menu"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#3F6AD8"/>
          <circle cx="20" cy="16" r="7" fill="#fff"/>
          <ellipse cx="20" cy="30" rx="11" ry="6" fill="#fff"/>
        </svg>
      </button>
      {open && <SettingsMenu items={menuItems} />}
    </div>
  );
} 