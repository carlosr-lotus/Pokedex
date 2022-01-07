// This component receives props/data from:
// 'searchBar.tsx'

// *** Style CSS *** //
import styles from '../styles/components/PokemonCard.module.css';

// *** Icons *** //
import { AiFillHeart } from 'react-icons/ai';

import { useState } from 'react';
import { PokemonProps } from './searchBar';

interface PokemonCardProps {
    data: PokemonProps
}

export default function PokemonCard(props: PokemonCardProps) {

    // const pokemon = props;

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

    console.log(props.data.types);

    return (
        <div
            className={styles.pokemonCardContainer}
            style={{ backgroundColor: returnColorByPokemonType(props.data.types[0].type.name).colorPrimary }}
        >
            <AiFillHeart />

            <div className={styles.pokemonDetailsContainer}>
                <h1>{props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1)}</h1>

                {props.data.types.map((pokemon, index) => {
                    return (
                        <div className={styles.pokemonType} >
                            <h2>{pokemon.type.name.charAt(0).toUpperCase() + pokemon.type.name.slice(1)}</h2>
                        </div>
                    )
                })}

                <div className={styles.imageBackground}>
                    <img src={props.data.sprites.front_default} />
                </div>
            </div>

            <div className={styles.pokemonStatsContainer}>
                <h3>Base Stats</h3>
                <p>Attack: </p>
                <p>Defense: </p>
            </div>
        </div>
    )
}