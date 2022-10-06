import React, { useEffect, useState } from "react";

function Playground() {
    const [text, setText] = useState("a");

    useEffect(() => {
        function onTimeout() {
            console.log("⏰" + text);
        }

        console.log('🔵 Schedule "' + text + '" log');
        const timeoutId = setTimeout(onTimeout, 3000);

        return () => {
            console.log('🟡 Cancel "' + text + '" log');
            clearTimeout(timeoutId);
        };
    }, [text]);

    return (
        <>
            <label htmlFor="">
                What to log:{" "}
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <h1>{text}</h1>
        </>
    );
}

export default function EffectTest() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Unmount' : 'Mount'} the component
            </button>
            {show && <hr />}
            {show && <Playground />}
        </>
    )
}