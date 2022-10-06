import { createContext, useContext, useReducer } from "react";
import * as React from "react";

export type TypeTask = {
    id: number;
    text: string;
    done: boolean;
};

type Action =
    | { type: "added"; id: number; text: string }
    | { type: "changed"; task: TypeTask }
    | { type: "deleted"; id: number };

type TasksProviderProps = {
    children: React.ReactNode;
};

const TasksContext = createContext<TypeTask[]>([]);
const TasksDispatchContext = createContext<React.Dispatch<Action>>(() => null);

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

function tasksReducer(tasks: TypeTask[], action: Action) {
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
            return tasks.map((task) => {
                if (task.id === action.task.id) {
                    return action.task;
                } else {
                    return task;
                }
            });
        }
        case "deleted": {
            return tasks.filter((task) => task.id !== action.id);
        }
        default: {
            throw Error("Unknown action type: " + action.type);
        }
    }
}

const initialTasks = [
    { id: 0, text: "Philosopher’s Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false },
];
