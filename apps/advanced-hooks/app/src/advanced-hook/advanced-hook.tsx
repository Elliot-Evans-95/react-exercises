import {useEffect, useState} from "react";

import styles from "./api-call.module.css";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

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
