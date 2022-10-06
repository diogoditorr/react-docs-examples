import React, { useState, useEffect } from "react";
import { createConnection } from "./chat";

export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, []);

    return <h1>Welcome to the chat!</h1>;
}
