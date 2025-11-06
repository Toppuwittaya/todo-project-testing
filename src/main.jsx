import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";
import { AlertProvider } from "./context/AlertContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MenuProvider>
            <TaskProvider>
                <AlertProvider>
                    <App />
                </AlertProvider>
            </TaskProvider>
        </MenuProvider>
    </StrictMode>
);
