import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interfaces";

const BASE_URL = import.meta.env.VITE_API_URL;

interface Options {
 name?: string;
 team?: string;
 category?: string;
 universe?: string;
 status?: string;
 strenght?: string;   
}

export const searchHeroesAction = async (options: Options = {}) => {
    const {name, team, category, universe, status, strenght} = options;
    if(!name && !team && !category && !universe && !status && !strenght){
        return [];
    }
    const {data} = await heroApi.get<Hero>(`/search`, {
        params: {
            name,
            team,
            category,
            universe,
            status,
            strenght
        }
    });
    return {
        ...data,
        image: `${BASE_URL}/images/${data.image}`
    }
}