// !!! This component sends data to the following components:
// 'pokemonCard.tsx'

// *** Native features *** //
import { useEffect, useState } from 'react';

// *** Components *** //
import PokemonCard from './pokemonCard';

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

export interface PokemonProps {
    name: string,
    abilities: [any],
    sprites: SpritesProps,
    types: [any],
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
        // console.log(pokemon);
        // console.log(search);

        if (search) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.toLowerCase()}/`)
                .then((res) => {
                    console.log(res.data.types);
                    setPokemon(res.data);
                }).catch(error => {
                    console.log(error);
                })
        };
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
                    onChange={(e) => { setSearch(e.target.value) }}
                    onKeyPress={(e) => e.key === "Enter" && searchPokemon(search)}
                />
                <BiSearchAlt size={25} onClick={() => searchPokemon(search)} />

                {pokemon ?
                    <div>
                        <PokemonCard
                            data={pokemon}
                        />
                    </div>
                    :
                    <div></div>}
            </div>
        </motion.div>
    )
}