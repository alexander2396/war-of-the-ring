import { useState } from "react";
import { Region } from "../models/region";

export const useSelectedRegion = () => {
    const [selectedRegion, setSelectedRegion] = useState(null as Region);

    return {
        selectedRegion,
        setSelectedRegion
    }

}