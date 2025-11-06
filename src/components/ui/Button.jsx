export default function Button({ disabled, children, onClick, theme = "primary", variant = "fill", className = "" }) {
    const baseClass = `
    min-w-[150px]
    min-h-[40px]
    px-4
    py-1
    font-medium rounded-md
    transition-all duration-200
    border
    inline-flex items-center justify-center
  `;

    const interactiveClass = disabled
        ? "cursor-not-allowed opacity-50"
        : "cursor-pointer active:scale-95 hover:enabled";

    const themeClass = {
        primary: {
            fill: disabled
                ? "bg-gray-300 text-gray-500 border-transparent"
                : "bg-success text-white border-transparent hover:bg-success/80 active:bg-success/90",
            outlined: disabled
                ? "bg-transparent text-gray-400 border-gray-300"
                : "bg-transparent text-success border-success hover:bg-success/10 active:bg-success/20",
        },
        danger: {
            fill: disabled
                ? "bg-gray-300 text-gray-500 border-transparent"
                : "bg-error text-white border-transparent hover:bg-red-700 active:bg-red-800",
            outlined: disabled
                ? "bg-transparent text-gray-400 border-gray-300"
                : "bg-transparent text-error border-error hover:bg-error/10 active:bg-error/20",
        },
    };

    const selectedClass = themeClass[theme]?.[variant] || themeClass.primary.fill;

    return (
        <button
            disabled={disabled}
            onClick={onClick || null}
            className={`${baseClass} ${interactiveClass} ${selectedClass} ${className}`}
        >
            {children}
        </button>
    );
}
