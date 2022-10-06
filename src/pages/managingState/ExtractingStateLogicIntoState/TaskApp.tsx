import React from "react";
import { useState, useReducer } from "react";

function AddTask() {
    return <h1>AddTask</h1>;
}

function TaskList() {
    return <h1>TaskList</h1>;
}

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(text: string) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task: Task) {
        dispatch({
            type: "changed",
            task: task,
        });
    }

    function handleDeleteTask(taskId: number) {
        dispatch(
            // "action" object:
            {
                type: "deleted",
                id: taskId,
            }
        );
    }

    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

type Task = {
    id: number;
    text: string;
    done: boolean;
};

type Action =
    | { type: "added"; id: number; text: string }
    | { type: "changed"; task: Task }
    | { type: "deleted"; id: number };

function tasksReducer(tasks: Task[], action: Action) {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case "changed": {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];
