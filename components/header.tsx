import styles from '../styles/components/Header.module.css';

// *** Packages *** //
import { motion } from 'framer-motion';

// *** Icons *** //
import { SiPokemon } from 'react-icons/si';
import { MdDarkMode } from 'react-icons/md';

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
            <SiPokemon size={110}></SiPokemon>
            <MdDarkMode size={25} />
        </motion.div>
    )
}