// Uncomment this line to use CSS modules
import styles from './app.module.css';

import {useState} from "react";
import {ResetCounter} from "./reset-counter/reset-counter";
import {DisplayCounter} from "./display-counter/display-counter";

export function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className={styles.container}>
            <ResetCounter updateCounter={setCounter}/>
            <DisplayCounter count={counter} updateCounter={setCounter} />
        </div>
    );
}

export default App;
