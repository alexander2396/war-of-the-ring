import { useState } from "react";

export const useShowUnitsMenu = () => {
    const [showUnitsMenu, setShowUnitsMenu] = useState(false);

    return {
        showUnitsMenu,
        setShowUnitsMenu
    }

}