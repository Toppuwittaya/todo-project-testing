import { createContext, useReducer, useEffect, useState } from "react";
import { delay } from "../utils/utils";
import { defaultData, taskReducer } from "./taskReducer";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [loading, setLoading] = useState(true);

    const final = async () => {
        await delay(500);
        setLoading(false);
    };

    useEffect(() => {
        const stored = localStorage.getItem("tasks");
        if (stored) {
            dispatch({ type: "SET", payload: JSON.parse(stored) });
        } else {
            dispatch({ type: "SET", payload: defaultData });
            localStorage.setItem("tasks", JSON.stringify(defaultData));
        }
           final();
    }, []);

    useEffect(() => {
        if (loading) return;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        final();
    }, [tasks]);

    const toggleDone = (id) => dispatch({ type: "TOGGLE_DONE", payload: id });
    const createTask = (task) => dispatch({ type: "CREATE", payload: task });
    const editTask = (task) => dispatch({ type: "EDIT", payload: task });
    const deleteTask = (id) => dispatch({ type: "DELETE", payload: id });

    return (
        <TaskContext.Provider value={{ tasks, taskLoading: loading, createTask, editTask, toggleDone, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext };
