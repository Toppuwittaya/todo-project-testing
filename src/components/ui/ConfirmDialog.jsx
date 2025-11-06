import Button from "./Button";

export default function ConfirmDialog({ open, title, message, onConfirm, onCancel }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="relative bg-primary-black rounded-xl shadow-lg w-full max-w-sm p-6 z-10">
                <h2 className="text-lg font-semibold  mb-2 text-center">{title || "Are you sure?"}</h2>
                <p className="text-gray-300 mb-6 text-center">{message || "Do you want delete item."}</p>

                <div className="flex justify-center space-x-3">
                    <Button onClick={onCancel} variant="outlined">
                        No
                    </Button>
                    <Button onClick={onConfirm} theme="danger">
                        {" "}
                        Yes
                    </Button>
                </div>
            </div>
        </div>
    );
}
