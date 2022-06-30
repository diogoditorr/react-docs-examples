export function createConnection() {
    return {
        connect() {
            console.log("Connected");
        },
        disconnect() {
            console.log("Disconnected");
        },
    };
}
