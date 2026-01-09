import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interfaces";

interface FavoriteHeroContext {
    // states
    favorites: Hero[];
    favoriteCount: number;
    // Methods
    isFavorite: (hero: Hero)=> boolean;
    toggleFavorite: (hero: Hero) => void;
}






// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHerocontext = createContext({}  as FavoriteHeroContext);


const getFavoriteFromLocalStorage = ():Hero[] => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

export const FavoriteHeroProvider = ({children}: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getFavoriteFromLocalStorage());
    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(h => h.id == hero.id);
        if(heroExist){
            setFavorites(favorites.filter(h => h.id !== hero.id));
            return;
        }
        setFavorites([...favorites, hero]);
    }
    const isFavorite = (hero: Hero) => {
        return favorites.some(h => h.id === hero.id);
    }
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])
    return (
        <FavoriteHerocontext 
        value={{
            favoriteCount: favorites.length,
            favorites: favorites,
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite
        }}
        >
            {children}
        </FavoriteHerocontext>
    )
}