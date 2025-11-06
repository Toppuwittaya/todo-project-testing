import React, { createContext, useState, useCallback } from "react";
import Alert from "../components/ui/Alert";

const AlertContext = createContext();

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState(null);

    const showAlert = useCallback((type, message, duration = 3000) => {
        setAlert({ type, message });
        if (duration) {
            setTimeout(() => setAlert(null), duration);
        }
    }, []);

    const hideAlert = useCallback(() => setAlert(null), []);

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            {alert && <Alert type={alert.type} message={alert.message} onClose={hideAlert} />}
        </AlertContext.Provider>
    );
}

export { AlertContext };
