export function getFinalState(baseState: any, queue: Array<number | ((arg0: any) => any)>) {
    let finalState = baseState;

    queue.forEach((state) => {
        if (typeof state === "function") {
            finalState = state(finalState);
            return;
        }

        finalState = state;
    });

    return finalState
}
