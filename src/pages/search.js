import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import styles from '../components/NavBar.module.css'

export default function Search() {
    return (
        <div className="container">
          <Header/>
          <main>
            <h1 className="title">
                Search for a stock here
            </h1>
          </main>
          <Footer />
        </div>
      )
}