import React, { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

export default function FormFocusWithChildComponent() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    );
}
