// *** Native features *** //
// import type { NextPage } from 'next'
import Head from 'next/head'

// *** Packages *** //
import { motion } from 'framer-motion';

// *** Components *** //
import Header from '../components/header';
import SearchBar from '../components/searchBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex | Home</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <SearchBar />
    </>
  )
}
