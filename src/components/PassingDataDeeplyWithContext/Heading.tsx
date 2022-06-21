import React from "react";
import { useLevelContext } from "./LevelContext";

type Props = {
    children: React.ReactNode;
};

export default function Heading({ children }: Props) {
    const level = useLevelContext();

    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error("Unknown level: " + level);
    }
}
