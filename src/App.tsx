
import './Reset.css'
import { Header } from './Components/Header/Header';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles['app']}>
      <Header />
    </div>
  );
}

