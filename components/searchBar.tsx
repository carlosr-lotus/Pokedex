// !!! This component sends data to the following components:
// 'pokemonCard.tsx'

// *** Native features *** //
import { useEffect, useState, useRef } from 'react';

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
    hidden: { y: -100 },
    visible: { y: 0 },
}

export interface PokemonProps {
    name: string,
    abilities: [any],
    sprites: SpritesProps,
    types: [any],
    stats: [any],
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
    const [found, setFound] = useState(true);
    const [search, setSearch] = useState('');

    const searchInput = useRef(null);

    // Input focus when page loads
    useEffect(() => {
        searchInput.current.focus();

        // axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        //     .then((res) => {
        //         console.log(res.data.results);
        //     }).catch(error => {
        //         console.log(error);
        //     })
    }, [])

    // Get specific pokemon data from API
    function searchPokemon(e) {
        if (search) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.toLowerCase()}/`)
                .then((res) => {
                    setPokemon(res.data);
                    setFound(true);
                    console.log(res.data);
                }).catch(error => {
                    setPokemon(null);
                    setFound(false);
                    console.log(error);
                })
        } else {
            setFound(false);
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
                    ref={searchInput}
                />
                <BiSearchAlt size={25} onClick={() => searchPokemon(search)} />

                {pokemon ?
                    <PokemonCard
                        data={pokemon}
                    />
                    :
                    <h1>{found ? '' : 'Pokémon not found.'}</h1>
                }
            </div>
        </motion.div>
    )
}