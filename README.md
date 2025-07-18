# UserMenu Component

## Описание

`UserMenu` — это выпадающее меню пользователя, которое отображает список пунктов меню (например, "Мой профиль", "Настройки", "Выйти" и т.д.). Для отображения пунктов используется компонент `SettingsMenu`, а каждый пункт реализован через `SettingsMenuItem`.


## Использование

```tsx
import { UserMenu } from './Components/UserMenu/UserMenu';

function App() {
  return (
    <div>
      <UserMenu />
    </div>
  );
}
```

---

## Пропсы

### UserMenu

- Не принимает пропсы.

### SettingsMenu

- `items: SettingsMenuItemProps[]` — массив объектов с описанием пунктов меню.

### SettingsMenuItemProps

```ts
interface SettingsMenuItemProps {
  label: string;         // Текст пункта меню
  onClick?: () => void;  // (опционально) обработчик клика
}
```

---

## Массив пунктов меню

```ts
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
```

---

## Стилизация

Все компоненты используют CSS-модули и именование классов по методологии BEM.
---

## Особенности

- Меню автоматически закрывается при клике вне его области.
- Иконка пользователя реализована через SVG.

---

## Пример кастомизации

Чтобы добавить обработчик на пункт меню:

```ts
const menuItems: SettingsMenuItemProps[] = [
  { label: 'Logout', onClick: () => { /* логика */ } },
  // остальные пункты...
];
```
