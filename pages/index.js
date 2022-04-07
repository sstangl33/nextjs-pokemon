/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

// export async function getServerSideProps() {
export async function getStaticProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Home({ pokemon }) {
  // Client Side Code
  // const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   async function getPokemon() {
  //     const resp = await fetch(
  //       "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  //     );
  //     setPokemon(await resp.json());
  //   }
  //   getPokemon();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h5>{pokemon.name}</h5>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
