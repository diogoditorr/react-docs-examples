import React, { forwardRef, useRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        // Only expose focus and nothing else
        focus() {
            realInputRef.current.focus();
        },
    }));
    return <input {...props} ref={realInputRef} />;
});

export default function Form() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
}
