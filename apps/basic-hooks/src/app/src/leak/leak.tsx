import {useEffect, useState} from "react";

import styles from "./leak.module.css";

export const Leak = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Current count:", count);
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <section className={styles.container}>
        <h1 className={styles.heading}>Count: {count}</h1>
      </section>
  );
};
