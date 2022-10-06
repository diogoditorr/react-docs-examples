import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function TodoList() {
    const listRef = useRef<HTMLUListElement>(null);
    const [text, setText] = useState("second");
    const [todos, setTodos] = useState(initialTodos);

    function handleAdd() {
        const newTodo = { id: nextId++, text: text };
        setText("");
        flushSync(() => {
            setTodos([...todos, newTodo]);
        });
        const lastTodo = listRef.current?.lastChild as HTMLLIElement;

        lastTodo.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
    }

    return (
        <>
            <button onClick={handleAdd}>Add</button>
            <input
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
            <ul ref={listRef}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}

let nextId = 0;
const initialTodos: {
    id: number;
    text: string;
}[] = [];
for (let i = 0; i < 20; i++) {
    initialTodos.push({
        id: nextId++,
        text: "Todo #" + (i + 1),
    });
}
