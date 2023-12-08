import React from "react";
import { useAxios } from "./hooks"; 
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { v4 as uuid } from "uuid";

function PokeDex() {
    // Base URL for the Pokémon API
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    // Use the useAxios hook with the base URL
    const [pokemon, addPokemonData] = useAxios(baseUrl);

    const addPokemon = name => {
        // Call the function provided by useAxios with the name of the Pokémon
        // Pass the name as a suffix to the URL
        addPokemonData(`/${name}`);
    };

    return (
        <div className="PokeDex">
            <PokemonSelect addPokemon={addPokemon} />
            <div className="PokeDex-card-area">
                {pokemon.map(p => (
                    <PokemonCard key={uuid()} front={p.sprites.front_default} back={p.sprites.back_default} name={p.name} stats={p.stats} />
                ))}
            </div>
        </div>
    );
}

export default PokeDex;
