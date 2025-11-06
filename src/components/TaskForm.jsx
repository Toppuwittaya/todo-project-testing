import { useForm } from "react-hook-form";
import { useMenuContext } from "../hooks/useMenu";
import { useTasksContext } from "../hooks/useTasks";
import { useAlert } from "../hooks/useAlert";
import { useEffect } from "react";
import LayoutTask from "./LayoutTask";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

export default function TaskForm({ edit, payload }) {
    const { createTask, editTask } = useTasksContext();
    const { back } = useMenuContext();
    const { showAlert } = useAlert();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty, isSubmitting },
    } = useForm();

    useEffect(() => {
        if (edit) {
            reset(payload);
        }
    }, [payload, edit, reset]);

    const onSubmit = async (data) => {
        try {
            await (edit ? editTask(data) : createTask(data));
            showAlert("success", "Task created successfully!");
        } catch {
            showAlert("error", "Something went wrong!");
        } finally {
            back();
        }
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <LayoutTask title={edit ? "Edit Task" : "Add Task"} backward={true}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    maxLength={100}
                    required
                    label="Title"
                    placeholder="Placeholder"
                    {...register("title", { required: "Title is required" })}
                    error={errors.title?.message}
                />

                <Textarea
                    required
                    maxLength={500}
                    label="Description"
                    placeholder="Type here"
                    {...register("description", { required: "Description is required" })}
                    error={errors.description?.message}
                />

                <Input
                    required
                    type="date"
                    label="Due"
                    min={today}
                    {...register("due_date", {
                        required: "Due date is required",
                    })}
                    error={errors.due?.message}
                />

                <Button type="submit" className="w-full mt-5 py-4" disabled={(edit && !isDirty) || isSubmitting}>
                    {edit ? "Edit Task" : "Add Task"}
                </Button>
            </form>
        </LayoutTask>
    );
}
