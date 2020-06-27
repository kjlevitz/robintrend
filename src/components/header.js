import Head from 'next/head'
import styles from './NavBar.module.css'

export default function Header() {
    let symbol;


    return (
        <div className="container">
          <Head>
            <div className={styles.topnav}>
                <a href="index" alt="home" src="../media/images/home.png" width="250" height="50">Home</a>
                <a href="trends">Trends</a>
                <a href="about">About</a>
                <a><input type="search" id="stockSymbol" placeholder="Search Stock"></input></a>
                <a><button type="button" onClick="searchStock()">Search</button></a>


            </div>

              <script>
                  function searchStock() {
                  console.log("Input: ", document.getElementById("stockSymbol").valueOf())
              }
              </script>
          </Head>
    </div>


      )
}