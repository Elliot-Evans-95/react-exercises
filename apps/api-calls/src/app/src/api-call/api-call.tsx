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

export const ApiCall = () => {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      if (!response.ok) throw new Error("Failed to fetch user");
      setData(await response.json())
    };

    fetchUser();
  }, []);

  if(data === null) {
    return (
      <section className={styles.container}>
        <h1 className={styles.heading}>Loading...</h1>
      </section>
    );
  }

  return (
      <section className={styles.container}>
        <h1 className={styles.heading}>Hello {data.name}</h1>

        <ul>
          {data && Object.entries(data).map(([key, value]) => {
            if (key === "id" || key === "name") {
              return null
            }

            if (typeof value === "object") {
              return null
            }

            return (
              <li key={key}>
                {key}: {value}
              </li>
            );
          })}
        </ul>
      </section>
  );
};
