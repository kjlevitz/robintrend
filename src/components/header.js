import Head from 'next/head'
import styles from './NavBar.module.css'

export default function Header() {
    return (
        <div className="container">
          <Head>
            <div className={styles.topnav}>
                <a href="index">Home</a>
                <a href="trends">Trends</a>
                <a href="search">Search Stocks</a>
                <a href="about">About</a>
            </div>
          </Head>
        </div>
      )
}

