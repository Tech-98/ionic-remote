import { PokemonRoot } from './pokemon-root';

export interface Pokedex {
    count: number;
    next: string;
    previous: string;
    results: PokemonRoot[];
}