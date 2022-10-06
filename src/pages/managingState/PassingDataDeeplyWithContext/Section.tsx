import * as React from "react";
import { LevelContext, useLevelContext } from "./LevelContext";

type Props = {
    isFancy?: boolean;
    children: React.ReactNode;
};

export default function Section({ children, isFancy }: Props) {
    const level = useLevelContext();

    return (
        <section className={"section " + (isFancy ? "fancy" : "")}>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}
