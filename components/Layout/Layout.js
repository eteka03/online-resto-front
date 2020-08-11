import React from 'react'
import Head from 'next/head'
import styles from '../Layout/Layout.module.scss'
import Navbar from '../Navbar/Navbar'

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
        <Head>
         
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
  
        <main >
         {children}
        </main>
  
        <footer >
          footer
        </footer>
      </div>
    )
}
