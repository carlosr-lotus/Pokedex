// !!! This component receives props/data from:
// 'searchBar.tsx'

// *** Native functions *** //
import { useRef } from 'react';

// *** Packages *** //
import { motion } from 'framer-motion';

// *** Style CSS *** //
import styles from '../styles/components/PokemonCard.module.css';

// *** Icons *** //
import { AiFillHeart } from 'react-icons/ai';

import { PokemonProps } from './searchBar';

// Animation presets for 'motion' //
const variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 }
}

interface PokemonCardProps {
    data: PokemonProps
}

export default function PokemonCard(props: PokemonCardProps) {

    function returnColorByPokemonType(type) {
        switch (type) {
            case 'bug': return { colorPrimary: '#a8b820' }
            case 'dark': return { colorPrimary: '#705848' }
            case 'dragon': return { colorPrimary: '#7038f8' }
            case 'electric': return { colorPrimary: '#f8d030' }
            case 'fighting': return { colorPrimary: '#c03028' }
            case 'fire': return { colorPrimary: '#f08030' }
            case 'flying': return { colorPrimary: '#a890f0' }
            case 'grass': return { colorPrimary: '#78c850' }
            case 'ground': return { colorPrimary: '#e0c068' }
            case 'ghost': return { colorPrimary: '#705898' }
            case 'ice': return { colorPrimary: '#98d8d8' }
            case 'normal': return { colorPrimary: '#A8A878' }
            case 'poison': return { colorPrimary: '#a040a0' }
            case 'psychic': return { colorPrimary: '#f85888' }
            case 'rock': return { colorPrimary: '#b8a038' }
            case 'steel': return { colorPrimary: '#b8b8d0' }
            case 'water': return { colorPrimary: '#6890f0' }
            default:
                return {
                    colorPrimary: '#fff'
                }
        }
    }

    function returnFormattedStatName(name) {
        switch (name) {
            case 'hp': return `HP:`
            case 'attack': return `Attack:`
            case 'defense': return `Defense:`
            case 'special-attack': return 'Sp. Atk:'
            case 'special-defense': return 'Sp. Def:'
            case 'speed': return `Speed:`;
            default: {
                return 'NonID';
            }
        }
    }

    function returnStatColorByPokemonName(name) {
        switch (name) {
            case 'hp': return 'var(--Green-Bar)'
            case 'attack': return 'var(--Red-Bar)'
            case 'defense': return 'var(--Blue-Bar)'
            case 'special-attack': return 'var(--Red-Bar)'
            case 'special-defense': return 'var(--Blue-Bar)'
            case 'speed': return 'var(--Blue-Bar)'
            default: {
                return 'var(--Green-Bar)'
            }
        }
    }

    return (
        <motion.div
            drag
            dragConstraints={{
                top: -0,
                right: 250,
                bottom: 250,
                left: -250
            }}
            initial="hidden"
            animate="visible"
            variants={variants}
            className={styles.pokemonCardContainer}
            style={{ backgroundColor: returnColorByPokemonType(props.data.types[0].type.name).colorPrimary }}
        >
            <AiFillHeart />

            {/* *** Pokemon Details *** */}
            <div className={styles.pokemonDetailsContainer}>
                <h1>{props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1)}</h1>

                <div className={styles.pokemonTypeContainer}>
                    {props.data.types.map((pokemon, index) => {

                        return (
                            <div className={styles.pokemonType} key={index}>
                                <h2>{pokemon.type.name.charAt(0).toUpperCase() + pokemon.type.name.slice(1)}</h2>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.imageBackground}>
                    <img src={props.data.sprites.front_default} />
                </div>
            </div>

            {/* *** Pokemon Stats Details */}
            <div className={styles.pokemonStatsContainer}>
                <h3>Base Stats</h3>

                {props.data.stats.map((data, index) => {
                    return (
                        <div className={styles.pokemonStatsDetailsContainer} key={index}>

                            <p className={styles.statsID}>
                                {returnFormattedStatName(data.stat.name)}
                            </p>

                            <p className={styles.statsAmountNumber}>
                                {data.base_stat}
                            </p>

                            <div className={styles.statsBar}>
                                <div
                                    className={styles.statsBarFilling}
                                    style={{
                                        width: `${data.base_stat}%`,
                                        backgroundColor: returnStatColorByPokemonName(data.stat.name)
                                    }}
                                >
                                    {data.base_stat > 100 ? <p>+</p> : ''}
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>
        </motion.div>
    )
}