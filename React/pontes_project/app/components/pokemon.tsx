"use client"

import { useState } from "react";

export default function Pokemon() {
    const [nomePokemon, setNomePokemon] = useState("");
    const [pokemon, setPokemon] = useState(null);


async function buscarPokemon() {
    const dados = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`);
    const resposta = await dados.json();
    console.log(resposta);
}

    return (
        <>
            <input type="text" value={nomePokemon} onChange={(e) => setNomePokemon(e.target.value)} />
            <button onClick={buscarPokemon}>Pesquisar</button>

            {pokemon && (
                
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>)}
                





        </>
    )
}