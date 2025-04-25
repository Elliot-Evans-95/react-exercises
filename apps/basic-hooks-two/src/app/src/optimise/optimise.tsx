import React, {useEffect, useState} from "react";
import styles from "./optimise.module.css";

type SortOrder = "asc" | "desc";

export const Optimise = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [numbers, setNumbers] = useState<number[]>([5, 2, 9, 1, 7, 3]);

  useEffect(() => {
    if(sortOrder === "asc") {
      const ascNumbers = numbers.sort((a, b) => (a - b));

      setNumbers(ascNumbers);
    } else {
      const descNumbers = numbers.sort((a, b) => (b - a));

      setNumbers(descNumbers);
    }
  }, [numbers, sortOrder]);

  return (
      <main className={styles.container}>
          <h1>Optimise</h1>
        <section className={styles.interactionContainer}>
          <h2>Interactions</h2>
          <button onClick={() => setSortOrder("asc")}>
            Toggle Sort Order
          </button>
          <button onClick={() => setSortOrder("desc")}>
            Toggle Sort Order
          </button>
        </section>
        <section className={styles.listContainer}>
            <ul>
                {numbers.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        </section>
      </main>
  );
};
