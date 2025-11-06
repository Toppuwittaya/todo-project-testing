import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

export default function Alert({ type = "success", message, onClose, duration = 3000 }) {
    useEffect(() => {
        if (!duration) return;
        const timer = setTimeout(() => onClose?.(), duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const isSuccess = type === "success";
    const bgColor = isSuccess ? "bg-green-100" : "bg-red-100";
    const textColor = isSuccess ? "text-success" : "text-error";
    const Icon = isSuccess ? CheckCircle : XCircle;

    return (
        <div
            className={`fixed top-6 right-6 z-50 flex items-center space-x-3 p-4 rounded-md shadow-md ${bgColor} ${textColor}`}
        >
            <Icon className="w-6 h-6 shrink-0" />
            <span className="font-medium">{message}</span>
            <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
