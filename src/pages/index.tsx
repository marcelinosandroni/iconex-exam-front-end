import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Iconex</title>
        <meta name="description" content="Iconex web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Iconex</h2>
    </div>
  )
}

export default Home
