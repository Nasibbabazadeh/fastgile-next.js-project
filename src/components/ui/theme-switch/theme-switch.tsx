'use client';

import styles from './theme-switch.module.css';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id="theme-toggle"
        className={styles.checkbox}
        checked={dark}
        onChange={() => setDark(prev => !prev)}
      />
      <label htmlFor="theme-toggle" className={`${styles.switch} ${dark ? styles.dark : styles.light}`}>
        <div className={styles.icon}></div>
      </label>
    </div>
  );
}
