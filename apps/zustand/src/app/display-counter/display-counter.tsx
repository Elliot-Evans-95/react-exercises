interface DisplayCounterProps {
    count: number;
    updateCounter: (count: number) => void;
}

export const DisplayCounter = ({ count, updateCounter }: DisplayCounterProps) => {
    return (
        <div>
            <h1>Counter</h1>
            <h2>Count {count}</h2>
            <button onClick={() => updateCounter(count + 1)}>Add to count</button>
        </div>
    );
}
