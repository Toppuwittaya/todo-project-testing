import { Pencil, Trash, Check } from "lucide-react";
import { formatDate } from "../../utils/utils";
import { useTasksContext } from "../../hooks/useTasks";
import { useMenuContext } from "../../hooks/useMenu";

export default function TaskList({ item, remove }) {
    const { toggleDone } = useTasksContext();
    const { edit } = useMenuContext();
    return (
        <div
            className={`p-4 flex items-start bg-[#202326] space-x-5 rounded-md border
                                border-[#303336] w-full`}
        >
            <div className="relative inline-flex items-center justify-center">
                <input
                    onChange={() => toggleDone(item.id)}
                    checked={item.done || false}
                    type="checkbox"
                    className="h-5 w-5 appearance-none rounded-sm border border-gray-500 bg-gray-800 
                    checked:bg-success checked:border-success-border transition duration-200 
                    cursor-pointer focus:ring-2 focus:ring-success-border"
                />
                <Check
                    className={`absolute w-3.5 h-3.5 text-white pointer-events-none transition-opacity 
                    duration-150 ${item.done ? "opacity-100" : "opacity-0"}`}
                />
            </div>
            <div className="w-[70%] overflow-hidden mt-[-5px]">
                <div className={`text-lg  truncate  ${item.done ? "line-through" : ""}`}>{item.title || ""}</div>
                <div className="line-clamp-2 text-sm text-text-sub whitespace-pre-line">{item.description || ""}</div>
                <div className="mt-4 text-error/70">Due : {(item.due_date && formatDate(item.due_date)) || "-"}</div>
            </div>
            <div className="flex space-x-2 ml-auto">
                <button
                    onClick={() => edit(item)}
                    className="p-1.5 hover:bg-white/10 rounded-full cursor-pointer 
                               transition duration-200 active:bg-white/5"
                >
                    <Pencil className="text-success" />
                </button>
                <button
                    onClick={() => remove(item)}
                    className="p-1.5 hover:bg-white/10 rounded-full cursor-pointer
                               transition duration-200 active:bg-white/5"
                >
                    <Trash className="text-error" />
                </button>
            </div>
        </div>
    );
}
