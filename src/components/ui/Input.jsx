export default function Input({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    error,
    required,
    className = "",
    ...props
}) {
    return (
        <div className={`flex flex-col space-y-1 ${className}`}>
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-gray-200">
                    {label}
                    {required && <span className="text-error ml-1">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-3 py-2 border rounded-lg outline-none text-white 
                    bg-black/20  border-gray-600
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${error ? "border-error" : ""}
                `}
                {...props}
            />
            {error && <p className="text-sm text-error">{error}</p>}
        </div>
    );
}
