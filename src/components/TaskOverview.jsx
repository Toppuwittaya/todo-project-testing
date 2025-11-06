import { useTasksContext } from "../hooks/useTasks";
import { useAlert } from "../hooks/useAlert";
import { useState } from "react";
import LayoutTask from "./LayoutTask";
import TaskSkeleton from "./ui/TaskSkeleton";
import TaskList from "./ui/TaskList";
import ConfirmDialog from "./ui/ConfirmDialog";

export default function TaskOverview() {
    const { tasks, taskLoading, deleteTask } = useTasksContext();
    const { showAlert } = useAlert();
    const [deleteAction, setDeleteAction] = useState({ open: false, id: null });

    const back = () => setDeleteAction({ open: false, id: null });
    const remove = (item) => setDeleteAction({ open: true, id: item.id });

    const taskLength = tasks?.length;

    const onDelete = async () => {
        try {
            await deleteTask(deleteAction.id);
            showAlert("success", "Task deleted successfully!");
        } catch {
            showAlert("error", "Something went wrong!");
        } finally {
            back();
        }
    };

    return (
        <LayoutTask title={"To-Do List"}>
            <div className={`overflow-y-auto overflow-x-hidden h-[300px] space-y-4 ${taskLength > 2 && "pr-2"}`}>
                {taskLoading ? (
                    <TaskSkeleton />
                ) : taskLength === 0 ? (
                    <div className="text-gray-500 italic flex justify-center items-center h-full">
                        No tasks available
                    </div>
                ) : (
                    tasks.map((item, index) => <TaskList item={item} index={index} key={index} remove={remove} />)
                )}
            </div>
            <ConfirmDialog open={deleteAction.open} onCancel={back} onConfirm={onDelete} />
        </LayoutTask>
    );
}
