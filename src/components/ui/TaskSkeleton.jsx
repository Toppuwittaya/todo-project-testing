export default function TaskSkeleton() {
    return (
        <>
            {[1, 2].map((i) => (
                <div
                    key={i}
                    className="p-4 flex items-start bg-[#202326] space-x-5 rounded-md border border-[#303336] 
                    w-full animate-pulse "
                >
                    <div className="h-6 w-6 bg-gray-700 rounded-sm " />
                    <div className="w-[70%] space-y-2">
                        <div className="h-6 bg-gray-700 rounded w-2/4" />
                        <div className="h-4 bg-gray-700 rounded w-full" />
                        <div className="h-6 bg-gray-700 rounded w-1/3 mt-9" />
                    </div>
                    <div className="flex space-x-3 ml-auto mr-1 mt-1">
                        <div className="h-8 w-8 bg-gray-700 rounded-full" />
                        <div className="h-8 w-8 bg-gray-700 rounded-full" />
                    </div>
                </div>
            ))}
        </>
    );
}
