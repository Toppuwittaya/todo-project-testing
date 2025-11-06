import TaskOverview from "../components/TaskOverview";
import TaskForm from "../components/TaskForm";
import { useMenuContext } from "../hooks/useMenu";

export default function ToDoPage() {
    const { activeMenu } = useMenuContext();

    return (
        <>
            {activeMenu.menu === "overview" && <TaskOverview />}
            {activeMenu.menu === "add" && <TaskForm />}
            {activeMenu.menu === "edit" && <TaskForm edit={true} payload={activeMenu.payload} />}
        </>
    );
}
