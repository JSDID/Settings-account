export interface SettingsMenuItemProps {
  label: string;
  onClick?: () => void;
}

export interface SettingsMenuProps {
  items: SettingsMenuItemProps[];
} 