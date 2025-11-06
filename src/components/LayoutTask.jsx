import { useMenuContext } from "../hooks/useMenu";
import { useTasksContext } from "../hooks/useTasks";
import Button from "./ui/Button";

export default function LayoutTask({ title, backward, children }) {
    const { tasks, taskLoading } = useTasksContext();
    const { back, add } = useMenuContext();

    const task_left = tasks?.filter((task) => !task.done).length;

    return (
        <div className="w-full min-h-screen flex justify-center items-center p-5 overflow-y-auto bg-primary-black/5">
            <div
                className="bg-primary-black p-6 
                        pt-8 w-full max-w-xl rounded-md
                        space-y-6 overflow-hidden shadow-2xl/20
                        min-h-[565px]
                        min-w-[325px]
                      "
            >
                {!backward ? (
                    <div className="font-bold text-2xl">{title || ""}</div>
                ) : (
                    <div className="flex justify-between">
                        <div className="font-bold text-2xl">{title || ""}</div>
                        <Button variant="outlined" theme="danger" onClick={back}>
                            Backward
                        </Button>
                    </div>
                )}
                <div className="flex justify-between items-center space-x-4">
                    {!backward && (
                        <>
                            <div>
                                <div className="text-md">My Tasks</div>
                                <div className="text-sm text-text-sub">
                                    {!taskLoading ? (
                                        task_left ? (
                                            `You have ${task_left} task left!`
                                        ) : (
                                            "You have no task!"
                                        )
                                    ) : (
                                        <div className=" text-text-sub animate-pulse ">loading... </div>
                                    )}
                                </div>
                            </div>
                            <Button onClick={add}>Add Task</Button>
                        </>
                    )}
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
