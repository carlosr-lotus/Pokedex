// *** Styles *** //
import styles from '../styles/components/SearchBar.module.css';

// *** Icons *** //
import { BiSearchAlt } from 'react-icons/bi';

export default function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
            <h1>Which pokémon are you looking for?</h1>

            <div className={styles.inputPokemonContainer}>
                <input placeholder="Pikachu..." />
                <BiSearchAlt size={25} />
            </div>
        </div>
    )
}