import React, { useState } from "react";
import type { FilterContextType, Filter } from "../types";

const FilterContext = React.createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filter, setFilter] = useState<Filter>('all');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}
export default FilterContext;