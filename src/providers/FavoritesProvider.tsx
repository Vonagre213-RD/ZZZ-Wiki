import { useState, useEffect } from "react";
import FavoritesContext from "@/context/FavoritesContext";

interface props {
    children: React.ReactNode
}
export default function FavoritesProvider({ children }: props) {
    const [favorites, setFavorites] = useState<string[]>(() => {
        const cacheObtainedItems = localStorage.getItem("ZZZApiFavorites")
        return cacheObtainedItems !== null ? JSON.parse(cacheObtainedItems) : []
    })

    const addAgent = (id: string) => {
        const temp = [...favorites, id]
        setFavorites(temp)
    }
    const removeAgent = (id: string) => {
        const temp = [...favorites].filter(a => a !== id)
        setFavorites(temp)
    }

    useEffect(() => {
        const data = JSON.stringify(favorites)
        localStorage.setItem("ZZZApiFavorites", data)
    }, [favorites])
    return (
        <FavoritesContext.Provider value={{ favorites, addAgent, removeAgent }}>
            {children}
        </FavoritesContext.Provider>
    )
}