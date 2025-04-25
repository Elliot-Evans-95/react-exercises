import {useState} from "react";

import styles from "./large-component.module.css";

export const LargeComponent = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);

    return (
        <main className={styles.mainContainer}>
            <h2 className={styles.heading}>Checkout</h2>

            <section className={styles.productContainer}>
                <h2 className={styles.productHeading}>Shirt</h2>
                <p className={styles.productPrice}>Price: £20</p>
                <button onClick={() => setTotalQuantity(totalQuantity+1)}>Add Quantity</button>
            </section>

            <section className={styles.productContainer}>
                <h2 className={styles.productHeading}>Shoes</h2>
                <p className={styles.productPrice}>Price: £10</p>
                <button onClick={() => setTotalQuantity(totalQuantity+1)}>Add Quantity</button>
            </section>

            <footer>Total quantity: {totalQuantity}</footer>
        </main>
    );
};
