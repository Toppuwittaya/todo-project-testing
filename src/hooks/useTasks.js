import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function useTasksContext() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasksContext must be used within a TaskProvider");
    }
    return context;
}
