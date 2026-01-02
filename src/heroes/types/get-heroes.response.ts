import type { Hero } from "./hero.interfaces";

export interface GetHeroesResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}

