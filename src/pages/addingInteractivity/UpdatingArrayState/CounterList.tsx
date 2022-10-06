import React, { useState } from "react";

const initialCounters = [0, 0, 0];

export default function CounterList() {
    const [counters, setCounters] = useState(initialCounters);

    function handleIncrementClick(index: number) {
        const nextCounters = counters.map((c, i) => {
            if (index === i) {
                return c + 1;
            } else {
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <>
            <ul>
                {counters.map((counter, i) => (
                    <li key={i}>
                        {counter}
                        <button onClick={() => handleIncrementClick(i)}>
                            +1
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
