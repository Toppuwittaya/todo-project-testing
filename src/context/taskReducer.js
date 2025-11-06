export const defaultData = [
    {
        id: 1,
        title: "Task 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        due_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        done: true,
    },
    {
        id: 2,
        title: "Task 2",
        description:
            "Quisquam alias sequi eveniet. Cumque vitae doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        done: false,
    },
];

export function taskReducer(state, action) {
    switch (action.type) {
        case "CREATE": {
            const newId = state.length > 0 ? Math.max(...state.map((t) => t.id)) + 1 : 1;
            return [...state, { id: newId, ...action.payload }];
        }
        case "EDIT":
            return state.map((task) => (task.id === action.payload.id ? { ...task, ...action.payload } : task));
        case "DELETE":
            return state.filter((task) => task.id !== action.payload);
        case "SET":
            return action.payload;
        case "TOGGLE_DONE":
            return state.map((task) => (task.id === action.payload ? { ...task, done: !task.done } : task));
        default:
            return state;
    }
}
