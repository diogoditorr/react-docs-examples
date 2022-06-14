import React from "react";

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
        >
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div
            className="Toolbar"
            style={{ backgroundColor: "gray", padding: 16 }}
            onClick={() => {
                alert("You clicked on the toolbar!");
            }}
        >
            <Button onClick={() => alert("Playing!")}>Play Movie</Button>
            <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
        </div>
    );
}
