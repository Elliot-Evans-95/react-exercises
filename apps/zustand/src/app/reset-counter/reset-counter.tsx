interface ResetCounterProps {
    updateCounter: (count: number) => void;
}

export const ResetCounter = ({ updateCounter }: ResetCounterProps) => {
    return (
        <div>
            <button onClick={() => updateCounter(0)}>Reset</button>
        </div>
    );
}
