import Head from 'next/head'
import styles from './NavBar.module.css'

export default function Header() {
    return (
        <div className="container">
          <Head>
            <div className={styles.topnav}>
                <a href="index" alt="home" src="../media/images/home.png" width="250" height="50">Home</a>
                <a href="trends">Trends</a>
                <a href="about">About</a>
                <a><input type="text" placeholder="Search Stock"></input></a>
                <a><input id="button_searchSymbol" type="button" onclick="doSomething()" value="Search"></input></a>
            </div>
          </Head>
        </div>
      )
}

