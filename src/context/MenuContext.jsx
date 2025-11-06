import { createContext, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [activeMenu, setActiveMenu] = useState({ menu: "overview", payload: null });

    const changeMenu = (action) => setActiveMenu(action);

    const back = () => changeMenu({ menu: "overview", payload: null });
    const add = () => changeMenu({ menu: "add", payload: null });
    const edit = (payload) => changeMenu({ menu: "edit", payload: payload });

    return <MenuContext.Provider value={{ activeMenu, back, add, edit }}>{children}</MenuContext.Provider>;
}

export { MenuContext };
