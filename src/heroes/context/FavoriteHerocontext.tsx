import { createContext, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interfaces";

interface FavoriteHeroContext {
    // states
    favorites: Hero[];
    favoriteCount: number;
    // Methods
    ifFavorite: (hero: Hero)=> boolean;
    toggleFavorite: (hero: Hero) => void;
}






export const FavoriteHerocontext = createContext({}  as FavoriteHeroContext);



export const FavoriteHeroProvider = ({children}: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>([]);
    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(h => h.id == hero.id);
        if(heroExist){
            setFavorites(favorites.filter(h => h.id !== hero.id));
            return;
        }
        setFavorites([...favorites, hero]);
    }
    return (
        <FavoriteHerocontext 
        value={{
            favoritesCount: 0,
            favorite: [],
            ifFavorite: () => {},
            toggleFavorite: toggleFavorite
        }}
        >
            {children}
        </FavoriteHerocontext>
    )
}