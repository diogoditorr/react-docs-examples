import React from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { TasksProvider } from "./TasksContext";

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
