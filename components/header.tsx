// *** Styles *** //
import styles from '../styles/components/Header.module.css';

// *** Packages *** //
import { motion } from 'framer-motion';

// *** Icons *** //
import { SiPokemon } from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';

const variants = {
    hidden: { y: -100 },
    visible: { y: 0 },
}

export default function Header() {
    return (
        <div
            className={styles.headerGlobalContainer}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ delay: .5 }}
                variants={variants}
                className={styles.headerItens}
            >
                <SiPokemon size={110}></SiPokemon>
                <AiFillHeart size={25} />
            </motion.div>
        </div>
    )
}