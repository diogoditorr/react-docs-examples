import { createContext, useContext } from "react";

export const LevelContext = createContext(1);

export function useLevelContext() {
    return useContext(LevelContext);
}
