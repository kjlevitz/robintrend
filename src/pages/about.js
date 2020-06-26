import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import styles from '../components/NavBar.module.css'
 
 export default function about(){
    return (
        <div className="container">
          <Header />
    
          <main>
            <h1 className="title">
                About
            </h1>
    
          </main>
    
          <Footer />
    
        </div>
      )
}