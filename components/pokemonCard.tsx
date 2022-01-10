// This component receives props/data from:
// 'searchBar.tsx'

// *** Style CSS *** //
import styles from '../styles/components/PokemonCard.module.css';

// *** Icons *** //
import { AiFillHeart } from 'react-icons/ai';
import { BsFillLightningFill } from 'react-icons/bs';

import { useState } from 'react';
import { PokemonProps } from './searchBar';

interface PokemonCardProps {
    data: PokemonProps
}

export default function PokemonCard(props: PokemonCardProps) {

    // const pokemon = props;

    console.log(props.data.stats[0].base_stat);

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

    console.log(props.data.types);

    return (
        <div
            className={styles.pokemonCardContainer}
            style={{ backgroundColor: returnColorByPokemonType(props.data.types[0].type.name).colorPrimary }}
        >
            <AiFillHeart />

            {/* *** Pokemon Details *** */}
            <div className={styles.pokemonDetailsContainer}>
                <h1>{props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1)}</h1>

                {props.data.types.map((pokemon, index) => {
                    return (
                        <div className={styles.pokemonType} key={index}>
                            {/* <h2>Eletronics hehe</h2>
                            <h2>Psychic</h2> */}
                        </div>
                    )
                })}

                <div className={styles.imageBackground}>
                    <img src={props.data.sprites.front_default} />
                </div>
            </div>

            {/* *** Pokemon Stats Details */}
            <div className={styles.pokemonStatsContainer}>
                <h3>Base Stats</h3>


                {props.data.stats.map((data, index) => {
                    console.log(data);
                    return (
                        <div className={styles.pokemonStatsDetailsContainer}>
                            <p className={styles.statsID}>
                                {returnFormattedStatName(data.stat.name)}
                            </p>
                            <p className={styles.statsAmountNumber}>
                                {data.base_stat}
                            </p>
                            <div className={styles.statsBar}>
                                <div className={styles.statsBarFillingGreen}></div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}