import { useImmer, useImmerReducer } from "use-immer";

function AddTask() {
    return <h1>AddTask</h1>;
}

function TaskList() {
    return <h1>TaskList</h1>;
}

type Action = 
    | { type: "added", id: number, text: string }
    | { type: "changed", task: Task }
    | { type: "deleted", id: number };

function tasksReducer(draft: Task[], action: Action) {
    switch (action.type) {
        case "added": {
            draft.push({
                id: action.id,
                text: action.text,
                done: false,
            });
            break;
        }
        case "changed": {
            const index = draft.findIndex((t) => {
                t.id === action.task.id;
            });
            draft[index] = action.task;
            break;
        }
        case "deleted": {
            return draft.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

export default function TaskAppWithImmer() {
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({
            type: "added",
            id: nextId++,
            text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: "deleted",
            id: taskId,
        });
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

let nextId = 3;
const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];
