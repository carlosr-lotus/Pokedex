// This component has connections with the following components:
// 'pokemonCard.tsx'

// *** Native features *** //
import { useEffect, useState } from 'react';

// *** Packages *** //
import axios from 'axios';
import { motion } from 'framer-motion';

// *** Styles *** //
import styles from '../styles/components/SearchBar.module.css';

// *** Icons *** //
import { BiSearchAlt } from 'react-icons/bi';

// Animation presets for 'motion' //
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

interface PokemonProps {
    name: string,
    abilities: [any],
    sprites: SpritesProps,
    arroz?: string,
}

interface SpritesProps {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
}

export default function SearchBar() {

    const [pokemon, setPokemon] = useState<PokemonProps>(null);
    const [search, setSearch] = useState('');

    // Get pokemon data from API
    function searchPokemon(e) {
        setSearch(e.target.value);

        if (e.target.value !== null) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value.toLowerCase()}/`)
                .then((res) => {
                    console.log(res.data);
                    setPokemon(res.data);
                }).catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className={styles.searchBarContainer}
        >
            <h1>Which pokémon are you looking for?</h1>

            <div className={styles.inputPokemonContainer}>
                <input placeholder="Pikachu..."
                    autoComplete="off"
                    onKeyPress={(e) => e.key === "Enter" && searchPokemon(e)}
                />
                <BiSearchAlt size={25} />

                {pokemon ?
                    <div>
                        <img src={pokemon.sprites.front_default} />
                        <h1>{pokemon.name}</h1>
                        <h2>{pokemon.arroz}</h2>
                    </div>
                    :
                    <div></div>}
            </div>
        </motion.div>
    )
}