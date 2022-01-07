// *** Styles *** //
import styles from '../styles/components/Header.module.css';

// *** Packages *** //
import { motion } from 'framer-motion';

// *** Icons *** //
import { SiPokemon } from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';

// Animation presets for 'motion' //
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export default function Header() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className={styles.headerGlobalContainer}
        >
            <div className={styles.headerItens}>
                <SiPokemon size={110}></SiPokemon>
                <AiFillHeart size={25} />
            </div>
        </motion.div>
    )
}