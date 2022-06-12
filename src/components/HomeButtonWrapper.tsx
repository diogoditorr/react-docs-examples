import React from "react";
import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

export default function HomeButtonWrapper({ children }: Props) {
    return (
        <>
            <button style={{ marginBottom: 24}}>
                <Link to="/">Home</Link>
            </button>
            {children}
        </>
    );
}
