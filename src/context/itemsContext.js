import { createContext, useState } from "react";

export const ItemContext = createContext()

export const  ItemsProvider = ({children}) => {
    const [ItemSelected, SetItemSelected] = useState('')
    

    return(
        <ItemContext.Provider value = {{
            ItemSelected,
            SetItemSelected
        }}
        >

            {children}

        </ItemContext.Provider>

    )
}

