import {useEffect, useState} from "react";

import styles from "./api-call.module.css";

export const AdvancedHook = () => {
  const [names, setNames] = useState<string[]>([]);
  const [nameToAdd, setNameToAdd] = useState<string>('');

  function addName() {
    setInterval(() => setNames(prevNames => [...prevNames, nameToAdd]), 3000)
  }

  return (
      <main className={styles.container}>
        <h1 className={styles.heading}>All names</h1>

        <section>
          <h1 className={styles.heading}>Add names</h1>
          <label htmlFor="add-name">Name:</label>
          <input type="text" name="add-name" onChange={(event) => setNameToAdd(event.target.value)}/>
          <button onClick={addName}>Submit</button>
        </section>

        <section>
          <h2>Current names</h2>
          <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
          </ul>
        </section>
      </main>
  );
};
